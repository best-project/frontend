import { BehaviorSubject } from 'rxjs';
import handleResponse from '../../common/helpers/handleResponse.js';

const currentUserSubject = new BehaviorSubject(JSON.parse(localStorage.getItem('currentUser')));

export class AuthServiceFactory {
    constructor(httpService, storageService) {
        this.httpService = httpService;
        this.storageService = new storageService();
    }

    currentUserValue() {
        return currentUserSubject.value;
    }

    login(email, password) {
        return this.httpService
            .POST('token', { email, password })
            .then(handleResponse)
            .then(user => {
                this.storageService.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
                return user;
            });
    }

    logout = () => {
        this.storageService.removeItem('currentUser');
        currentUserSubject.next(null);
    };

    verifyToken(token) {
        return this.httpService.POST('verify-token', token);
    }

    refreshToken(token) {
        return this.httpService.PATCH('refresh-token', token);
    }

    registerUser(firstName, lastName, email, password) {
        return this.httpService
            .POST(`profiles`, { firstName, lastName, email, password })
            .then(handleResponse);
    }

    registerFacebookUser(accessToken) {
        return this.httpService
            .POST(`social/facebook`, { accessToken })
            .then(handleResponse)
            .then(user => {
                this.storageService.setItem('currentUser', JSON.stringify(user));
                currentUserSubject.next(user);
                return user;
            });
    }
}
