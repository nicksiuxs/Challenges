import { createUserWithEmailAndPassword, updateProfile, signInWithEmailAndPassword, signOut, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { auth, provider } from "../../../../firebase/config";
import { login, logout, register } from "./AuthSlice";

export const registerAuth = (email, password) => {
    return async (dispatch) => {
        const response = await createUserWithEmailAndPassword(auth, email, password);

        if (response) {
            await updateProfile({
                displayName: "Nicolas",
                photoURL: ""
            })

            const { email } = response.user
            dispatch(register(email))
        } else {
            throw new Error('Registe failed');
        }
    }
}

export const loginAuth = (email, password) => {
    return async (dispatch) => {
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user.UserImpl;
                dispatch(login({ user }))
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log({ errorCode, errorMessage })
            });
    }
}

export const logoutAuth = () => {
    return async (dispatch) => {
        signOut(auth).then(() => {
            console.log("sesión terminada")
            dispatch(logout())
        }).catch((error) => {
            // An error happened.
            console.error(error)
        });
    }
}

export const loginAuthGoogle = () => {
    return async (dispatch) => {
        signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential = GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                dispatch(loginAuthGoogle(user))
                // IdP data available using getAdditionalUserInfo(result)
                // ...
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GoogleAuthProvider.credentialFromError(error);
                // ...
            });

    }
}