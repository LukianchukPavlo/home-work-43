import { useState, useEffect } from "react";
import  Axios  from 'axios';
import { NavLink } from "react-router-dom";
import { useTheme } from "./ThemeContext"
import { useNavStyle } from "./navStyle"

export type UserType = {
  id: number;
  name: string;
  email: string;
  phone: string;
  username: string;
  website: string;
};

type UserProps = {
    userId: number;
}


export default function User({ userId }: UserProps) {
    const [user, setUser] = useState<UserType | null >(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState('');
    const { toggleTheme, theme, colors } = useTheme()
    const navStyle = useNavStyle()
  
    useEffect (() => {
        let isMounted = true;
        const loadUser = async () => {
        try {
        const response = await Axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`);
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
    }, [userId]);

    if (error) return <h1>{error}</h1>
    if (loading) return <h1>Loading...</h1>
    if (!user) return null;

    return (
    <body style={{ backgroundColor: colors.backgroundColor, color: colors.textColor, minHeight: "100vh", padding: "20px" }}>
      

      <NavLink to="/" style={navStyle}>Home</NavLink> {" || "}
      <NavLink to="/user/1" style={navStyle}>User 1</NavLink> {" || "}
      <NavLink to="/user/2" style={navStyle}>User 2</NavLink> {" || "}
      <NavLink to="/user/3" style={navStyle}>User 3</NavLink>

      <h2>User data:</h2>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Website:</strong> {user.website}</p>

      <button onClick={toggleTheme}>
        Toggle Theme ({theme})
      </button>
    </body>
  )
}
;