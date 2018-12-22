function sum(a : number, b : number){
  return a + b;
}

// boolean
let isPending: boolean = true;

// number
let age: number = 56;

// string
let username: string = 'Bob';

// arrays
let names: string[] = ['Bob', 'Sue'];
let names2: Array<string> = ['Bob', 'Sue'];

// objects
let person: object = { username: 'Bob' };

// null, undefined
let meh: null = null;
let blah: undefined = undefined;

// Tuples
let basket: [string, number];
basket = ['ball', 5];

// Enum
enum Size { Small = 1, Medium = 2, Large = 3 }
let size: string = Size[2];

// Void
let sing = (): void => {
  console.log('lala');
}
// cf
let tune = (): string => {
  return 'lala';
}
// Never - for functions that don't return or have endpoints
let error = (): never => {
  throw Error('oops');
}

// Interface - works well w objects, acts like creating a new type
// create a new name (which Types don't)
interface BookCollection {
  count: number,
  description: string,
  age?: number // question mark makes it optional
}
let libraryPurchase = (books: BookCollection) => {
  console.log('purchasing all');
}
// Type assertion
let personalCollection = {} as BookCollection;
personalCollection.count // no error

// Function
let libraryPurchase2 = (books: BookCollection): void => {
  console.log('purchasing all');
}
let libraryPurchase3 = (books: BookCollection): number => {
  return 100;
}

// Classes
class Animal {
  private sing: string;
  constructor(sound: string){
    this.sing = sound;
  }
  greet(){
    return `Hello ${this.sing}`;
  }
}
let lion = new Animal('Roarrr');
// private means lion.sing not accessible
lion.greet();

// Union
let confused: string | number = 5;
confused = 'hello';

// Any (not advisable :))
let whatever: any = 'Blaah'
whatever = 5;
whatever = ['blob'];
