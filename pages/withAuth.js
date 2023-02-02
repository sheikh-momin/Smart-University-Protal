import React from 'react';
import Router from 'next/router';

const withAuth = WrappedComponent => {
  return class extends React.Component {
    static async getInitialProps(ctx) {
      const pageProps = WrappedComponent.getInitialProps
        ? await WrappedComponent.getInitialProps(ctx)
        : {};

      return { ...pageProps };
    }

    componentDidMount() {
      const isAuthenticated = checkIfAuthenticated(); // a custom function to check if the user is authenticated
      if (!isAuthenticated) {
        Router.push('/login');
      }
    }

    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
};

export default withAuth;
