/* eslint-disable no-unreachable */
import axios from 'axios';
import { getAllData ,User} from './get';

export const handleSubmit = async (event: React.FormEvent, email: string, password: string, Cpassword: string, isChecked: boolean): Promise<string> => {
    event.preventDefault();

    
    
    if (password.length < 8) return "Password must be longer than 8 characters.";
    if (password !== Cpassword) return "Passwords do not match.";
    if (!isChecked) return "Confirm you are not a robot.";

    const formData = { email, password };

    try {
        const response = await axios.post('http://localhost:10010/api.signup', formData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data.message; // Assuming the response contains a message
    } catch (error) {
        console.log('Error during request:', error); // Log the error object
        return "Error adding a user";
    }
};

export const handleSubmitLogIn = async (event: React.FormEvent, email: string, password: string, isChecked: boolean): Promise<User[]|string> => {
    event.preventDefault();
    
    if (email===''||email===' ') return "entre the email.";
    if (password===""||password===""||password.length<8) return "Password must be longer than 8 characters.";
    if (!isChecked) return "Confirm you are not a robot.";
    const formData= { email, password };
    if(email==="admin@gmail.com"&&password==="admin@admin.hanafi") {
        const usersArray:User[]|string=await getAllData(email, password);
        return usersArray;
    }
    try {
        const response = await axios.post('http://localhost:10010/api.login', formData, {
            headers: { 'Content-Type': 'application/json' }
        });
        if(response.data===null) return "wrong password or email!";
        localStorage.setItem('user',JSON.stringify(response.data));
        return "good";
    } catch (error) {
        console.log('Error during request:', error); 
        return "Error for login";
    }
};

export const handleSubmitPassword = async (event: React.FormEvent, email: string): Promise<number> => {
    const formData= { email };
    try {
        const response = await axios.post("http://localhost:10010/api.password", formData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.log('Error during request:', error); 
        return 0;
    }
}

export const handleChangePassword = async (event: React.FormEvent, email: string,password:string): Promise<number> => {
    const formData= { email,password };
    try {
        const response = await axios.post("http://localhost:10010/api.change.password", formData, {
            headers: { 'Content-Type': 'application/json' }
        });
        return response.data;
    } catch (error) {
        console.log('Error during request:', error); 
        return 0;
    }
}

export type setFunctionS=React.Dispatch<React.SetStateAction<string>>;
export type setFunctionB=React.Dispatch<React.SetStateAction<boolean>>;
export type setFunctionU=React.Dispatch<React.SetStateAction<User[]>>;