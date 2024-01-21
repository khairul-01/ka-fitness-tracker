import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from './../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const axiosPublic = useAxiosPublic();

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();

    const signUp = (email, password) => {
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const logIn = (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password);
    }

    const googleSignin = () => {
        setLoading(true);
        return signInWithPopup(auth, googleProvider);
    }

    const logOut = () => {
        setLoading(true);
        return signOut(auth);
    }

    const userProfileUpdate = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser=> {
            setUser(currentUser);
            if(currentUser){
                console.log("User logged in successfully");
                // getting token and store client information
                const userInfo = {
                    email: currentUser.email
                }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                    }
                })
            }
            else{
                console.log("User signed out");
                // remove token if token stored in client site
                localStorage.removeItem('access-token');
                setLoading(false);
            }
        })
        return () => {
            return unSubscribe();
        }
    },[])

    const authValue = {
        signUp,
        logIn,
        googleSignin,
        logOut,
        userProfileUpdate,
        user,
        loading,
    }
    
    return (
        <AuthContext.Provider value={authValue}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;