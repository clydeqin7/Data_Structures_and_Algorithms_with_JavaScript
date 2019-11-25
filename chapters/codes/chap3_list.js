/* 列表类 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 空数组存储列表元素
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
    // this.insert = insert;
    // this.clear = clear;
    // this.front = front;
    // this.end = end;
    // this.prev = prev;
    // this.next = next;
    // this.hasNext;
    // this.hasPrev;
    // this.length = length;
    // this.currPos = currPos;
    // this.moveTo = moveTo;
    // this.getElement = getElement;
    // this.contains = contains;
}

// 给列表添加元素
function append(element) {
    // this.dataStore.push(element)
    // ++ this.listSize;
    this.dataStore[this.listSize++] = element; // 这是文章中的 code，比我写到更简洁
}

// 在列表中查找某一元素
function find(element) {
    for (let i = 0; i < this.listSize; i++ ) {
        if (this.dataStore[i] === element) {
            return i;
        }
    }
    return -1;
}

// 删除一个元素
function remove(element) {
    let eleIndex = this.find(element);
    if (eleIndex > -1) {
        this.dataStore.splice(eleIndex, 1);
        --this.listSize;
        return true;
    }
    return false;
}

// 列表有多少元素
function length() {
    return this.listSize;
}

// 显示列表中的元素
function toString() {
    return this.dataStore;
}

var names = new List();
names.append("andy");
names.append("bejanmin");
names.append("clyde");
console.log(names.toString());
names.remove("bejanmin");
console.log(names.toString());
