/**
 * Time complexity - O(|arr|)
 */
function diagonalDifference(arr) {
  let principle = 0;
  let secondary = 0;
  for (let i = 0; i < arr.length; i++) {
    principle += arr[i][i];
    secondary += arr[i][arr.length - i - 1];
  }

  return Math.abs(principle - secondary);
}
