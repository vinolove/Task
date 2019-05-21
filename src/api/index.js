import axios from 'axios'

export const dataApi = async () =>{
    const result = await axios.get("https://jsonplaceholder.typicode.com/users");
    if (result.data) {
        return result.data
    }
    return []
}