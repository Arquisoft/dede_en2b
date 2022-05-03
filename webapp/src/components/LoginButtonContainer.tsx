import { useState } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { TextField, FormGroup, Container } from "@material-ui/core";
import "./Login.css";

const authOptions = {
    clientName: "DeDe 2B",
};

const LoginButtonContainer = () => {
    const [idp, setIdp] = useState("https://inrupt.net");

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
                                <LoginButton oidcIssuer={idp} redirectUrl={window.location.href} authOptions={authOptions}>
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
