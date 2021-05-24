import axios from "axios";

export async function createContact({
    firstName,
    lastName,
    phoneNumber,
    address,
    userId
}) {
    const body = {
        firstName,
        lastName,
        phoneNumber,
        address,
        userId
    };
    const res = await axios.post(`${process.env.REACT_APP_API_BASE_URL}/contacts`, body)
    return res.data;
}