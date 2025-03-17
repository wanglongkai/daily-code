const regexp = /t(e)(st(\d?))/g;
const str = "test1test2";

console.log(str.match(regexp))
console.log([...str.matchAll(regexp)])
/*
match 和 matchAll 的区别：
前者可以带g或者不带，后者必须带g
前者如果不带g: 返回第一个匹配串，并返回捕获分组
前者如果带g: 返回所有匹配串数组，但是不带捕获分组信息
后者： 返回所有匹配串的迭代器，且每一项都会携带完整的捕获分组信息
*/
