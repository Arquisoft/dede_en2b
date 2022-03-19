export const stringToHexadecimal = (text: string)  => {
    let hex:string;
    let i:number;

    let result:string = "";
    for (i=0; i<text.length; i++) {
        hex = text.charCodeAt(i).toString(16);
        result += ("000"+hex).slice(-4);
    }

    return result;
}