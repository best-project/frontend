type RouteItem = {
  path: string;
  component?: React.ComponentType<any>;
  exact?: boolean;
  needAuth?: boolean;
  routes?: RouteItem[];
};

export default RouteItem;
