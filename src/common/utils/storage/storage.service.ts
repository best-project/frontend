export class StorageService {
  getItem(field: string) {
      try {
          return localStorage.getItem(field);
      } catch (error) {
          return error;
      }
  }

  setItem(field: string, data: any) {
      localStorage.setItem(field, data);
  }

  removeItem(field: string) {
      localStorage.removeItem(field);
  }
}
