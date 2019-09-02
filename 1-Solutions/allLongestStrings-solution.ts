function allLongestStrings(inputArray: string[]): string[] {
  const longest = inputArray.filter(long => {
    if (long.length === 3) {
      return long;
    }
  });

  return longest;
}

console.log(allLongestStrings(["aba", "aa", "ad", "vcd", "aba"]));
