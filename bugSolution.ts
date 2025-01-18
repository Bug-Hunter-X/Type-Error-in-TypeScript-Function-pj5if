function add(a: number, b: number): number {
  return a + b;
}

let result = add(1, 2); // Correct usage

function addString(a: string, b: string): string {
  return a + b; // String concatenation
}

let stringResult = addString('1', '2'); // Correct String usage

function addFlexible(a: number | string, b: number | string): number | string {
  if (typeof a === 'number' && typeof b === 'number') {
    return a + b;
  } else {
    return String(a) + String(b); 
  }
}

let flexibleResult = addFlexible(1, '2');
console.log(flexibleResult); //Output: 12