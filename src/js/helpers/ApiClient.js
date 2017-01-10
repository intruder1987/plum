import superagent from 'superagent';

const methods = ['get', 'post', 'put', 'patch', 'delete'];

function formatUrl(path) {
    if (path.indexOf('http') === 0) {
        return path;
    }
    const adjustedPath = path[0] !== '/' ? '/' + path : path;
    if (path.indexOf('/graph') === 0) {
        // return 'https://' + window.location.hostname + '/v1' + adjustedPath;
        return '/api' + adjustedPath;
    } else if (path.indexOf('/file') === 0) {
        // return 'https://' + window.location.hostname + '/v1' + adjustedPath.replace('/file', '');
        return '/api' + adjustedPath.replace('/file', '');
    } else {
        // return 'https://' + window.location.hostname + '/v1' + adjustedPath;
        return '/api' + adjustedPath;
    }
}

class ApiClient {
    constructor() {
        methods.forEach((method) =>
            this[method] = (path, { params, data, auth} = {}) => new Promise((resolve, reject) => {
                if (path.indexOf('.json') === -1) {
                    path = formatUrl(path);
                }

                let request = superagent[method](path);
                request.set('Content-Type', 'application/json');

                if (this.token && path.indexOf('.json') === -1) {
                    request.set('Authorization', 'Bearer ' + this.token);
                }

                if (params) {
                    request.query(params);
                }

                let delay = undefined;
                if (data && data.delay) {
                    delay = data.delay;
                    delete data.delay;
                }

                if (data) {
                    request.send(data);
                }

                if (path.indexOf('.json') === -1) {
                    request.end((err, { body } = {}) => err ? reject((body ? {...body, status: err.status}: err)) : (delay ? setTimeout(() => {resolve(body)}, delay) : resolve(body)));
                } else {
                    request.end((err, res) => {
                        if (res.ok) {
                            try {
                                resolve(JSON.parse(res.text));
                            } catch (e) {
                                resolve(res.text);
                            }
                        }
                    });
                }
            }
        ));
    }
}

export default ApiClient;
