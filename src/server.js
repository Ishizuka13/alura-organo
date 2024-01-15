import axios from 'axios';
export const server = () => {
	try {
        axios.get(`http://localhost:3000/colaborator`);
    } catch (error) {
        console.log(error)
    }
};