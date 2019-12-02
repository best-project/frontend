import React from 'react';
import { authService } from '../../services';
import { Redirect } from 'react-router-dom';

const FaceobokLoginPage = props => {
    const queryParams = props.location.hash;

    let facebookAccessToken = queryParams.substring(
        queryParams.lastIndexOf('#access_token=') + 1,
        queryParams.lastIndexOf('&data_access_expiration_time'),
    );

    facebookAccessToken = facebookAccessToken.replace(`access_token=`, '');
    // tutaj trzeba wysłać accessToken
    authService.registerFacebookUser(facebookAccessToken).catch(err => console.log(err));

    return <Redirect to="/" />;
};

export default FaceobokLoginPage;
