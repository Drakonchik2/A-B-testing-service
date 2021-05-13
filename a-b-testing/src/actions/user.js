import axios from 'axios';
import { setUser } from 'src/reducers/userReducer';

export const authorisation = async (email, password) => {
    return async dispatch => {
        try {
            const response = await axios.get( 'http://localhost:5000/api/auth/login' , {
                email,
                password
            }) 
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e){
            alert(e.response.data.message)
        }

    }
    
}

export const auth = () => {
    return async dispatch => {
        try {
            const response = await axios.get( 'http://localhost:5000/api/auth/auth' , {
               
            }) 
            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            console.log(response.data)
        } catch (e){
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }

    }
    
}

export default authorisation;