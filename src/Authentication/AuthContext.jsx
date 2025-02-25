import {createContext,useContext,useState,useEffect} from "react";
import { account } from './Appwrite';
const AuthContext=createContext(null);

export const AuthProvider=({children})=>{
    const [user, setuser] = useState(null);
    const [isloggedin, setisloggedin] = useState(false);

    const handlesignup=async(username,email,password)=>{
        try {
            const session=await account.create("unique()", email, password, username);
            return session;
        } catch (error) {
            console.log("Signup Error",error.message)
            return null;
        }
    }

    const handlelogin=async(email,password)=>{
        try {
            
            const session=await account.createEmailPasswordSession(email, password);
            const sessions = await account.listSessions();
        for (let s of sessions.sessions) {
            if (s.$id !== session.$id) {
                await account.deleteSession(s.$id);
            }
        }
            const userData = await fetchcurrentuser();
            if (userData) {
                setuser(userData);
                setisloggedin(true);
            }
            return session;
        } catch (error) {
            console.log("Login error",error.message)
            return null;
        }
    }

    const handlelogout=async()=>{
        try {
            await account.deleteSession("current");
            setuser(null);
            setisloggedin(false);
        } catch (error) {
            console.log("Logout Error",error.message)
        }
    }

    const fetchcurrentuser=async()=>{
        try {
            const loggedInUser = await account.get();
                if (loggedInUser) {
                    setuser(loggedInUser);
                    setisloggedin(true);
                } else {
                    setisloggedin(false);
                }
                return loggedInUser;
        } catch (error) {
            console.log("No Current Session",error.message)
            return null;
        }
    }

    useEffect(() => {
      fetchcurrentuser()
    }, [])
    

    return(
        <AuthContext.Provider value={{ user, isloggedin, handlesignup, handlelogin, handlelogout }}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = () => {
    return useContext(AuthContext);
};
