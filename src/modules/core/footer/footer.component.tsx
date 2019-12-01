import React from "react";
import FooterProps from "./footer.props";

const FooterComponent = (props: FooterProps) => {
    return (
        <footer className="footer mt-5 page-footer font-small">
            <div className="footer-copyright text-center py-3">
                Politechnika Śląska © 2020 Copyright
            </div>
        </footer>
    );
};

export default FooterComponent;
