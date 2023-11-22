function stringChop(str, size) {
  let ans = [];
  let i = 0;

  while (i <= str.length - 1) {
    ans.push(str.slice(i, i + size));
    i = i + size;
  }

  return ans;
}

// Example of using the function with prompt
const str = prompt("Enter String.");
const size = parseInt(prompt("Enter Chunk Size.")); // Ensure size is treated as an integer
const result = stringChop(str, size);
alert(JSON.stringify(result));
