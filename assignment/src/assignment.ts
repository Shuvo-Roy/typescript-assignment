
// assignment 1 
{
  function formatString(input: string, toUpper?: boolean): string {
    if (toUpper) {
      console.log(input.toUpperCase());
      return input.toUpperCase();
    } else {
      console.log(input);
      return input;
    }
  }
  formatString("hello", true);
}

// assignment 2
{
    const books = [
        { title: "Book A", rating: 4.5 },
        { title: "Book B", rating: 3.2 },
        { title: "Book C", rating: 5.0 }
      ];
      
      function filterByRating(
        items: { title: string; rating: number }[],
        minRating: number = 4.0
      ): { title: string; rating: number }[] {
        return items.filter(book => book.rating >= minRating);
      }
      
      const highRatedBooks = filterByRating(books);
      console.log(highRatedBooks);
      
  }

// assignemnt 3
{

    function concatenateArrays<T>(...arrays: T[][]): T[]{
        //return arrays.flat();

        return arrays.reduce((arr,crr)=> arr.concat(crr),[])
    }
    console.log(concatenateArrays(["a", "b"], ["c"]));       // Output: ["a", "b", "c"]
    console.log(concatenateArrays([1, 2], [3, 4], [5]));     // Output: [1, 2, 3, 4, 5]
}
// assignment4
{
    class Vehicle{
        private make:string;
        private year:number;
        constructor(make: string,year:number){
            this.make=make;
            this.year=year;
        }
        public getInfo(): string{
            return `Make: ${this.make}, Year: ${this.year}`
        }
    }

    class Car extends Vehicle{
        private model:string;
        constructor(make: string,year:number, model: string){
            super(make,year)
            this.model=model;
        }
        public getModel(): string{
            return `Model ${this.model}`;
        }
    }
    const myCar = new Car("Toyota", 2020, "Corolla");
    console.log(myCar.getInfo());   // Output: "Make: Toyota, Year: 2020"
    console.log(myCar.getModel());  // Output: "Model: Corolla"
}


// assignment 5
{

    function processValue(value: string | number): number{
        // if(typeof value=== "string"){
        //     return value.length;
        // }else {
        //     return value * 2;
        // }
        if(typeof value=== "string"){
            return value.length;
        }else if(typeof value ==="number"){
            return value * 2;
        }else{
            throw new Error;
        }
    }
    console.log(processValue("hello"));
    console.log(processValue(10));
}

// assignment 6
{
  interface Product {
    name: string;
    price: number;
  }

  function getMostExpensiveProduct(products: Product[]): Product | null {
    if (products.length === 0) {
      return null;
    }

    let highestProduct = products[0];

    for (const product of products) {
      if (product.price > highestProduct.price) {
        highestProduct = product;
      }
    }
    return highestProduct;
  }

  const products = [
    { name: "Pen", price: 10 },
    { name: "Notebook", price: 25 },
    { name: "Bag", price: 50 },
  ];

  console.log(getMostExpensiveProduct(products));
  // Output: { name: "Bag", price: 50 }
}


// assignment 7
{
    enum Day {
        Monday,
        Tuesday,
        Wednesday,
        Thursday,
        Friday,
        Saturday,
        Sunday
      }
      
      function getDayType(day: Day): string{
        if(day===Day.Friday || day ===Day.Sunday){
            return "Weekend";
        }else{
            return "Weekday";
        }
      }

      console.log(getDayType(Day.Friday)); // Output: "Weekend"
      console.log(getDayType(Day.Monday)); // Output: "Weekday"
      console.log(getDayType(Day.Sunday)); // Output: "Weekend"
}

// assignment 8
{
  async function squareAsync(n: number): Promise<number> {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (n < 0) {
          reject(new Error("Negative number not allowed"));
        } else {
          resolve(n * n);
        }
      }, 1000);
    });
  }

  
  squareAsync(4).then(console.log); // Output after 1s: 16
  squareAsync(-3).catch(console.error); // Output: Error: Negative number not allowed
}
