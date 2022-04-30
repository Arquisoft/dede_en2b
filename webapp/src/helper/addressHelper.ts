import {Address} from "../shared/shareddtypes";
import {
    buildThing,
    createThing,
    getSolidDataset,
    getStringNoLocale, getThing,
    getUrlAll,
    saveSolidDatasetAt,
    setThing, Thing
} from "@inrupt/solid-client";
import {RDF, VCARD} from "@inrupt/vocab-common-rdf";
import {SessionInfo} from "@inrupt/solid-ui-react/dist/src/hooks/useSession";
import {Session} from "@inrupt/solid-client-authn-browser";

// FOR RETRIEVING
export async function retrieveAddressesForUser(session: Session) {
    const webId = session.info.webId as string;
    retrieveAddressesFromPod(webId).then(addresses => {sessionStorage.setItem("addresses", JSON.stringify(addresses));});
}

async function retrieveAddressesFromPod(webId: string) {

    let addressURLs = getUrlAll(await getUser(webId), VCARD.hasAddress);
    let addressList: Address[] = [];

    await getAddress(webId, addressList);

    for (let URL of addressURLs) {
        let user = await getUser(URL);
        let street = getStringNoLocale(user, VCARD.street_address);
        let city = getStringNoLocale(user, VCARD.locality);
        let state = getStringNoLocale(user, VCARD.region);
        let postalCode = getStringNoLocale(user, VCARD.postal_code);
        let country = getStringNoLocale(user, VCARD.country_name);
        addressList.push({ street: street, city: city, state: state, postalCode: postalCode, country: country });
    }

    return addressList;
}

async function getAddress(webId: string, addressList: Address[]) {
    let URI = webId.split("#")[0];
    let solidData = await getSolidDataset(URI);
    let user = getThing(solidData, URI + "#Address") as Thing;

    let street = getStringNoLocale(user, VCARD.street_address);
    let city = getStringNoLocale(user, VCARD.locality);
    let state = getStringNoLocale(user, VCARD.region);
    let postalCode = getStringNoLocale(user, VCARD.postal_code);
    let country = getStringNoLocale(user, VCARD.country_name);

    addressList.push({
        street: street, city: city, state: state, postalCode: postalCode, country: country
    });
}

async function getUser(webId: string): Promise<Thing> {
    let URI = webId.split("#")[0];
    let solidDataset = await getSolidDataset(URI);
    return getThing(solidDataset, webId) as Thing;
}

// FOR ADDING
export function addAddress(session:SessionInfo) {
    let street = (document.getElementById("streetAddress") as HTMLInputElement).value;
    let city = (document.getElementById("city") as HTMLInputElement).value;
    let locality = (document.getElementById("locality") as HTMLInputElement).value;
    let postalCode = (document.getElementById("postalCode") as HTMLInputElement).value;
    let country = (document.getElementById("country") as HTMLInputElement).value;

    let address: Address = {
        street: street, city: city, state: locality, postalCode: postalCode, country: country
    }

    writeAddress(address, session);
}

async function writeAddress(address: Address, session: SessionInfo) {
    await writeAddressToPod(session.session.info.webId as string, address, session);
}

async function writeAddressToPod(webId: string, address: Address, session:SessionInfo) {
    let URI = webId.split("#")[0];
    let solidDataset = await getSolidDataset(URI);
    const addressToWrite = buildThing(createThing({ name: "Address" }))

        .addStringNoLocale(VCARD.street_address, address.street as string)
        .addStringNoLocale(VCARD.locality, address.city as string)
        .addStringNoLocale(VCARD.region, address.state as string)
        .addStringNoLocale(VCARD.postal_code, address.postalCode as string)
        .addStringNoLocale(VCARD.country_name, address.country as string)
        .addUrl(RDF.type, "https://schema.org/address")
        .build();

    solidDataset = setThing(solidDataset, addressToWrite);

    const newDataset = await saveSolidDatasetAt(
        webId,
        solidDataset,
        { fetch: session.fetch }
    );
}