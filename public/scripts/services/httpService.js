const call = (url, body, method, options) => {
    const config = {
        method: method,
        body: JSON.stringify(body),
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
        },
        ...options
    };
    return fetch(url, config).then((res) => res.json());
};

export default {
    get: function (url, body, options = {}) {
        return call(url, body, 'GET', options);
    },
    post: function (url, body, options={}) {
        return call(url, body, 'POST', options);
    },
};
