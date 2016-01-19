var triangle = function(length1, length2, length3) {
  if ((length1 === length2) && (length1 === length3)) {
    return "equilateral";
  }
  if (((length1 === length2) && (length1 != length3)) || ((length2 === length3) && (length2 != length1)) || ((length1 === length3) && (length1 != length2))) {
    return "isosceles";
  }
  if ((length1 != length2) && (length1 != length3) && (length2 != length3)) {
    return "scalene";
  }
  if ((length1 + length2 <= length3) || (length1 + length3 <= length2) || (length2 + length3 <= length1)) {
    return "not a triangle";
  }
};
