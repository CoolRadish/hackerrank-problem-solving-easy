/**
 * Time complexity - O(|arr|)
 */
function plusMinus(arr) {
  let plus = 0;
  let minus = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) plus++;
    if (arr[i] < 0) minus++;
  }

  console.log((plus / arr.length).toFixed(6));
  console.log((minus / arr.length).toFixed(6));
  console.log(
    1 - (plus / arr.length).toFixed(6) - (minus / arr.length).toFixed(6)
  );
}
