import React from 'react'

class ErrorBoundary extends React.Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', color: 'red' }}>
          <h3>Error loading component:</h3>
          <pre>{this.state.error?.toString()}</pre>
        </div>
      )
    }
    return this.props.children
  }
}

export default ErrorBoundary