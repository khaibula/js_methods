
const obj = {
  name: 'sanya',
  year: 2001,

  [Symbol.toPrimitive](hint) {
    if(hint === 'string') return this.name;
    if(hint === 'number') return this.year;
  }
}


console.log('String(obj)', String(obj))
console.log('Number(obj)', Number(obj))
console.log('Boolean(obj)', Boolean(obj))
