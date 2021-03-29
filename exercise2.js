const isAnagram = (str1, str2) => {
  // Convert the strings to char arrays and sort them.
  // Then sort them, no matter in what order.
  const newStr1 = [...str1].sort().join("");
  const newStr2 = [...str2].sort().join("");

  // Finally, join them and compare them. If they are equal,
  // they're anagrams.
  return newStr1 === newStr2 ? true : false;
};

// Removing the fist two standard args.
const myArgs = process.argv.slice(2);
const splittedPath = process.argv[1].split("/");
const scriptName = splittedPath[splittedPath.length - 1];

if (myArgs.length < 2)
  return console.error(
    `Insufficient args: you must provide two strings as separate arguments.
Example: node ${scriptName} string1 string2`
  );

// Anagrams must have the same amount of letters.
if (myArgs[0].length !== myArgs[1].length)
  return console.error(`${myArgs[0]} and ${myArgs[1]} are not anagrams.`);

const result = isAnagram(myArgs[0], myArgs[1]) ? "" : "not ";

console.log(`${myArgs[0]} and ${myArgs[1]} are ${result}anagrams.`);
