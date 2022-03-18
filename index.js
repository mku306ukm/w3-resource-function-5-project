//4. Write a JavaScript function that returns a passed string with letters in alphabetical order
function alphabetOrder(String) {
  return String.split("").sort().join("");
}
console.log(alphabetOrder("3868681"));

/*The split() method is used to split a String object into an array of strings by separating the string into substrings.
Code : console.log('32243'.split(""));
Output : ["3", "2", "2", "4", "3"]

The sort() method is used to sort the elements of an array in place and returns the array.
Code : console.log(["3", "2", "2", "4", "3"].sort());
Output : ["2", "2", "3", "3", "4"]

The join() method is used to join all elements of an array into a string.
Code : console.log(["2", "2", "3", "3", "4"].join(""));
Output : "22334" */
