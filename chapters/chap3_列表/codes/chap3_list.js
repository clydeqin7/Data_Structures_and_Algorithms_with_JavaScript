/* 列表类 */
function List() {
    this.listSize = 0;
    this.pos = 0;
    this.dataStore = []; // 空数组存储列表元素
    this.find = find;
    this.toString = toString;
    this.append = append;
    this.remove = remove;
    this.insert = insert;
    this.clear = clear;
    this.front = front;
    this.end = end;
    this.prev = prev;
    this.next = next;
    this.hasNext = hasNext;
    this.hasPrev = hasNext;
    this.length = length;
    this.currPos = currPos;
    this.moveTo = moveTo;
    this.getElement = getElement;
    this.contains = contains;
    this.appendMax = appendMax;
    this.appendMin = appendMin;
    this.showSameGender = showSameGender;
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

// 测试代码1
// var names = new List();
// names.append("andy");
// names.append("bejanmin");
// names.append("clyde");
// console.log(names.toString());
// names.remove("bejanmin");
// console.log(names.toString());

function insert(element, after) {
    let insertPos = this.find(after)
    if (insertPos > -1) {
        this.dataStore.splice(insertPos, 0, element);
        ++this.listSize;
        return true;
    }
    return false;
}

function clear() {
    // this.listSize = 0;
    // this.dataStore = [];
    // this.pos = 0
    delete this.dataStore;
    this.dataStore.length = 0;
    this.listSize = this.pos = 0;
}

function contains(element) {
    for (let i = 0; i < this.dataStore.length; i++) {
        if (this.dataStore[i] === element) {
            return true
        }
    }
    return false
}

/* 遍历列表方法 start */
function front() {
    this.pos = 0
}

function end() {
    this.pos = this.listSize - 1;
}

function prev() {
    --this.pos;
}

function next() {
    if(this.pos < this.listSize) {
        ++this.pos;
    }
}

function currPos() {
    return this.pos;
}

function moveTo(position) {
    this.pos = position;
}

function getElement() {
    return this.dataStore[this.pos];
}

function hasNext() {
    return this.pos < this.listSize;
}

function hasPrev() {
    // return this.pos >= 0; //原文是这样
    console.log(typeof this.pos, 'typeof')
    return this.pos >= 0;
}

/* 遍历列表方法 end */

// 测试数据2
var names = new List();
names.append("Clayton");
names.append("Raymond");
names.append("Cynthia");
names.append("Jennifer");
names.append("Bryan");
names.append("Danny");
// names.front();
// console.log(names.getElement());
console.log(names.toString())

// 迭代器访问列表
// 正序遍历
// for (names.front(); names.hasNext(); names.next()) {
//     console.log(names.getElement())
// }

var i = 0;
// console.log('listSize: ', names.listSize);
// console.log("pos: ", names.pos);
// names.moveTo(-1);
// console.log('listSize: ', names.listSize);
// console.log("pos: ", names.pos);
// console.log(names.hasPrev())
// names.prev()
// console.log("now pos: ", names.pos)
// 倒序遍历
// for (names.end(); names.hasPrev(); names.prev()) {
//     console.log(++i)
// }


/* 练习题 */
// 练习1
function appendMax(element) {
    let addFlag = true
    this.dataStore.forEach(item => {
        if (item > element) {
            addFlag = false
            return 
        }
    });
    if (addFlag) {
        this.append(element)
    }
}

// 练习2
function appendMin(element) {
    let addFlag = true
    this.dataStore.forEach(item => {
        if (item < element) {
            addFlag = false
            return 
        }
    });
    if (addFlag) {
        this.append(element)
    }
}

// names.appendMax('Tira')
// names.appendMax(100)
// console.log(names.toString())

// 练习三
function Person(name, gender) {
    this.name = name
    this.gender = gender
}

function showSameGender(gender){
    this.dataStore.forEach(item => {
        if (item.gender === gender) {
            console.log(item)
        }
    })
}

let personList = new List()
personList.append(new Person('albert', 'M'))
personList.append(new Person('allon', 'M'))
personList.append(new Person('bruce', 'M'))
personList.append(new Person('clyde', 'M'))
personList.append(new Person('benjamin', 'M'))
personList.append(new Person('abbey', 'F'))
personList.append(new Person('ada', 'F'))
personList.append(new Person('rose', 'F'))
personList.append(new Person('ana', 'F'))
personList.append(new Person('lucy', 'F'))

console.log(personList.toString())
console.log(personList.showSameGender('F'))