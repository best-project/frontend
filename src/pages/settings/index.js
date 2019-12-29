import React from 'react';
import { SettingsForm } from '../../components/forms/SettingsForm';
import { FooterComponent } from '../../components/Footer';
import { ContentComponent } from '../../components/Content';
import { CoursesWrapperComponent } from '../../components/CoursesWrapper';
import { HeaderComponent } from '../../components/Header';

const SettingsPage = () => {
    return (
        <CoursesWrapperComponent>
            <HeaderComponent />
            <ContentComponent>
                <SettingsForm />
            </ContentComponent>
            {/* <FooterComponent /> */}
        </CoursesWrapperComponent>
    );
};

export default SettingsPage;
