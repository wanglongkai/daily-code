let range = {
  from: 1,
  to: 5,
  [Symbol.iterator](){
    return {
      current: this.from,
      last: this.to,
      next(){
        if(this.current <= this.last){
          return {done: false, value: this.current++}
        }else{
          return {done: true}
        }
      }
    }
  }
}

for (let val of range) {
  console.log(val)
}

/*
forof 函数是用于遍历实现了迭代器接口的数据结构
*/


let range2 = {
  from: 1,
  to: 5,
  *[Symbol.iterator](){
    for(let i = this.from; i <= this.to; i++){
      yield i;
    }
  }
}

console.log([...range2])
