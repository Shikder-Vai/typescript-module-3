const makePromiss = (): Promise<string> => {
  return new Promise<string>((resolve, reject) => {
    const data: string = "something is comming";
    if (data) {
      resolve(data);
    } else {
      reject("nothing is comming");
    }
  });
};

const getPromiss = async (): Promise<string> => {
  const data = await makePromiss();
  return data;
};

const makePromissBoolean = (): Promise<boolean> => {
  return new Promise<boolean>((resolve, reject) => {
    const data: boolean = true;
    if (data) {
      resolve(data);
    } else {
      reject(false);
    }
  });
};

const getPromiseBoolean = async (): Promise<boolean> => {
  const data = await makePromissBoolean();
  return data;
};

// Object make promise

type DataType = {
  name: string;
  age: number;
};
const makePromissObject = (): Promise<DataType> => {
  return new Promise((resolve, reject) => {
    const data: DataType = {
      name: "mr X",
      age: 2,
    };
    if (data) {
      resolve(data);
    } else {
      reject("no data availabe here");
    }
  });
};
const getPromiseObject = async (): Promise<DataType> => {
  const data = await makePromissObject();
  return data;
};
// console.log(getPromiseObject());

//json place holder
interface ITodo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

const todoData = async (): Promise<ITodo> => {
  const getData = await fetch("https://jsonplaceholder.typicode.com/todos");
  return await getData.json();
};
const showTodoData = async (): Promise<void> => {
  const showData = await todoData();
  console.log(showData);
};
showTodoData();
