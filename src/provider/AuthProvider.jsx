import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "../firebase/firebase.config";
import useAxiosPublic from './../hooks/useAxiosPublic';

export const AuthContext = createContext(null);
const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const googleProvider = new GoogleAuthProvider();
    const axiosPublic = useAxiosPublic();

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
            console.log("User logged in successfully", currentUser);
            if(currentUser){
                // getting token and store client information
                const userInfo = {
                    email: currentUser.email
                }
                axiosPublic.post('/jwt', userInfo)
                .then(res => {
                    console.log("inside user response");
                    if(res.data.token){
                        localStorage.setItem('access-token', res.data.token);
                        setLoading(false);
                        console.log("set loading false");
                    }
                })
                setLoading(false);
            }
            else{
                console.log("User signed out");
                // remove token if token stored in client site
                localStorage.removeItem('access-token');
                setLoading(false);
                console.log("Else set loading false");
            }
        })
        // setLoading(false);
        return () => {
            return unSubscribe();
        }
    },[axiosPublic])

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