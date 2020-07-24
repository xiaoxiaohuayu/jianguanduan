import axios from 'axios'

export function request(config) {

    const instace = axios.create({
        baseURL:'http://81.68.146.155/paymentsupervision',
        timeout:15000,
    })
    return instace(config);
}
