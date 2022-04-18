import { useState, useEffect } from "react";
import { LoginButton } from "@inrupt/solid-ui-react";
import { TextField, FormGroup, Container } from "@material-ui/core";
import "./Login.css";


const LoginButtonContainer = () => {
    const [idp, setIdp] = useState("https://inrupt.net");
    //const [currentUrl, setCurrentUrl] = useState("");

     // "http://54.234.146.174:3000/"
    //    || "http://localhost:3000/"

    //useEffect(() => {

    //    if(window.location.href.toString().includes("localhost")){
    //        setCurrentUrl("http://localhost:3000/");
    //    } else {
    //        setCurrentUrl("http://54.234.146.174:3000/"); // window.location.href
    //    }
    //}, [setCurrentUrl]);

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
