const bigint = 9007199254740992n;
console.log(bigint); // 9007199254740992n
console.log(typeof bigint); // bigint

const bigintAsBinary = 0b100000000000000000000000000000000000000000000000000000n;
console.log(bigintAsBinary); // 9007199254740992n
const bigintAsOctal = 0o400000000000000000n;
console.log(bigintAsOctal); // 9007199254740992n
const bigintAsHexadecimal = 0x20000000000000n;
console.log(bigintAsHexadecimal); // 9007199254740992n

const bigintByNumber = BigInt(Number.MAX_SAFE_INTEGER + 1);
console.log(bigintByNumber); // 9007199254740992n
const bigintByString = BigInt('9007199254740992');
console.log(bigintByString); // 9007199254740992n

const addition = 3n + 2n;
console.log(addition); // 5n
const subtraction = 3n - 2n;
console.log(subtraction); // 1n
const multiplication = 3n * 2n;
console.log(multiplication); // 6n
const division = 3n / 2n;
console.log(division); // 1n
const modulo = 3n % 2n;
console.log(modulo); // 1n
//  const invalidOperation = 3n + 2; // TypeError
const validOperation = 3n + BigInt(2); // 5n

console.log(3n == 3); // true
console.log(3n == '3'); // true
console.log(BigInt(3) == Number(3)); // true
console.log(0n == false); // true

console.log(3n > '2'); // true
console.log(BigInt(3) <= 2); // false

console.log(3n === 3); // false
console.log(3n === '3'); // false
console.log(BigInt(3) === Number(3)); // false
console.log(0n === false); // false
