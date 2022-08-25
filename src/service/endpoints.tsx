let endpoints = {
	//SSO
	LOGIN: '/api/ev/allevent',
	UPDATE_PROFILE: '/sso/userprofile'
}

let API_BOOK = {
	LOGIN_API: {
		url: endpoints.LOGIN,
		method: 'GET',
		data: null
	}
}

export default API_BOOK


