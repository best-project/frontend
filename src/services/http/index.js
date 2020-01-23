import { jwtToken } from '../../config/variables';

export const Methods = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
});

export class HttpServiceFactory {
    constructor(apiBase, fetch, storageService) {
        this.apiBase = apiBase;
        this.fetch = fetch;
        this.storageService = new storageService();
    }

    GET(url) {
        return this.makeRequest(Methods.GET, url, undefined);
    }

    POST(url, body) {
        return this.makeRequest(Methods.POST, url, body);
    }

    PATCH(url, body) {
        return this.makeRequest(Methods.PATCH, url, body);
    }

    DELETE(url, body) {
        return this.makeRequest(Methods.DELETE, url, body);
    }

    makeRequest(method, url, body) {
        const token = JSON.parse(this.storageService.getItem(jwtToken));

        const headers = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `${token.token}` }),
        };

        const options = {
            method,
            headers,
            body: JSON.stringify(body),
        };
        const path = `${this.apiBase}/${url}`;

        return fetch(path, options);
    }

    makeRequestForm(method, url, body) {
        const formData = new FormData();
        Object.keys(body).forEach(fieldName =>
            formData.append(fieldName, body[fieldName]),
        );

        const token = JSON.parse(this.storageService.getItem(jwtToken));
        const headers = {
            ...(token && { Authorization: `${token.token}` }),
        };

        const options = {
            method,
            headers,
            body: formData,
        };
        const path = `${this.apiBase}/${url}`;

        return fetch(path, options);
    }
}
