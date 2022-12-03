/* eslint-disable no-redeclare */

showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==============================================================
enum Category {
    JavaScript, CSS, HTML, TypeScript, Angular
}


// type Book = {
//     id: number;
//     title: string;
//     author: string;
//     available: boolean;
//     category: Category;
// };

type BookProperties = keyof Book | 'isbn';
interface Book {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
    pages?: number;
    // markDamaged?: (reason: string) => void;
    // markDamaged?(reason: string): void;
    markDamaged?: DamageLogger;
};
interface DamageLogger {
    (data: string): void;
}

interface Person {
    name: string;
    email: string;
}

interface Author extends Person{
    numBooksPublished: number;
}

interface Librarian extends Person {
    department: string;
    assistCustomer: (custName: string, bookTitle: string) => void;
}



function  getAllBooks(): readonly Book[] {
    const books = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available:
        true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available:
        false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'AndreaChiarelli', available: false }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[] = getAllBooks()): void{
    // const title: string = books.find(book => book.available).title;
    const title: string = books.find(({available}) => available)?.title;
    console.log(`Number of books: ${books.length} and first availible book is - ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category = Category.JavaScript): string[] {
    const books = getAllBooks();

    return books
        .filter(({category}) => category === inputCategory)
        .map(({ title }) => title);
}


function logBookTitles(titles: Array<string>): void {
    titles.forEach(title => console.log(title));
}

function getBookAuthorByIndex(index: number): [title: string, author: string] {
    const books = getAllBooks();

    const {title, author} = books[index];
    return [ title, author];
}


function calcTotalPages(): void {
    const pages = <const>[
        { lib: 'libName1', books: 1_000_000_000, avgPagesPerBook: 250 },
        { lib: 'libName2', books: 5_000_000_000, avgPagesPerBook: 300 },
        { lib: 'libName3', books: 3_000_000_000, avgPagesPerBook: 280 }];

    const total = pages.reduce((acc: bigint, obj) => {
        return acc + BigInt(obj.books) * BigInt(obj.avgPagesPerBook);
    }, 0n);
    console.log(total);
}

function getBookByID(inputID: Book['id']): Book | undefined{
    const books = getAllBooks();
    return books.find(book => book.id === inputID);
}

function checkoutBooks(customer: string, ...bookIDs: number []): string[]{
    console.log(`Customer name: ${customer}`);

    return bookIDs
        .map(id => getBookByID(id))
        .filter(book => book.available)
        .map(book => book.title);
}

function createCustomerID(name: string, id: number): string {
    return `${name} ${id}`;
}

function createCustomer(name: string, age?: number, city?: string): void {
    console.log(`Name: ${name}`);
    if (age) {
        console.log(`Age: ${age}`);
    }
    if (city) {
        console.log(`City: ${city}`);
    }
}

function getTitles(author: string): string[];
function getTitles(available: boolean): string[];
function getTitles(id: number, available: boolean): string[];
function getTitles(...args: [string | boolean] | [number, boolean]): string[] {
    const books = getAllBooks();

    if (args.length === 1) {
        const [arg] = args;

        if (typeof arg === 'string') {
            return books.filter(book => book.author === arg).map(book => book.title);
        } else if (typeof arg === 'boolean') {
            return books.filter(book => book.available === arg).map(book => book.title);
        }
    } else if (args.length === 2) {
        const [id, available] = args;

        if (typeof id === 'number' && typeof available === 'boolean') {
            return books.filter(book => book.id === id && book.available === available).map(book => book.title);
        }
    }
}

function assertStringValue(value: any): asserts value is string {
    if (typeof value !== 'string') {
        throw new TypeError('value should have been a string');
    }
}

function bookTitleTransform(title: any): string {
    assertStringValue(title);
    return [...title].reverse().join('');
}

function printBook(book: Book): void {
    console.log(`${book.title} ${book.author}`);
}

function getProperty(book: Book, bookProperty: BookProperties ): any {
    const value = book[bookProperty];

    return typeof value === 'function' ? value.name : value;
}

// Task 02.01 Basic types
// console.log(logFirstAvailable());
// console.log(getBookTitlesByCategory(1));
// logBookTitles(getBookTitlesByCategory(1));
// console.log(getBookAuthorByIndex(2));
// calcTotalPages();


// Task 03.01 Function types
// let myID: string = createCustomerID('Ann', 10);
// console.log(myID);
// let idGenerator: (name: string, id: number) => string;
// let idGenerator: typeof createCustomerID;
// idGenerator = createCustomerID;
// console.log(idGenerator('Emma', 13));


// Task 03.02 Optional, Default and Rest parameters
// createCustomer('Ann');
// createCustomer('Ann', 20);
// createCustomer('Ann', 20 ,'Kyiv');
// let myBooks = checkoutBooks('Ann', 1, 2, 4);
// console.log(myBooks);


// Task 03.03 Function Overloading
// console.log(getTitles(1, true));
// console.log(getTitles(true));
// console.log(getTitles(false));
// console.log(getTitles(2, false));
// console.log(getTitles('Lea Verou'));


// Task 03.04 Assertion Functions
// console.log(bookTitleTransform('Title'));
// console.log(bookTitleTransform(454));
// console.log(bookTitleTransform('Vitalii'));


// Task 04.01 Interfaces
// const myBook: Book = {
//     id: 5,
//     title: 'Colors, Backgrounds, and Gradients',
//     author: 'Eric A. Meyer',
//     available: true,
//     category: Category.CSS,
//     pages: 200,
//     // markDamaged: (reason: string) => console.log(`Damaged: ${reason}`)
//     markDamaged(reason: string){
//         console.log(`Damaged: ${reason}`);
//     }
// };
// printBook(myBook);
// myBook.markDamaged('missing back cover');


// Task 04.02. Defining an Interface for Function Types
// const logDamage: DamageLogger = (reason: string) => console.log(`Damaged: ${reason}`);
// logDamage('missing front cover');


// Task 04.03. Extending Interface
// const favoriteAuthor: Author = {
//     name: 'Lue Verou',
//     email: 'email@email.com',
//     numBooksPublished: 5000
// };

// const favoriteLibrarian: Librarian = {
//     name: 'Vasia',
//     email: 'com@ema.il',
//     department: 'Kyiv',
//     assistCustomer: null
// };


// Task 04.04. Optional Chaining
// const offer: any = {
//     book: {
//         title: 'Essential TypeScript',
//     },
// };

// console.log(offer.magazine);
// console.log(offer.magazine?.getTitle());
// console.log(offer.book.getTitle?.());
// console.log(offer.book.authors?.[0]);


// Task 04.05. Keyof Operator
// console.log(getProperty(myBook, 'title'));
// console.log(getProperty(myBook, 'markDamaged'));
// console.log(getProperty(myBook, 'isbn'));



//
// Classes Task 05
//


// Task 05.01. Creating and Using Classes

class ReferenceItem {
    // title: string;
    // year: number;
    // constructor(newTitle: string, newYear: number) {
    //     this.title = newTitle;
    //     this.year = newYear;
    //     console.log('Creating a new ReferenceItem...');
    // }
    private id: number;

    static department: string = 'dptmt';

    constructor(public title: string, protected year: number, id: number) {
        this.title = title;
        this.year = year;
        this.id = id;
    }
    printItem(): void {
        // console.log('title was published in year');
        console.log(ReferenceItem.department);
    }
    _publisher!: string;
    get publisher(): string {
        return this._publisher.toUpperCase();
    }
    set publisher(newPublisher: string) {
        this._publisher = newPublisher;
    }
    getID(): number {
        return this.id;
    }
}

class Encyclopedia extends ReferenceItem {
    edition: number;
}

// const ref = new ReferenceItem('Its title', 2022, 10);
// ref.printItem();
// ref.publisher = 'Slava Ukraini';
// console.log(ref.publisher);
// console.log(ref.getID());
// console.log(ref);

const refBook = new Encyclopedia('Encyc', 2020, 3);
refBook.printItem();
console.log(refBook.title);
refBook.printItem = () => {
    console.log(ReferenceItem.department);
    console.log(`Edition:edition ${Encyclopedia.year}`);
};
