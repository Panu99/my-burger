import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-88e6d.firebaseio.com//'
});

export default instance;