// const createArray  = <T,X> (param1:T,param2:X):[T,X] => {
//     return [param1,param2];

// }
// const result = createArray<string, string>("bangladesh","dhaka")
// const result1 = createArray<number, string>(41, "manikgonj")

//create  Info

const createInfo = <T>(param1:T) :T => {
    return param1
}
type Info = {
    name: string,
    age: number,
    address: string
}
const result = createInfo<Info>({
    name: 'manik',
    age: 52,
    address:"Dhaka"
})


// const addMeWithMyCrush = <T>(myInfo: T) => {
//     const myCrush = 'kate winslet';
//     const newData = {...myInfo, myCrush};
//     return newData;
// }
// const myInfo = {
//     name: "salam",
//     age: 52,
//     salary: 52021
// }
// const result3 = addMeWithMyCrush(myInfo)
// console.log(result3);