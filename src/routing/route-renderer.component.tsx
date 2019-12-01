import React from "react";
import RouteItem from "./route-item";
import { Route } from "react-router";

const RouteRendererComponent = (props: RouteItem) => {
  if (!props.routes || props.routes.length === 0) {
    return (
      <Route
        path={props.path}
        exact={props.exact}
        component={props.component}
      />
    );
  }

  return (
    <>
      {props.routes.map(route => (
        <RouteRendererComponent
          key={route.path}
          {...route}
          exact={!route.routes || route.routes.length === 0}
        />
      ))}
    </>
  );
};

export default RouteRendererComponent;
