function addBorder(picture: string[]): string[] {
  let first = "*****";
  let last = "*****";

  const empty = [...picture];

  empty.unshift(first);
  empty.push(last);

  return empty;
}

console.log(addBorder(["abc", "ded"]));
