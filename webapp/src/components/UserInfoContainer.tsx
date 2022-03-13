import {useSession, CombinedDataProvider, Image, LogoutButton, Text} from "@inrupt/solid-ui-react";
import {Button, Card, CardActionArea, CardContent, Container, Typography} from "@material-ui/core";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {Box} from '@mui/system';
import "./Login.css";

const UserInfoContainer = () => {
    const {session} = useSession();

    return (

        <Container fixed>
            <Box sx={{
                display: 'flex'
            }}>
                {session.info.webId ? (
                    <CombinedDataProvider
                        datasetUrl={session.info.webId}
                        thingUrl={session.info.webId}>

                            <CardContent>
                                <Text property={FOAF.name.iri.value}/>
                            </CardContent>

                    </CombinedDataProvider>
                ) : null}
                <div className={"logoutButton"}>
                <LogoutButton>
                    <div>
                        Logout
                    </div>
                </LogoutButton>
                </div>
            </Box>
        </Container>
    );
}

export default UserInfoContainer