//Normal type
// type GenaticType = Array<string>


// const person: Array<string> = ["abul", "kabul"]
// const personCode:Array<number> = [12,11,34,54]

//Pro type
// type GenaticType = Array<string>
// type GenaticTypeNum = Array<number>


// const person: GenaticType = ["abul", "kabul"]
// const personCode: GenaticTypeNum = [12,11,34,54]

// //ulta pro type
// type GenaticType<T> = Array<T>



// const person: GenaticType<string> = ["abul", "kabul"]
// const personCode: GenaticType<number> = [12,11,34,54]

//Set multiple Type
type GenaticType <x, y> = [x, y];
 
const person: GenaticType<{ name: string, roll: number }, number> = [{
    name: "jana",
    roll: 1
},
54454
]

