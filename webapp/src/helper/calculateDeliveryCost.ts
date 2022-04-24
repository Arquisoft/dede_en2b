import {useSession} from "@inrupt/solid-ui-react";
import {getSolidDataset, getThing, getUrl, Thing, getStringNoLocale} from "@inrupt/solid-client";
import {VCARD} from "@inrupt/vocab-common-rdf";

export async function GetPostalCode(): Promise<number> {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlAddress = getUrl(profile, VCARD.hasAddress) as string;
    let addressProfile = await getThing(dataSet, urlAddress);
    let postalCode = getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string;

    return parseInt(postalCode);
}

export async function GetAddress(): Promise<string> {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlAddress = getUrl(profile, VCARD.hasAddress) as string;
    let addressProfile = await getThing(dataSet, urlAddress);
    let address = getStringNoLocale(addressProfile as Thing, VCARD.street_address) as string;

    let locality = getStringNoLocale(addressProfile as Thing, VCARD.locality) as string;
    if (locality !== null && locality !== "") {
        address += ", " + locality;
    }
    let region = getStringNoLocale(addressProfile as Thing, VCARD.region) as string;
    if (region !== null && region !== "") {
        address += ", " + region;
    }
    let country_name = getStringNoLocale(addressProfile as Thing, VCARD.country_name) as string;
    if (country_name !== null && country_name !== "") {
        address += ", " + country_name;
    }

    return address;
}

export async function GetName(): Promise<string> {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlName = getUrl(profile, VCARD.hasAddress) as string;
    let nameProfile = await getThing(dataSet, urlName);
    let name = getStringNoLocale(nameProfile as Thing, VCARD.fn) as string;

    return name;
}

export async function GetDeliveryCost(): Promise<number> {
    let shippingCost = 0;

    let code = await GetPostalCode();

    if (code >= 1000 && code <=50840 ){ //spain
        if (code >=7000 && code <= 7860){ //baleares
            shippingCost = 7.0
        }
        if ((code >=35000 && code <= 35640) || (code >=38000  && code <= 38911)){ //canarias
            shippingCost = 8.5
        }
        if (code >=51000 && code <= 51001){ //ceuta
            shippingCost = 6.0
        }
        if (code >= 52000 && code <= 52001){ //melilla
            shippingCost = 6.0
        }
        shippingCost = 5.75;
    } else {
        shippingCost = 15.5; //not spain
    }

    return shippingCost;
}
