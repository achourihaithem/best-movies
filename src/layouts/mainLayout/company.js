import { Route } from "react-router-dom";
import React from "react";

const CompanyLayout = ({ children }) => <>{children}</>;

const CompanyLayoutRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={matchProps => (
        <CompanyLayout>
          <Component {...matchProps} />
        </CompanyLayout>
      )}
    />
  );
};
export default CompanyLayoutRoute;
