import $http from './httpService.js';

const apiUrl = 'https://api.imgbb.com/1/upload';
const apiKey = 'f337199af87870106310e2e20ef374fb';
const options = {
	headers: {
	
	}
};

export const imageService = {
	getAll: function () {
		return [];
	},
	
	add: function (image) {
		image.append('key',apiKey);
		options.body = image;
		return $http.post(apiUrl, image, options);
	},
	
	get: function (id) {},
	
	delete: function (id) {},
	
	find: function (name) {},
};
