import axios from 'axios'

const url = process.env.REACT_APP_BACKEND

// Register a user
const userRegister = async (username, email, password) => {
    // eslint-disable-next-line
    try {
        const userData = await axios.post(`${url}/register`, {
            username,
            email,
            password
        })
        return userData.data
    } catch (error) {
        // console.log('Error while registering =>', error.response.data)
        throw error
    }
}

export default {
    userRegister
}
