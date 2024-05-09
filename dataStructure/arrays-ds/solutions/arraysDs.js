/**
 * Time complexity - O(|a|)
 */
function reverseArray(a) {
  let b;
  for (let i = a.length - 1; i >= a.length / 2; i--) {
    b = a[a.length - i - 1];
    a[a.length - i - 1] = a[i];
    a[i] = b;
  }
  return a;
}
