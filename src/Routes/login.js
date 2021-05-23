import axios from "axios";

export async function login({ email, password }) {
    const body = {
        email,
        password
    };
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/auth/login`, body)
    return res.data;
}