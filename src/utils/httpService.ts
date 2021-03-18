import axios from 'axios'

const http = axios.create()

export const rebuildHttp = () => {
	let headers = {}
	if (localStorage.accessToken) {
		headers = {...headers, Authorization: 'Bearer ' + localStorage.accessToken}
	}
	
	http.defaults.headers.common = headers
}

rebuildHttp()

export default http
