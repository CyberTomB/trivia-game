export const api = axios.create({
   baseURL: 'https://opentdb.com/api.php?amount=1&category=32&type=multiple',
   timeout: 4000
})