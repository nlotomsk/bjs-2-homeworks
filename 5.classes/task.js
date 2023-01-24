// Задача 1. Печатное издание
class PrintEditionItem {
    constructor(name, releaseDate, pagesCount, state = 100, type = null) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = state;
        this.type = type;
    }

    set state(state) {
        if (state < 0) {
            return this._state = 0;
        } else if (state > 100) {
            return this._state = 100;
        }
        return this._state = state;
    }

    get state() {
        return this._state;
    };

    fix() {
        this.state = 1.5 * this.state;
    }
}
class Magazine extends PrintEditionItem{
    constructor(type) {
        super(type);
        this.type = "magazine";
    }
}
class Book extends PrintEditionItem{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(name, releaseDate, pagesCount, state, type, author);
        this.type = "book";
        this.author = author;
    }
}
class NovelBook extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "novel";
    }
}
class FantasticBook  extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "fantastic";
    }
}
class DetectiveBook  extends Book{
    constructor(author, name, releaseDate, pagesCount, state, type) {
        super(author, name, releaseDate, pagesCount, state, type);
        this.type = "detective";
    }
}
// Задача 2. Библиотека
class Library {
    constructor(name = "", books = []) {
        this.name = name;
        this.books = books;
    };
    addBook(book){
        if (book.state > 30) {
            this.books.push(book);
        }
    };
    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++){
            if (this.books[i][type] === value) {
                return this.books[i];
            }
        }
        return null;
    };
    giveBookByName(bookName) {
        let bookDel;
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name === bookName) {
                bookDel = this.books.splice(i,1)
                return bookDel[0];
            }
        }
        return null;
    };
}

class Student {
    constructor(name, gender, age) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        //this.marks = [{"":[]}];
        this.marks = [];
    };
    addMark (mark, subject) {
        // Проверка валидности оценки
        if (mark >= 2 && mark <= 5) {

            // Проверка пустого массива. Если массив пустой, записываем значение.
            if (this.marks.length === 0) {
                return this.marks.push(subject);
            }
            // Проверка на наличие предмета в массиве. Если нет, то добавляем.
            for (let i = 0; i < this.marks.length; i++) {
                if (this.marks.includes(subject) === false) {
                    this.marks.push({subject:[mark]});
                }
            }

            // if (this.marks.find(el => el.subject === subject)) {
            //     return;
            // }
            //     this.marks.push({subject: []});
        }
    }
}

// function Student(name, gender, age) {
//     this.name = name;
//     this.gender = gender;
//     this.age = age;
//     this.marks = [];
// }
//
// Student.prototype.setSubject = function (subjectName) {
//     this.subject = subjectName;
// }
//
// Student.prototype.addMarks = function (...marks) {
//     if (this.hasOwnProperty('marks')) {
//         this.marks.push(...marks);
//     }
// }
//
//
// Student.prototype.getAverage = function () {
//     if (!this.hasOwnProperty("marks") || this.marks.length === 0) {
//         return 0;
//     }
//     return this.marks.reduce((acc, item, index)=> {
//         acc+=item;
//         if (index === this.marks.length - 1){
//             return acc / this.marks.length;
//         }
//         return acc;
//     },0);
// }
//
//
// //
// //
//
// Student.prototype.exclude = function (reason) {
//     delete this.subject;
//     delete this.marks;
//     this.excluded = reason;
// }