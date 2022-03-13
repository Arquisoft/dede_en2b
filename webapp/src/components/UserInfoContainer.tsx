import {useSession, CombinedDataProvider, Image, LogoutButton, Text, ThingProvider, DatasetProvider} from "@inrupt/solid-ui-react";
import {CardContent, Container, Typography} from "@material-ui/core";
import {VCARD} from "@inrupt/lit-generated-vocab-common";
import {Box} from '@mui/system';
import "./Login.css";

const UserInfoContainer = () => {
    const {session} = useSession();

    // <Text property={VCARD.note.iri.value}/> USE THIS TO ACCESS THE ADDRESS (for the future)

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
                                <div className={"userData"}>
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