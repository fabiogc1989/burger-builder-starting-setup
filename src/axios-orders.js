import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-645c6.firebaseio.com/'
});

export default instance;