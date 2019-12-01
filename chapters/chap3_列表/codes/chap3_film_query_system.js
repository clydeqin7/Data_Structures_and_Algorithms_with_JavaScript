// const fs = require('fs')
// fs.readFile("./films.txt", 'utf8', (err, data) => {
//     if (err) throw err;
//     console.log(data)
// })

const films = `The Shawshank Redemption
The Godfather
The Godfather: Part 2
Pulp Fiction
The Good,the Bad and the Ugly
12 Angry Men
Schindler's List
The Dark Knight
The Lord of the Rings: The Return of the King
Fight Club
Star Wars:Episode 5 - The Empire Strikes Back
One Flew Over the Cuckoo's Nest
The Lord of the Rings:The Fellowship of the Ring
Inception
Goodfellas
Star Wars
Seven Samurai
The Matrix
Forrest Gump
City of God`

function creacteArr() {
    let arr = []
    arr = films.split('\n')
    arr.forEach(item => {
        item = item.trim()
    })
    return arr
}


let arr = creacteArr()
let movieList = new List()
arr.forEach(item => {
    movieList.append(item)
})

function displayList(list) {
    for(list.front(); list.hasNext(); list.next()) {
        if (list.getElement() instanceof Customer) {
            console.log(list.getElement()['name'] + '\t\t' + list.getElement()['movie']);
        } else {
            console.log(list.getElement() + '\n')
        }
    }
}
displayList(movieList)

function Customer(name, movie) {
    this.name = name;
    this.movie = movie;
}

let customerList = new List()

function checkOut(name, movie, customerList, movieList) {
    if (movieList.contains(movie)) {
        let c = new Customer(name, movie);
        customerList.append(c);
        movieList.remove(movie)
    } else {
        console.log(movie + " is not available.");
    }
}

// 测试 checkout 函数
// checkOut('clyde', 'The Godfather', customerList, movieList)
// console.log(customerList.toString())
// checkOut('clyde', 'The Godfather', customerList, movieList)
