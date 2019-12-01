import { jwtToken } from './../config/config';

export const Methods = Object.freeze({
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    PATCH: 'PATCH',
    DELETE: 'DELETE',
});

class HttpServiceFactory {
    apiBase: string;
    fetch: any;
    storageService: any;
    constructor(apiBase: string, fetch: any, storageService: any) {
        this.apiBase = apiBase;
        this.fetch = fetch;
        this.storageService = new storageService();
    }

    GET(url: string) {
        return this.makeRequest(Methods.GET, url, undefined);
    }

    POST(url: string, body: Object) {
        return this.makeRequest(Methods.POST, url, body);
    }

    PATCH(url: string, body:Object) {
        return this.makeRequest(Methods.PATCH, url, body);
    }

    makeRequest(method: string, url: string, body: Object | undefined) {
        const token = JSON.parse(this.storageService.getItem(jwtToken));
        const headers = {
            'Content-Type': 'application/json',
            ...(token && { Authorization: `JWT ${token.token}` }),
        };

        const options = {
            method,
            headers,
            body: JSON.stringify(body),
        };
        const path = `${this.apiBase}/${url}/`;

        return fetch(path, options);
    }

    makeRequestForm(method: string, url: string, body: Object) {
        const formData = new FormData();
        Object.keys(body).forEach(fieldName => formData.append(fieldName, body[fieldName]));

        const token = JSON.parse(this.storageService.getItem(jwtToken));
        const headers = {
            ...(token && { Authorization: `JWT ${token.token}` }),
        };

        const options = {
            method,
            headers,
            body: formData,
        };
        console.log(headers);
        const path = `${this.apiBase}/${url}/`;

        return fetch(path, options);
    }
}

export default HttpServiceFactory;