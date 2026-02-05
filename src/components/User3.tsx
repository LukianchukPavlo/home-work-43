import { useState, useEffect } from "react";
import  Axios  from 'axios';
import { NavLink } from "react-router";

type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
};

export default function User2() {
    const [user, setUser] = useState<UserType | null >(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('')
  
    useEffect (() => {
        let isMounted = true;
        const loadUser = async () => {
        try {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users/3');
        if (isMounted) setUser(response.data);
        }  catch {
        if (isMounted) setError("Error loading user");
        }  finally {
        if (isMounted) setLoading(false);
        }
    }
        loadUser();

        return () => {
            isMounted = false;
        }
    }, []);

    if (error) return <h1>{error}</h1>
    if (loading) return <h1>Loading...</h1>
    if (!user) return null;

    return (
        <div>
            <NavLink to="/"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >Home</NavLink>
            { "||" } 
            <NavLink to="/User1"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 1</NavLink>
            { "||" } 
            <NavLink to="/User2"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 2</NavLink>
            { "||" } 
            <NavLink to="/User3"
            style={({ isActive }) => ({
            color: isActive ? "red" : "blue",
            textDecoration: isActive ? "underline" : "none",
            fontWeight: isActive ? "bold" : "normal"
            })}
            >User 3</NavLink>
        

        <h2>User data:</h2>
        <p><strong>Name:</strong> {user.name}</p>
        <p><strong>Email:</strong> {user.email}</p>
        <p><strong>Phone:</strong> {user.phone}</p>
        <p><strong>Username:</strong> {user.username}</p>
        <p><strong>Website:</strong> {user.website}</p>
        </div>
    );
};