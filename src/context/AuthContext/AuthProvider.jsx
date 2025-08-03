import { onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect, useState } from "react";
import auth from "../../firebase/firebase.init";
import AuthContext from "./AuthContext";

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            if (currentUser) {
                setUser(currentUser);
            } else {
                setUser(null);
            }
            setLoading(false);
        });
        return () => {
            unsubscribe();
        };
    }, []);

    const login = async (email, password) => {
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                setUser(userCredential.user);
                return userCredential.user;
            })
            .catch((error) => {
                console.error("Error signing in:", error);
                throw error;
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const logout = async () => {
        setLoading(true);
        return auth
            .signOut()
            .then(() => {
                setUser(null);
            })
            .catch((error) => {
                console.error("Error signing out:", error);
                throw error;
            })
            .finally(() => {
                setLoading(false);
            });
    };

    const data = {
        user,
        loading,
        login,
        setUser,
        setLoading,
        logout,
    };

    return <AuthContext.Provider value={data}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
