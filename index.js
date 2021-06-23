// Exercise 1: Rectangles
// A. Write a function makeLine(size) that returns a line with exactly size hashes.
function makeLine(size) {
  let line = '';
  for (let i = 0; i < size; i++) {
    line += '#';
  }
  return line
}
console.log(makeLine(1));
// B. Write a function called makeSquare(size) that returns a size by size string of hashes. The function should NOT print each row of the square. Instead, it must return a single string that contains the entire shape.
function makeSquare(size) {
  return makeRectangle(size, size);
}
console.log(makeSquare(10));
// C. Write a function makeRectangle(width, height) that returns a rectangle with the given width and height. Use your makeLine function to do this.
function makeRectangle(width, height) {
  let rectangle = '';
  for (let i = 0; i < height; i++) {
    rectangle += (makeLine(width) + '\n');
  }
  return rectangle;
}
console.log(makeRectangle(7, 3));
// D. Now, go back and rewrite makeSquare to use makeRectangle.
// Exercise 1: Rectangles Completed!!