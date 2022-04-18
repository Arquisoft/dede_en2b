import { useState, useEffect } from "react";
import { LoginButton, useSession } from "@inrupt/solid-ui-react";
import { TextField, FormGroup, Container } from "@material-ui/core";
import "./Login.css";
import {
    handleIncomingRedirect,
    onSessionRestore
} from "@inrupt/solid-client-authn-browser";


const LoginButtonContainer = () => {
    const [idp, setIdp] = useState("https://inrupt.net");
    const { session } = useSession();

    useEffect(() => {
        handleIncomingRedirect({
            restorePreviousSession: true
        }).then(() => {
            if (session.info.isLoggedIn) {
                console.log("User successfully logged");
            }
        })
    }, []);


    return (
        <Container fixed>
            <FormGroup>
                <TextField
                    label="Identity Provider"
                    placeholder="Identity Provider"
                    type="url"
                    value={idp}
                    onChange={(e) => setIdp(e.target.value)}
                    InputProps={{
                        endAdornment: (
                            <div className="loginButton">
                                <LoginButton oidcIssuer={idp} redirectUrl={window.location.href}>
                                        Login
                                </LoginButton>
                            </div>
                        ),
                    }}
                />
            </FormGroup>
        </Container>
    );
}

export default LoginButtonContainer;
