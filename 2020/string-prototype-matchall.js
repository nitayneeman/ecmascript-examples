const str = 'test1test2';
let regex, result;

// ------------------------
// Motivation
// ------------------------

// All matches without capturing groups
regex = /t(e)(st(\d?))/g;
result = str.match(regex);
console.log(result); // ['test1', 'test2']

// The first match with capturing groups
regex = /t(e)(st(\d?))/;
result = str.match(regex);
console.log(result); // ['test1', 'e', 'st1', '1', index: 0, input: "test1test2", groups: undefined]

// ------------------------
// The Proposal
// http://github.com/tc39/proposal-string-matchall
// ------------------------

regex = /t(e)(st(\d?))/g;

// All matches with capturing groups
result = str.matchAll(regex);
console.log(result); // [RegExpStringIterator]

// Iterating the matches
result = str.matchAll(regex);
for (const matchingValue of result) {
  console.log(matchingValue);
}

// Using destructuring
result = str.matchAll(regex);
const [matchingValue, matchingValue2] = result;

// Using spread operator
const array = [...str.matchAll(regex)];

// Using `from` method
const array2 = Array.from(str.matchAll(regex));
