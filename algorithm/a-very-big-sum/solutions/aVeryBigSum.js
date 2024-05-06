/**
 * Time complexity - O(|ar|)
 */
function aVeryBigSum(ar) {
  return ar.reduce((acc, cur) => acc + cur, 0);
}
