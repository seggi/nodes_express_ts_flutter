import { createAuthProvider } from 'react-token-auth'

const offlineUrl = "localhost:5000/api/auth/login";

export const [ useAuth, authFetch, login, logout] = 
    createAuthProvider({
        accessTokenExpireKey: 'accessToken',
        onUpdateToken: (token: any) =>  fetch(offlineUrl, {
            method: "POST",
            credentials: "same-origin",
            headers: {
                "Content-Type": "application/json", 
            },
            body: token.refreshToken
        })
        .then(rsp=> rsp.json())
    });

    