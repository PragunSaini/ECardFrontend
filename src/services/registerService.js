import axios from 'axios'

const url = 'https://e-card-game.herokuapp.com'
// const url = 'http://localhost:5000'

// Register a user
const userRegister = async (username, email, password) => {
    try {
        const userData = await axios.post(`${url}/register`, {
            username,
            email,
            password
        })
        return userData.data
    } catch (error) {
        console.log('Error while registering =>', error.response.data)
        throw error
    }
}

export default {
    userRegister
}
