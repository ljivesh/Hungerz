import axios from "axios";

const Axios = axios.create({
    baseURL: 'https://wild-blue-pronghorn-wrap.cyclic.app/'
});


// const Axios = axios.create({
//     baseURL: 'http://localhost:8000/'
// });

export default Axios;

