// Interface and type are basicly same. but best use is for array and object use interface and for function use type.
interface IBook {
    name: string;
    pages: number
}
type Book = {
    name: string;
    pages: number;
}
//Interface Extend,
interface IBookExtended extends IBook  {
    writerName: string;
    isReleased: boolean;
}
//type extend.
type BookExtends = Book & {
    writerName: string;
    isReleased: boolean;
}

//usesage
const iBook : IBookExtended = {
    name: "sin",
    pages: 100,
    writerName: "dhkdjf",
    isReleased:false
}
const newBook: BookExtends = {
    name: "halim",
    pages: 20,
    writerName: "jhfjksf",
    isReleased: false
}

//function usage
type AddNumber = (num1: number, num2: number) => number;
const addNumberByType: AddNumber = (num1, num2) => num1 + num2

interface IAddNumber {
    (num1: number,num2: number):number
}
const addNumberByInterface: IAddNumber = (num1, num2) => num1 + num2