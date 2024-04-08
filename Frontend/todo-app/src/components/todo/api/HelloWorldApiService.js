import axios from 'axios'

// export function retrieveHelloWorldApi(){
//     return axios.get('http://localhost:8080/hello-world-bean')
// }

const apiClient = axios.create(
    {
        baseURL: 'http://localhost:8080'
    }
)

export const retrieveHelloWorldApi = () => apiClient.get('/hello-world-bean')
export const retrieveHelloWorldPathVariableApi = (username) => apiClient.get(`/hello-world/path-variable/${username}`)