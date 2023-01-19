/* We are going to meet four people in London, (Promise)
.then(we will select two people out of the four for the job)
.then(we will test those 2 people as much as we can till we end up 1)
.catch(if none showed up)

Then => is going to be executed when the promise succeeds
Catch => Is going to run when the promise fails. So Let's catch why it failed.
Finally => We will say Thank you for the operator or the person who is bringing us the 4 people to pick up from.
*/

const myPromise = new Promise((resolveFunction, rejectFunction) => {
  let employees = ["P1", "P2", "P3", "P4"];
  if (employees.length === 4) {
    resolveFunction(employees);
  } else {
    rejectFunction("Less than four people showed up!");
  }
});

myPromise
  .then((employees) => {
    employees.length = 2;
    console.log("Reduced to two ppl: -> " + employees);
    return employees; // Passing the new value DOWN to the next that will be called after us
  })
  .then((newEmployeesArrayAfterItHasBeenUpdated) => {
    newEmployeesArrayAfterItHasBeenUpdated.length = 1;
    console.log("Reduced to one person: -> " + employees);

    return newEmployeesArrayAfterItHasBeenUpdated;
  })
  .then((selectedPerson) => {
    console.log(`The selected person is ${selectedPerson}`);
  })
  .catch((message) => {
    console.log(message);
  })
  .finally(() => console.log("Thank you for using our little program!"));
