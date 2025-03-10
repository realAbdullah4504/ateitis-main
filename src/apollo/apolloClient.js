import fetch from "isomorphic-fetch";
import { ApolloClient, InMemoryCache, createHttpLink, from } from "@apollo/client";
import { setContext } from '@apollo/client/link/context';
import { onError } from "@apollo/client/link/error";
import { isEmpty } from "lodash";
import { jwtDecode } from "jwt-decode";

// Token expiry check
const isTokenExpired = authToken => {
  if (!authToken) return true;
  try {
    const { exp } = jwtDecode(authToken);
    const date = new Date(0);
    date.setUTCSeconds(exp);
    return Date.now() >= date.getTime();
  } catch {
    return true;
  }
};

// HTTP Link
const httpLink = createHttpLink({
  uri: `${process.env.GATSBY_WORDPRESS_SITE_URL}/graphql`,
  fetch,
  credentials: 'include',
});

// Auth Link
const authLink = setContext((_, { headers }) => {
  let sessionHeader = {};
  let authHeader = {};

  if (typeof window !== 'undefined') {
    // Session handling
    const session = localStorage.getItem("woo-session");
    if (!isEmpty(session)) {
      if (isTokenExpired(session)) {
        localStorage.removeItem("woo-session");
      } else {
        sessionHeader = {
          "woocommerce-session": `Session ${session}`
        };
      }
    }

    // Auth token handling
    const auth = JSON.parse(localStorage.getItem("auth") || "null");
    const token = auth?.authToken;
    if (!isEmpty(token)) {
      authHeader = {
        authorization: `Bearer ${token}`
      };
    }
  }

  return {
    headers: {
      ...headers,
      ...sessionHeader,
      ...authHeader
    }
  };
});

// Error Link
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors) {
    graphQLErrors.forEach(({ message, locations, path }) => {
      console.error(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      );
      
      // Handle session expiration
      if (message.includes('Expired token')) {
        if (typeof window !== 'undefined') {
          localStorage.removeItem("woo-session");
        }
      }
    });
  }
  if (networkError) {
    console.error(`[Network error]: ${networkError}`);
  }
});

// Apollo Client configuration
export const client = new ApolloClient({
  link: from([errorLink, authLink, httpLink]),
  cache: new InMemoryCache({
    typePolicies: {
      // Add any type policies if needed
    }
  }),
  connectToDevTools: true,
  defaultOptions: {
    watchQuery: {
      fetchPolicy: 'network-only',
      errorPolicy: 'ignore',
    },
    query: {
      fetchPolicy: 'network-only',
      errorPolicy: 'all',
    },
  }
});