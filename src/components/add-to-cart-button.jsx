import { useLazyQuery, useMutation } from "@apollo/client";
import React, { useContext } from "react";
import { Button, Spinner } from "react-bootstrap";
// import { useToasts } from "react-toast-notifications";
import { v4 } from "uuid";
import cartImg from "../images/cart.png";
import ADD_TO_CART from "../mutations/add-to-cart";
import GET_CART from "../queries/get-cart";
import translations from "../utils/translations";
import { AppContext } from "./context/AppContext";
import { toTitleCase } from "../utils/string-utils";
import toast from "react-hot-toast";
export default function AddToCartButton({ product, caption, className, language }) {
  // const { addToast, removeAllToasts } = useToasts();
  const { cart, setCart } = useContext(AppContext);

  const name = product.acfCursos[language]["titulo" + toTitleCase(language)];

  // Get Cart Data.
  const [getCart, { loading, data }] = useLazyQuery(GET_CART, {
    // notifyOnNetworkStatusChange: true,
    fetchPolicy: "network-only",
    onCompleted: () => {
      const updatedCart = data;
      console.log(updatedCart, "updatedCart", product);
      if (updatedCart)
        localStorage.setItem("woo-next-cart", JSON.stringify(updatedCart));
      setCart(updatedCart.cart);
    },
    onError: error => {
      console.log(error);
    },
  });

  /* Agregar articulo al carrito */
  const [
    addToCart,
    { data: addToCartRes, loading: addToCartLoading, error: addToCartError },
  ] = useMutation(ADD_TO_CART, {
    variables: {
      input: {
        clientMutationId: v4(),
        productId: product.productId,
      },
    },
    onCompleted: (response) => {
      // On Success:
      // 1. Make the GET_CART query to update the cart with new values in React context.
      // addToast(
      //   <div className="toast-content">
      //     <div>{`${translations.cart.theProduct[language]} ${name} ${translations.cart.added[language]}.`}</div>
      //     <div>
      //       <Button href={`?${translations.cart.cart[language]}=1`} variant="outline-dark">
      //         {translations.cart.seeCart[language]}
      //       </Button>
      //     </div>
      //   </div>,
      //   {
      //     appearance: "success",
      //     autoDismiss: true,
      //   }
      // );

      toast.success(
        <div className="toast-content">
          <div>{`${translations.cart.theProduct[language]} ${name} ${translations.cart.added[language]}.`}</div>
          <Button href={`?${translations.cart.cart[language]}=1`} variant="outline-dark">
            {translations.cart.seeCart[language]}
          </Button>
        </div>
      );
      getCart();
    },

    onError: error => {
      // addToast(translations.cart.cantAdd[language], {
      //   appearance: "error",
      //   autoDismiss: true,
      // });
    },
  });

  if (addToCartLoading)
    return (
      <Button variant="dark" disabled className={`add-to-cart-button  ${className}`}>
        <Spinner as="span" animation="border" role="status" variant="light" size="sm">
          <span className="sr-only">Loading...</span>
        </Spinner>
        {caption} <img src={cartImg}></img>
      </Button>
    );
  return (
    <Button onClick={addToCart} variant="dark" className={`add-to-cart-button ${className}`}>
      <span></span>
      <span>{caption} </span>
      <img src={cartImg}></img>
    </Button>
  );
}
