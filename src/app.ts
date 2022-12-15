import { Book, Logger, Author, Librarian } from './interfaces';
import { UniversityLibrarian, ReferenceItem } from './classes';
import { PersonBook } from './types';
import { getTitles, printRefBook } from './functions';
import RefBook from './encyclopedia';

showHello('greeting', 'TypeScript');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
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
// const logDamage: Logger = (reason: string) => console.log(`Damaged: ${reason}`);
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
// const ref = new ReferenceItem(1, 'Its title', 2022);
// ref.printItem();
// ref.publisher = 'Slava Ukraini';
// console.log(ref.publisher);
// console.log(ref.getID());
// console.log(ref);


// Task 05.02. Extending Classes, Task 05.03. Creating Abstract Classes
// const refBook: RefBook = new RefBook(1, 'Encyc', 2020, 3);
// refBook.printItem();
// console.log(refBook.title);
// refBook.printCitation();


// Task 05.04. Interfaces for Class Types
// const favoriteLibrarian: Librarian = new UniversityLibrarian();
// const favoriteLibrarian: Librarian & A = new UniversityLibrarian();
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Bosir', 'Learn JS');
// favoriteLibrarian.a = 2;


// Task 05.05. Intersection and Union Types
// const personBook: PersonBook = {
//     name: 'Alex',
//     author: 'Author',
//     available: false,
//     category: Category.Angular,
//     email: 'ema@il.com',
//     id: 1,
//     title: 'Unknown'
// };

// const options: TOptions = { duration: 20};
// const options2 = setDefaultConfig(options);
// console.log(options);
// console.log(options2);


// Task 06.03. Default Export
const refBook: RefBook = new RefBook(2, 'Learn JS', 2020, 5);
printRefBook(refBook);
const favoriteLibrarian: Librarian = new UniversityLibrarian();
printRefBook(favoriteLibrarian);


// Task 06.04. Re-Export