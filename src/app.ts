
import { ReferenceItem, RefBook, UL, Shelf } from './classes';
import type { Library } from './classes/library';
import { Book, Logger, Author, Librarian, Magazine } from './interfaces';
// import { UniversityLibrarian, ReferenceItem } from './classes/universityLibrarian.ts';

import { BookRequiredFields, CreateCustomerFunctionType, PersonBook, UpdatedBook } from './types';
import { purge, getAllBooks, getTitles, printRefBook, getObjectProperty, createCustomer } from './functions';
// import { Library } from './classes/library';

import { Category } from './enums';


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
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// const favoriteLibrarian: Librarian & A = new UL.UniversityLibrarian();
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


// Task 06.03. Default Export  && Task 06.04. Re-Export
// const refBook: RefBook = new RefBook(2, 'Learn JS', 2020, 5);
// printRefBook(refBook);
// const favoriteLibrarian: Librarian = new UL.UniversityLibrarian();
// printRefBook(favoriteLibrarian);


// Task 06.05. Dynamic Import Expression
// const flag = true;

// if (flag) {
//     import('./classes')
//         .then(o => {
//             const reader = new o.Reader();
//             reader.name = 'Anna';
//             reader.take(getAllBooks()[0]);
//             console.log(reader);
//         })
//         .catch(err => console.log(err))
//         .finally(() => console.log('Complete'));
// }

// if (flag) {
//     const o = await import('./classes');

//     const reader = new o.Reader();
//     reader.name = 'Anna';
//     reader.take(getAllBooks()[0]);

//     console.log(reader);
// }


// Task 06.06. Type-Only Imports and Exports
// let library: Library = new Library();
// library.address = 'aaa';
// console.log(library);

// let lib: Library = {
//     address: 'saskj',
//     id: 2,
//     name: 'sjs'
// };
// console.log(lib);


// Task 07.01. Generic Functions
// const inventory: Book[] = [
//     {
//         id: 10,
//         title: 'The C Programming Language',
//         author: '???',
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 11,
//         title: 'Code Complete',
//         author: 'Steve McConnell',
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 12,
//         title: '8-Bit Graphics with Cobol',
//         author: 'A. B.',
//         available: true,
//         category: Category.Software
//     },
//     {
//         id: 13,
//         title: 'Cool autoexec.bat Scripts!',
//         author: 'C. D.',
//         available: true,
//         category: Category.Software }
// ];

// const result = purge<Book>(inventory);
// console.log(result);

// const array = [1, 2, 3];

// const res2 = purge(array);


// Task 07.02. Generic Interfaces and Classes, Task 07.03. Generic Constraints
// const bookShelf: Shelf<Book> = new Shelf<Book>();
// const bookShelf = new Shelf<Book>();
// inventory.forEach(book => bookShelf.add(book));
// console.log(bookShelf.getFirst().title);

// const magazines: Magazine[] = [
//     { title: 'Programming Language Monthly', publisher: 'Code Mags' },
//     { title: 'Literary Fiction Quarterly', publisher: 'College Press' },
//     { title: 'Five Points', publisher: 'GSU' },
// ];

// const magazineShelf = new Shelf<Magazine>();
// magazines.forEach(magazine => magazineShelf.add(magazine));
// console.log(magazineShelf.getFirst());
// console.log(magazineShelf.printTitles());

// magazineShelf.printTitles();
// console.log(magazineShelf.find('Five Points'));

// console.log(getObjectProperty(magazines[0], 'publisher'));
// console.log(getObjectProperty(inventory[2], 'title'));


// Task 07.04. Utility Types
// const bookRequiredFields: BookRequiredFields = {
//     author: 'Anna',
//     available: false,
//     category: Category.Angular,
//     id: 1,
//     markDamaged: null,
//     pages: 200,
//     title: 'Learn Angular'
// };

// const updatedBook: UpdatedBook = {};
// let params: Parameters<CreateCustomerFunctionType>;
// params = ['Anna', 30, 'Kyiv'];
// createCustomer(...params);


// Task 07.05. Mapped Types, Utility Types, Conditional Types


// Task 08.01. Class Decorators (sealed) Task 08.02. Class Decorators that replace constructor functions (logger)
// const favoriteLibrarian1 = new UL.UniversityLibrarian();
// const favoriteLibrarian2 = new UL.UniversityLibrarian();
// favoriteLibrarian1['a'] = 1;
// UL.UniversityLibrarian['a'] = 2;
// UL.UniversityLibrarian.prototype['a'] = 3;

// console.log(favoriteLibrarian1);
// favoriteLibrarian1.name = 'Anna';
// favoriteLibrarian1['printLibrarian']();


// Task 08.03. Method Decorator (writable)
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.assistFaculty = null;
// favoriteLibrarian.teachCommunity = null;


// Task 08.04. Method Decorator (timeout)
// const refBook: RefBook = new RefBook(2, 'Learn JS', 2020, 5);
// refBook.printItem();


// Task 08.05. Parameter Decorator (logParameter)
// const favoriteLibrarian = new UL.UniversityLibrarian();
// console.log(favoriteLibrarian);
// favoriteLibrarian.name = 'Anna';
// favoriteLibrarian.assistCustomer('Boris', 'Learn TS');