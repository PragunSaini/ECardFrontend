import axios from 'axios'

// Register a user
const userRegister = async (username, email, password) => {
    try {
        const userData = await axios.post('http://localhost:5000/register', {
            username,
            email,
            password
        })
        console.log(userData)
        return userData.data
    } catch (error) {
        console.log(error)
        return null
    }
}

export default {
    userRegister
}
