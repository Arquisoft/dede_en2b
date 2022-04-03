import {useSession} from "@inrupt/solid-ui-react";
import {getSolidDataset, getThing, getUrl, Thing, getStringNoLocale} from "@inrupt/solid-client";
import {VCARD} from "@inrupt/vocab-common-rdf";

async function GetPostalCode() : Promise<String>  {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlAdress = getUrl(profile, VCARD.hasAddress) as string;
    let addressProfile = await getThing(dataSet, urlAdress);
    let postalCode = getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string;
    return postalCode;
}

const getCode = async ()  => {
    let code = await GetPostalCode();
    return code;
}

const convert = () : number => {
    let ne = getCode();
    let result : number = 0;
    ne.then(value => {
        let s = value;
        let n : number = +s;
        result = n;
    })
    return result;
}

export const calculateDeliveryCost = (): number => {
    let code: number = convert();
    if (code >= 1000 && code <=50840 ){ //spain
        if (code >=7000 && code <= 7860){ //baleares
            return 7.0
        }
        if ((code >=35000 && code <= 35640) || (code >=38000  && code <= 38911)){ //canarias
            return 8.5
        }
        if (code >=51000 && code <= 51001){ //ceuta
            return 6.0
        }
        if (code >= 52000 && code <= 52001){ //melilla
            return 6.0
        }
        return 5.75
    }
    return 15.5 //not spain
}

