import $http from './httpService.js';
const PORT = 'http://localhost:3001';
const getUrl = (url) => {
	return PORT + url;
};
export default {
	get: function (url, body) {
		return $http.get(getUrl(url), body);
	},
	post: function (url, body) {
		return $http.post(getUrl(url), body);
	},
};
