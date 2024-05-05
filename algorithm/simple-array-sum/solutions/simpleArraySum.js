/**
 * Time complexity - O(|ar|)
 */
function simpleArraySum(ar) {
  return ar.reduce((acc, cur) => acc + cur, 0);
}
