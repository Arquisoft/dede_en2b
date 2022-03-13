import {useSession, CombinedDataProvider, Image, LogoutButton, Text} from "@inrupt/solid-ui-react";
import {Button, Card, CardActionArea, CardContent, Container, Typography} from "@material-ui/core";
import {FOAF, VCARD} from "@inrupt/lit-generated-vocab-common";
import {Box} from '@mui/system';

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
                <LogoutButton>
                    <Button style={{marginTop: "10%"}} variant="contained" color="primary">
                        Logout
                    </Button>
                </LogoutButton>
            </Box>
        </Container>
    );
}

export default UserInfoContainer