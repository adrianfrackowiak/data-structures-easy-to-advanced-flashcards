// Example - Fibonacci
function fibo(num) {
  if (num <= 1) return 1;

  return fibo(num - 1) + fibo(num - 2);
}

fibo(6); // 13 => O(2^n)
