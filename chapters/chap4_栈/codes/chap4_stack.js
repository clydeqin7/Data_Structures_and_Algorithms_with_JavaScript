function Stack() {
    this.dataStore = [];
    this.top = 0;
    this.push = push;
    this.pop = pop;
    this.peek = peek; // 获取栈顶元素
    this.length = length;
    this.clear = clear;
}

function push(element) {
    this.dataStore[this.top++] = element;
}

function pop() {
    return this.dataStore[--this.top];
}

function peek() {
    return this.dataStore[this.top - 1];
}

function length() {
    return this.top;
}

function clear() {
    this.top = 0;
}

// 测试Stack类
// let s = new Stack();
// s.push("David");
// s.push("Raymond");
// s.push("Bryan");
// console.log("length: " + s.length());
// console.log(s.peek());
// let popped = s.pop();
// console.log("The popped element is: " + popped);
// console.log(s.peek());
// s.push("Cynthia");
// console.log(s.peek());
// s.clear();
// console.log("length: " + s.length());
// console.log(s.peek());
// s.push("Clayton");
// console.log(s.peek());

/*
 * 数值间的相互转换
 * 此算法只针对基数为 2 ~ 9 的情况
 */
function mulBase(num, base) {
    let s = new Stack()
    do {
        s.push(num % base)
        num = Math.floor(num /= base)
    } while (num > 0)
    let converted = ""
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted
}

// test
// let num = 32
// let base = 8
// console.log('-----')
// let xx = mulBase(num, base)
// console.log(xx)

// 回文
function isPalindrome(word) {
    let s = new Stack()
    for (let i = 0; i < word.length; i++) {
        s.push(word[i])
    }
    let converted = ""
    while (s.length() > 0) {
        converted += s.pop()
    }
    return converted === word
}

// let word = "hello"
// console.log(isPalindrome(word))
// word = "racecar"
// console.log(isPalindrome(word))

// 递归
function factorial(n) {
    if (n === 0) {
        return 1
    } else {
        return n * factorial(n-1)
    }
}

function fact(n) {
    let s = new Stack()
    while (n > 1) {
        s.push(n--)
    }
    let product = 1
    while (s.length() > 0) {
        product *= s.pop()
    }
    return product
}

// console.log(factorial(5))
// console.log(factorial(5))

// 练习1