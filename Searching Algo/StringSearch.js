const stringSearch = (largeString, shortString) => {
  let count = 0;
  for (let i = 0; i < largeString.length; i++) {
    for (let j = 0; j < shortString.length; j++) {
      if (largeString[i + j] !== shortString[j]) break;
      if (j == shortString.length - 1) count++;
    }
  }
  return count;
};

console.log(stringSearch('thehathmanishthehathe', 'manish') + ' match found!!');
