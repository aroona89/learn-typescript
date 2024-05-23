// optional parameter
const optionalParameter = (firstName: string, lastName?: string) => {
  if(lastName){
      console.log("Last Name exists!");
  } else {
      console.log("Last Name doest not exists!")
  }
}
optionalParameter("aroona");
optionalParameter("aroona", "ali");

// default parameters
const defaultParameter = (firstName: string, lastName: string = "akbar") => firstName + " " + lastName;
console.log(defaultParameter("aroona"));
console.log(defaultParameter("aroona", "ali"));

// rest parameters
function printItems(...items: string[]) {
items.forEach(item => console.log(item));
}
printItems('apple', 'banana', 'cherry');