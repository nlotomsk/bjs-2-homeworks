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
