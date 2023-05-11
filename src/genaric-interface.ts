interface BoookInterface <T,R=undefined> {
    name: string,
    page: T,
    writer?: R
}
const book1:BoookInterface<number> = {
    name: 'hedaya',
    page: 45
}
const book2: BoookInterface<number,string> = {
    name: "senapoti",
    page: 45,
    writer: "nasim"
}

interface PersonInterface<H,W> {
    husbend: H,
    wife: W
}
interface IPerson {
    name: string,
    age:number
}

const person1:PersonInterface<IPerson,IPerson> = {
    husbend: {
        name: "ns",
        age:23
    },
    wife: {
        name: "FTZ",
        age:20
    }
}

//
interface NayokInterface<N,A,P> {
    name: N,
    age: A,
    profassion: P    
}
const nayok: NayokInterface<string,number,{passon:string,place:string}> = {
    name: "rubel",
    age: 50,
    profassion:{
        passon: "acting",
        place:"film"
    }
    
}