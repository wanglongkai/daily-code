/**
LRUCache(int capacity) 以正整数作为容量 capacity 初始化 LRU 缓存
int get(int key) 如果关键字 key 存在于缓存中，则返回关键字的值，否则返回 -1 。
void put(int key, int value) 如果关键字已经存在，则变更其数据值；如果关键字不存在，则插入该组「关键字-值」。
当缓存容量达到上限时，它应该在写入新数据之前删除最久未使用的数据值，从而为新的数据值留出空间。
*/

class LRUCache{
  construcor(capacity){
    this.capacity = capacity;
    this.cache = new Map()
  }

  get(key){
    if(this.cache.has(key)){
      const res = this.cache.get(key)
      this.cache.delete(key)
      this.put(key, res)
      return res
    }
    return -1;
  }

  put(key, value){
    if(this.cache.has(key)){
      this.cache.delete(key)
    }
    if(this.cache.size >= this.capacity){
      const oldestKey = this.cache.keys().next().value
      this.cache.delete(oldestKey)
    }
    this.cache.set(key, value)
  }
}
