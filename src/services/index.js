import { apiBase } from '../config/variables';
import { HttpServiceFactory } from './http';
import { AuthServiceFactory } from './auth';
import { RoutingService } from './routing';
import { history } from '../config/history.js';
import { StorageService } from './storage';

export const httpService = new HttpServiceFactory(apiBase, fetch, StorageService);
export const routingService = new RoutingService(history);
export const authService = new AuthServiceFactory(httpService, StorageService);
