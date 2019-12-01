export const handleAdminResponse = (response: any) =>
  response.text().then((text: any) => {
    const data = text && JSON.parse(text);
    if (!response.ok) {
      return Promise.reject(data);
    }
    return data;
  });
