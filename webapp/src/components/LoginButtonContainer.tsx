import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { Button, TextField, FormGroup, Container } from "@material-ui/core";
import "./Login.css";


const LoginButtonContainer = () => {
    const [idp, setIdp] = useState("https://broker.pod.inrupt.com/");
    const [currentUrl, setCurrentUrl] = useState("https://localhost:3000");

    useEffect(() => {
        setCurrentUrl(window.location.href);
    }, [setCurrentUrl]);

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
                                <LoginButton oidcIssuer={idp} redirectUrl={currentUrl}>
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