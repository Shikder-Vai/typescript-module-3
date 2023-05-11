type GenaticNormal = {
  name: string;
  age: number;
  salary: number;
};
type NewType = "name" | "age" | "salary";

const a: NewType = "name";

type KeyOfConstant = keyof GenaticNormal;

const b: KeyOfConstant = "salary";

function genaricUsingKeyof<X, Y extends keyof X>(param: X, param1: Y) {
  param[param1];
}

genaricUsingKeyof({ name: "mr X", age: 10 }, "name");
