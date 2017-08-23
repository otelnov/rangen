export const image = (params?: ImageParams): Promise<any> => {
  let url = 'https://api.500px.com/v1/photos?consumer_key=ggx6QR2s9jYb5CuPIy2Mwg9wuwvbNYjxeworIqqP';

  if (typeof params === 'object') {
    for (const i in params) {
      if (params.hasOwnProperty(i) && i !== 'key') {
        url += `&${i}=${params[i]}`;
      }
    }
  }

  // TODO: check if fetch available if not, use xmlhttprequest
  return fetch(url).then(response => response.json());
};

// export interface Image {
// }

export interface ImageParams {
  [key: string]: any;
}
