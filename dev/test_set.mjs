import { HashSet } from "./HashSet.mjs";

let hashSet = new HashSet();
console.log(hashSet.isEmpty());
console.log("=========add=========");
hashSet.add(1);
hashSet.add(1);
hashSet.add(123);
hashSet.add(512);
hashSet.printAll();
console.log(hashSet.isEmpty());

console.log("=========check=========");
console.log(hashSet.isContain(1));

console.log("=========remove=========");
hashSet.remove(1);
hashSet.printAll();
console.log(hashSet.isEmpty());

console.log("=========check2=========");
console.log(hashSet.isContain(1));

console.log("=========clear=========");
hashSet.clear();
hashSet.printAll();
console.log(hashSet.isEmpty());
