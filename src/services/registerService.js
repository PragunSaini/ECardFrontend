import axios from 'axios'

// Register a user
const userRegister = async (username, email, password) => {
    try {
        const userData = await axios.post('http://localhost:5000/register', {
            username,
            email,
            password
        })
        return userData.data
    } catch (error) {
        console.log('Error while registering =>', error)
        throw error
    }
}

export default {
    userRegister
}
