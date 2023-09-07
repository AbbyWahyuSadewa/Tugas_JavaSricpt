var a = 20;
var b = 30;
var c = 60;

if (a > b && a > c) {
  console.log(a);
} else if (a < b && b > c) {
  console.log(b);
} else {
  console.log(c);
}

if ((a < b && a > c) || (a > b && a < c)) {
  console.log(a);
} else if ((b < a && b > c) || (b > a && b < c)) {
  console.log(b);
} else {
  console.log(c);
}

if (a < b && a < c) {
  console.log(a);
} else if (b < a && b < c) {
  console.log(b);
} else {
  console.log(c);
}
