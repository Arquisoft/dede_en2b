import {useSession} from "@inrupt/solid-ui-react";
import {getSolidDataset, getThing, getUrl, Thing, getStringNoLocale} from "@inrupt/solid-client";
import {VCARD} from "@inrupt/vocab-common-rdf";
import {setValue, getValue} from "./deliveryAux";
import {DeliveryHelper} from "../shared/shareddtypes";

export const calculateDeliveryCost = (): number => {
    GetPostalCode().then(r => console.log(r));
    let code: number = getValue();
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

async function GetPostalCode(): Promise<string> {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlAddress = getUrl(profile, VCARD.hasAddress) as string;
    let addressProfile = await getThing(dataSet, urlAddress);
    let postalCode = getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string; // el problema esta aqui

    return postalCode;
}
