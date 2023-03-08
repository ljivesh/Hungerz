import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://wild-blue-pronghorn-wrap.cyclic.app/'
});

export default Axios;

