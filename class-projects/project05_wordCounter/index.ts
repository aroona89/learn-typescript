function countCharactersAndWords(paragraph: string): {
  characterCount: number;
  wordCount: number;
} {
  // A callback function is a function that is passed as an argument to another function
  const wordCount = paragraph.split(" ").filter((word) => word !== "").length;
  // const count = paragraph.split(" ");
  // console.log(count);
  // const wordCount = count.filter(word => word !== "");
  // console.log(wordCount);

  let characterCount = 0;
  for (let i = 0; i < paragraph.length; i++) {
    const charCode = paragraph.charCodeAt(i);
    // A-Z: 65-90
    // a-z: 97-122
    if ((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122)) {
      characterCount++;
    }
  }

  return { characterCount, wordCount };
}

const paragraph = "Hello world,  this is a test paragraph.";
const result = countCharactersAndWords(paragraph);
console.log(
  `Character count: ${result.characterCount}, Word count: ${result.wordCount}`
);