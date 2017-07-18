
//For Loops
//made up of 4 statements:
  /*for ([initialization]; [condition]; [iteration]) {
  [loopBody]
}
*/
/* initialization - expression or var declaration; used to
initialize a counter variable, can declare new vars with var
keyword.
Condition - expression evaluated before each loop iteration
Iteration - incrementing/decrementing a counter
*/

function forLoop(array) {
  for (let i = 0; i < 25; i++) {
    if (i === 1) {
      array.push("I am 1 strange loop.");
    }
    else {
      array.push("I am ${i} strange loops.");
    }
  }
  return array;
}

//While Loops
/* while ([condition]) {
[loopBody]
}
*/
function whileLoop(number) {
  while (number > 0) {
    console.log(--number)
  }
  return "done";
}

//Do-While Loops
/* Same as while loop, except loop's body is executed at least once
* before the condition is tested.
* do {
   [loopBody];
} while ([condition]);
*/
function maybeTrue() {
  return Math.random() >= 0.5
}

do {
  console.log('doo-bee-doo-bee-doo')
} while (maybeTrue());

function doWhileLoop(array) {
  do {
    array.pop();
  }
  while (array.length > 0 && maybeTrue());
  return array;
}
