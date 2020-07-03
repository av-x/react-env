/**
 * Http wrapper
 */
class Api {
  constructor({ host }) {
    this.host = host;
  }

  request(method, url, options = {}) {
    const req = {
      url: `${this.host}${url}`,
      method,
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: options.body,
    };

    if (options.body) {
      req.body = JSON.stringify(options.body);
    }

    return new Promise((resolve, reject) => (
      fetch(req.url, req).then(
        (response) => {
          if (response.status >= 200 && response.status < 300) {
            return response.json().then(
              (data) => resolve(data),
              (error) => reject(error),
            );
          }

          return response.json().then(
            (data) => reject(data),
            (error) => reject(error),
          );
        },
        (err) => reject(err),
      )
    ));
  }
}

export default new Api({ host: process.env.API_URL });

