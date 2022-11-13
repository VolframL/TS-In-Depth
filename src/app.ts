showHello('greeting', 'TypeScript!');

function showHello(divName: string, name: string) {
    const elt = document.getElementById(divName);
    elt.innerText = `Hello from ${name}`;
}

// ==============================================================
enum Category {
    JavaScript, CSS, HTML, TypeScript, Angular
}


type Book = {
    id: number;
    title: string;
    author: string;
    available: boolean;
    category: Category;
};

function  getAllBooks(): readonly Book[] {
    const books = <const> [
        { id: 1, title: 'Refactoring JavaScript', category: Category.JavaScript, author: 'Evan Burchard', available:
        true},
        { id: 2, title: 'JavaScript Testing', category: Category.JavaScript, author: 'Liang Yuxian Eugene', available:
        false },
        { id: 3, title: 'CSS Secrets', category: Category.CSS, author: 'Lea Verou', available: true },
        { id: 4, title: 'Mastering JavaScript Object-Oriented Programming', category: Category.JavaScript, author: 'AndreaChiarelli', available: true }
    ];
    return books;
}

function logFirstAvailable(books: readonly Book[]): void{
    // const title: string = books.find(book => book.available).title;
    const title: string = books.find(({available}) => available)?.title;
    console.log(`Number of books: ${books.length} and first availible book is - ${title}`);
}

function getBookTitlesByCategory(inputCategory: Category): string[] {
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

// Task 02.01
// console.log(getAllBooks());
// logFirstAvailable(getAllBooks());


// logBookTitles(getBookTitlesByCategory(0));
// logBookTitles(getBookTitlesByCategory(Category.JavaScript));

// console.log(getBookAuthorByIndex(2));

calcTotalPages();