/**
 * Time complexity - O(|a|)
 */
function reverseArray(a) {
  const b = [];
  for (let i = a.length - 1; i >= 0; i--) {
    b.push(a[i]);
  }
  return b;
}
