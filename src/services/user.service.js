import axios from '../axios';

const handleLoginAuth = (userName, password) => {
    return axios.post('api/auth/login', { userName, password })
}
export { handleLoginAuth };
