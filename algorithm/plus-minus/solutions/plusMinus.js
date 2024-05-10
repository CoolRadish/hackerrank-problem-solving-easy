/**
 * Time complexity - O(|arr|)
 */
function plusMinus(arr) {
  arr
    .reduce((acc, v) => (acc[(Math.sign(v) + 2) % 3]++, acc), [0, 0, 0])
    .forEach((count) => console.log((count / arr.length).toFixed(6)));
}
