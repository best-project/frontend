import handleResponse from '../../common/helpers/handleResponse.js';

export class AuthServiceFactory {
    constructor(httpService, storageService) {
        this.httpService = httpService;
        this.storageService = new storageService();
    }

    login(email, password) {
        return this.httpService
            .POST('token', { email, password })
            .then(handleResponse)
            .then(user => {
                this.storageService.setItem('currentUser', JSON.stringify(user));
                return user;
            });
    }

    logout = () => {
        this.storageService.removeItem('currentUser');
    };

    verifyToken(token) {
        return this.httpService.POST('verify-token', token);
    }

    refreshToken(token) {
        return this.httpService.PATCH('refresh-token', token);
    }

    registerUser(name, email, password) {
        return this.httpService.POST(`teams`, { name, email, password }).then(handleResponse);
    }
}
