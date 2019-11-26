const fs = require('fs')
// fs.readFile("./films.txt", 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

function creacteArr(file) {
    let arr = []
    fs.readFile("./films.txt", 'utf8', (err, data) => {
        if (err) throw err;
        arr = data.split("\n");
    })
    arr.forEach(item => {
        item = item.trim()
    })
    return arr
}