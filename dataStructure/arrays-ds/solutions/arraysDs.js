/**
 * Time complexity - O(|a|)
 */
function reverseArray(a) {
  for (let head = 0, tail = a.length - 1; head < tail; head++, tail--) {
    [a[head], a[tail]] = [a[tail], a[head]];
  }

  return a;
}
