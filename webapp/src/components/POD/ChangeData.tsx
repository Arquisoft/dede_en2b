import * as React from "react";
import {useSession} from "@inrupt/solid-ui-react";
import { Button, FormHelperText, TextField, Typography } from '@mui/material';
import { SessionInfo } from '@inrupt/solid-ui-react/dist/src/hooks/useSession';
import "./ChangeData.css";
import {addAddress} from "../../helper/addressHelper";
import {Link} from "react-router-dom";

let sessionInfo: SessionInfo;

const ChangeData = () => {

    sessionInfo = useSession();

    const addAddressFunc = () => {
        addAddress(sessionInfo);
    }

    const { session } = useSession();

    if(session.info.isLoggedIn) {

        return (
            <div className={"formData"}>

                <Typography id="addressTitle" variant='h3'>Create or update an address</Typography>

                <Typography id="addressDescription" variant='h6' sx={{paddingTop: "3%"}}>
                    In order to successfully create the order, you have to provide some data in order for us to deliver
                    the products to the
                    correct place. Don't worry, this data is stored in your POD in a safe manner. You can also update
                    your address here.
                </Typography>

                <form id="addressForm" className={"addressForm"}>

                    <TextField sx={{width: '75%'}} label="Street Address" id="streetAddress" className={"streetAddress"}
                               aria-describedby="streetExample" required={true}/>
                    <FormHelperText sx={{paddingBottom: '2%'}} id="streetExample">For example: Uría</FormHelperText>
                    <TextField sx={{width: '75%'}} label="City" id="city" className={"city"}
                               aria-describedby="cityExample" required={true}/>
                    <FormHelperText sx={{paddingBottom: '2%'}} id="cityExample">For example: Oviedo</FormHelperText>
                    <TextField sx={{width: '75%'}} label="Locality" id="locality" className={"locality"}
                               aria-describedby="localityExample" required={true}/>
                    <FormHelperText sx={{paddingBottom: '2%'}} id="localityExample">For example:
                        Asturias</FormHelperText>
                    <TextField sx={{width: '75%'}} label="Postal Code" id="postalCode" className={"postalCode"}
                               aria-describedby="postalCodeExample" required={true}/>
                    <FormHelperText sx={{paddingBottom: '2%'}} id="postalCodeExample">For example:
                        33003</FormHelperText>
                    <TextField sx={{width: '75%'}} label="Country" id="country" className={"country"}
                               aria-describedby="countryExample" required={true}/>
                    <FormHelperText sx={{paddingBottom: '2%'}} id="countryExample">For example: Spain</FormHelperText>

                    <Link to="/cart">
                        <Button type="button" onClick={addAddressFunc} id="updateAddress" className={"updateAddress"}
                                variant="outlined">Update address</Button>
                    </Link>

                </form>

            </div>
        )
    } else {
        // Not logged in
        return <Typography variant='h3' sx={{padding:"10%", textAlign:"center"}}>In order to access this page you have to be logged in</Typography>
    }
}

export default ChangeData;