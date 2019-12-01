import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import AppProps from "app.props";
import AppBarComponent from "./modules/core/app-bar/app-bar.component";
import AppRoutes from "./modules/app/common/routes/app.routes";
import RouteRendererComponent from "./routing/route-renderer.component";
import FooterComponent from "modules/core/footer/footer.component";

const AppContainer = (props: AppProps) => {
    return (
        <Router>
            <AppBarComponent />
            <div className="page">
                {AppRoutes.routes &&
                    AppRoutes.routes.map(route => {
                        console.log(`Router added: ${route.path}`);
                        return (
                            <RouteRendererComponent
                                key={route.path}
                                {...route}
                                exact={
                                    !route.routes || route.routes.length === 0
                                }
                            />
                        );
                    })}
            </div>
            <FooterComponent />
        </Router>
    );
};

export default AppContainer;
