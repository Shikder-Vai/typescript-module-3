//Normal type
/** 
type AriaNum = {
  width:number
    height: number;
};
type AriaString = {
    width: string,
    height:string
}
const aria:AriaString = {
    width: "10cm",
    height: "20cm"
}
*/
//normal mapped type
/** 
type AriaType = {
  height: number;
  width: number;
};
type AriaMappedType = {
    [key in keyof AriaType]: string
}
*/

//dynamic type mapped with genaric
// type AriaDynamicType<T> = {
//   // [key]:type
//   [key in keyof T]: T[key];
// };
// const ariaDynamic: AriaDynamicType<{ height: number; width: number }> = {
//   height: 10,
//   width: 50,
// };

// readOnly
type AriaDynamicType1<T> = {
  // [key]:type
  readonly [key in keyof T]: T[key];
};
const ariaDynamic1: AriaDynamicType1<{ height: number; width: number }> = {
  height: 10,
  width: 50,
};
// ariaDynamic1.height =541
