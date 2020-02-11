let sentance = "hello there from lighthouse labs";

let counter = 0;

for (let char of sentance) {
  counter++;

  setTimeout(() => {
    process.stdout.write(char);
  }, counter * 50)
}
setTimeout(() => {
  process.stdout.write('\n');
}, (counter + 1) * 50)

