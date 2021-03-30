const isWhite = (coords) => {
  // When row number is odd, then the columns will be black when odd and white when even.
  // The opposite situation happens when row is even.
  // Let's assume that a true value is a white cell.
  const rowIsEven = coords.Row % 2 === 0 ? true : false;
  // If column number is even, the cell will be white if row is odd.
  // If row is even, by simply negating the value of columnIsEven is enough
  // to get the cell color.
  const columnIsEven = coords.Column % 2 === 0 ? true : false;
  const isCellWhite = rowIsEven ? !columnIsEven : columnIsEven;
  return isCellWhite ? "YES" : "NO";
};

// Removing the fist two standard args.
const myArgs = process.argv.slice(2);
const splittedPath = process.argv[1].split("/");
const scriptName = splittedPath[splittedPath.length - 1];

if (myArgs.length < 2)
  return console.error(
    `Insufficient args: you must provide row and column number as separate arguments.
Example: node ${scriptName} 23 46`
  );

if (isNaN(myArgs[0]) || isNaN(myArgs[1]))
  console.error("Arguments must be integers.");

const result = isWhite({ Row: myArgs[0], Column: myArgs[1] });
console.log(
  `Is the color of the cell at row ${myArgs[0]} and column ${myArgs[1]} white? ${result}`
);
