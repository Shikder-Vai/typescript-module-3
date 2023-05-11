let book: any;
book = "adhar rat";
(book as string).indexOf

const gramToKg = (param: string | number | undefined): string | number => {
    if (typeof param === "string") {
        const value = parseFloat(param) / 1000
        return `the converted kg is ${value}`
    } if (typeof param === "number") {
        const value = param / 1000
        return `the converted kg is ${value}`
    }
    else {
        return `nothing to show`
    }
}
const convertedGram = gramToKg(100) as number;
const convertedGramString = gramToKg("5000") as string;
console.log(convertedGram);
console.log(convertedGramString);

