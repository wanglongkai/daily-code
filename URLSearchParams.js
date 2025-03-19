/**
searchParams = new URLSearchParams("foo=1&bar=2")

searchParams = new URLSearchParams({foo: "1", bar: "2"})

实例支持get()、set()、has()、append()四个方法

实例支持 toString()方法

实例支持for...of迭代
*/

class URLSearchParams{
  construcor(params){
    this.searchParams = params
    if(typeof params === 'string'){
      this.searchParams = this.formatParams(params)
    }
  }
  get(key){
    return this.searchParams[key]
  }

  set(key, value){
    this.searchParams[key] = value
  }

  has(key){
    return this.searchParams.hasOwnPropery(key)
  }

  append(key, value){
    if(this.has(key)){
      this.searchParams[key] = [...(Array.is(this.searchParams[key]) ? this.searchParams[key] : [this.searchParams[key]]), value]
    }else{
      this.set(key, value)
    }
  }

  toString(){
    let res = '';
    Object.entries(this.searchParams).forEach(item => {
      if(Array.isArray(item)){
        let s = ''
        item.forEach(i => s+=`&${item[0]}=${i}`)
        res+=s
      }else{
        res+=`&${item[0]}=${item[1]}`
      }
    })
    return res
  }

  // yield 不能在只能在生成器内部直接调用，不能在回调函数中调用
  *[Symbol.iterator](){
    for(let item of Object.entries(this.searchParams)){
      yield item
    }
  }

  formatParams(str){
    return Object.fromEntries(str.split('&').map(item => item.split('=')))
  }
}
