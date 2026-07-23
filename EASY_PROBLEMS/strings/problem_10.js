// Testcase1 : madam
// Output : d
// Explanation : In the given string madam, the duplicates are m,a. After  removing m’s and a’s from the given string we formed a new string d.
let str = "madam";
let str_1 = "";

for (let i = 0; i < str.length; i++) {
  let count = 0;
  for (let j = 0; j < str.length; j++) {
    if (str[i] === str[j]) {
      count++;
    }
  }
  if (count === 1) {
    str_1 += str[i];
  }
}

console.log(str_1);
