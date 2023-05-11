interface Mandetory { name: string, age: number, salary: number }

const addMeWithMyCrush = <T extends Mandetory>(myInfo: T) => {
    const myCrush = 'kate winslet';
    const newData = {...myInfo, myCrush};
    return newData;
}
type MyInfoType = {
    name: string,
    age: number,
    salary: number,
    other: boolean,
    other1:undefined
}
const myInfo:MyInfoType = {
    name: "salam",
    age: 52,
    salary: 52021,
    other: true,
    other1: undefined
}
const result3 = addMeWithMyCrush(myInfo)
console.log(result3);