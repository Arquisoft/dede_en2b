import {useSession, CombinedDataProvider, LogoutButton, Text} from "@inrupt/solid-ui-react";
import {CardContent, Container} from "@material-ui/core";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
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
                                <div className={"userData"} id={"userData"}>
                                    <Text property={VCARD.fn.iri.value}/>
                                </div>
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