const api = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    timeout: 10000,
    header: { 'Content-Type': 'Application/Json' }
})