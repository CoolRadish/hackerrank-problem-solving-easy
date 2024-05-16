/**
 * Time complexity - O(|arr|)
 */
function miniMaxSum(arr) {
  const sum = arr.reduce((a, b) => a + b, 0);
  const min = sum - Math.max(...arr);
  const max = sum - Math.min(...arr);
  console.log(min, max);
}
