import { BehaviorSubject } from "rxjs";

import handleResponse from "./helpers/auth-response-handler.js";

const currentUserSubject = new BehaviorSubject(
  JSON.parse(localStorage.getItem("currentUser")!)
);

export class AuthServiceFactory {
  httpService: any;
  storageService: any;
  currentUser: any;
  constructor(httpService: any, storageService: any) {
    this.httpService = httpService;
    this.storageService = new storageService();
    this.currentUser = currentUserSubject.asObservable();
  }

  currentUserValue() {
    return currentUserSubject.value;
  }

  login(email: string, password: string) {
    return this.httpService
      .POST("obtain-token", { email, password })
      .then(handleResponse)
      .then((user: any) => {
        this.storageService.setItem("currentUser", JSON.stringify(user));
        currentUserSubject.next(user);
        return user;
      });
  }

  logout = () => {
    this.storageService.removeItem("currentUser");
    currentUserSubject.next(null);
  };

  verifyToken(token: string) {
    return this.httpService.POST("verify-token", token);
  }

  refreshToken(token: string) {
    return this.httpService.PATCH("refresh-token", token);
  }

  registerUser(name: string, email: string, password: string) {
    return this.httpService
      .POST(`teams`, { name, email, password })
      .then(handleResponse);
  }
}
