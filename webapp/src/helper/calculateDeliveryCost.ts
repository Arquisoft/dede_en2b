import {useSession} from "@inrupt/solid-ui-react";
import {getSolidDataset, getThing, getUrl, Thing, getStringNoLocale} from "@inrupt/solid-client";
import {VCARD} from "@inrupt/vocab-common-rdf";
import {setValue, getValue} from "./help";
import {DeliveryHelper} from "../shared/shareddtypes";

export const calculateDeliveryCost = (): number => {
    getCode();
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

// async function GetPostalCode() : Promise<string>  {
//     const {session} = useSession();
//     let webId = session.info.webId as string;
//     let profileDocumentURI = webId.split("#")[0];
//     let dataSet = await getSolidDataset(profileDocumentURI);
//     let profile = getThing(dataSet, webId) as Thing;
//     let urlAdress = getUrl(profile, VCARD.hasAddress) as string;
//     let addressProfile = await getThing(dataSet, urlAdress);
//     let postalCode = getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string;
//     return postalCode;
// }

async function GetPostalCode(ob : DeliveryHelper) {
    const {session} = useSession();
    let webId = session.info.webId as string;
    let profileDocumentURI = webId.split("#")[0];
    let dataSet = await getSolidDataset(profileDocumentURI);
    let profile = getThing(dataSet, webId) as Thing;
    let urlAdress = getUrl(profile, VCARD.hasAddress) as string;
    let addressProfile = await getThing(dataSet, urlAdress);
    let postalCode = getStringNoLocale(addressProfile as Thing, VCARD.postal_code) as string;
    setValue(+postalCode);
    ob.postalCodeString = postalCode;
}

function donada(){
    let a = 0;
}

const getCode = async ()  => {
    let ob : DeliveryHelper = { postalCodeString : ""}
    await GetPostalCode(ob);
    setTimeout(donada, 10000);
    let n : number = + ob.postalCodeString;
    setValue(n);
}

const Convert = ()  => {

    // const [postalCode, setPostalCode]= React.useState("");
    // const getPODPostalCode = async () => setPostalCode(await GetPostalCode())
    //
    //
    // let n : number = +postalCode;
    // return n;

    let ne = getCode();
    // let result : number = 0;

    // const result : number = async () => {
    //     const s = getCode() as string;
    //     const n : number = +s;
    //     return n;
    // }();
    // ne.then(value => {
    //     let s = value as string;
    //     let n : number = +s;
    //     setValue(n);
    //     // result = n;
    //     // return n;
    // });
    // return result;
}




