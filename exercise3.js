const applesByFences = (fences) => {
  // Because of the scope of this exercise, hardcoding the variable applesForMe
  // is permitted although it's a bad design.
  const applesForMe = 1;
  // Let's think the problem from the expected result to the beginning.
  // I want a certain quantity of apples and I need to duplicate that amount and add one
  // extra for each guard I must pass through.
  let totalApples = applesForMe;

  for (let i = 0; i < fences; i++) {
    totalApples = totalApples * 2 + 1;
  }
  return totalApples;
};

// Removing the fist two standard args.
const myArgs = process.argv.slice(2);
const splittedPath = process.argv[1].split("/");
const scriptName = splittedPath[splittedPath.length - 1];

if (myArgs.length < 1)
  return console.error(
    `Insufficient args: you must provide an integer number.
Example: node ${scriptName} 3`
  );

if (isNaN(myArgs[0])) return console.error("Argument is not a number.");

const fenceNumber = Math.floor(parseInt(myArgs[0]));
const result = applesByFences(fenceNumber);

/* Tiny testing function
let apples = result;
for (let i = parseInt(myArgs[0]); i > 0; i--) {
  if (apples % 2 === 0) apples = apples - apples / 2 - 1;
  else apples = apples - Math.ceil(apples / 2);
  console.log(`After fence ${i}: ${apples}`);
}
*/

console.log(
  `Necessary amount of apples to pass ${fenceNumber} fences: ${result}`
);
