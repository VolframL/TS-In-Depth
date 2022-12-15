import { ReferenceItem } from './classes';

class Encyclopedia extends ReferenceItem {
    constructor(id: number, title: string, year: number, public edition: number) {
        super(id, title, year);
    }

    override printItem(): void {
        super.printItem();
        // console.log(Object.getPrototypeOf(this).constructor.department);
        console.log(`Edition:${this.edition} ${this.year}`);
    }

    printCitation(): void {
        console.log(`${this.title} - ${this.year}`);
    }
}

export default Encyclopedia;