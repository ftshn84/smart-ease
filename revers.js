function reverseWords(word) {
  const length = word.length;
  let reveerse = "";
  for (let i = word.length - 1; i >= 0; i--) {
    reveerse = reveerse + word[i];
  }
  return reveerse;
}

const input = ["God", "Wolf", "Rail", "Gum", "Maps", "Live"];

console.log(reverseWords(input));
console.log(reverseWords(input[1]));
