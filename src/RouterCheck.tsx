import React, { lazy, Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";

import theme from "./theme";

import initializeInfo from "./hooks/initializeInfo";
import { store } from "./store";
const App = lazy(() => import("./containers/App"));
const Home = lazy(() => import("./containers/Home"));
const CallBack = lazy(() => import("./components/CallBack"));
const PaymentStatus = lazy(() => import("./containers/PaymentStatus"));

const PrivateRoute = ({ redirectPath, component: Component, ...rest }: any) => {
  initializeInfo();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.localStorage.accessToken) {
          return <Component {...props} />;
        } else {
          props.history.push(redirectPath || "/");
          return null;
        }
      }}
    />
  );
};

const PublicRoute = ({ redirectPath, component: Component, ...rest }: any) => {
  // initializeInfo();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (!window.localStorage.accessToken) {
          return <Component {...props} />;
        } else {
          props.history.push(redirectPath || "/home");
          return null;
        }
      }}
    />
  );
};

const RegularRoute = ({ component: Component, ...rest }: any) => {
  initializeInfo();
  return <Route {...rest} render={(props) => <Component {...props} />} />;
};

const PaymentStatusRoute = ({ redirectPath, component: Component, ...rest }: any) => {
  initializeInfo();
  return (
    <Route
      {...rest}
      render={(props) => {
        if (window.localStorage.accessToken) {
          return <Component {...props} />;
        } else {
          props.history.push(redirectPath || "/");
          return null;
        }
      }}
    />
  );
};

const RouterCheck = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={theme}>
        <CssBaseline>
          <BrowserRouter>
            <Suspense fallback={<div className="loader">Loading...</div>}>
              <Switch>
                <RegularRoute exact path="/" component={App} />
                <PrivateRoute path="/home" component={Home} />
                <PaymentStatusRoute path={['/success', '/canceled']} component={PaymentStatus} />
                <PublicRoute
                  redirectPath="/home"
                  path="/github-callback"
                  component={CallBack}
                />
              </Switch>
            </Suspense>
          </BrowserRouter>
        </CssBaseline>
      </ThemeProvider>
    </Provider>
  );
};
export default RouterCheck;
