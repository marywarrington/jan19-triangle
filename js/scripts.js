var triangle = function(length1, length2, length3) {
  if ((length1 + length2 <= length3) || (length1 + length3 <= length2) || (length2 + length3 <= length1)) {
    return false;
  } else {
    return true;
  }
};

var triangleType = function(length1, length2, length3) {
  if ((length1 === length2) && (length1 === length3)) {
    return "equilateral";
  }
  if (((length1 === length2) && (length1 !== length3)) || ((length2 === length3) && (length2 !== length1)) || ((length1 === length3) && (length1 !== length2))) {
    return "isosceles";
  }
  if ((length1 !== length2) && (length1 !== length3) && (length2 !== length3)) {
    return "scalene";
  }
};

$(document).ready(function() {
  $("form#triangulate").submit(function(event) {
    var length1 = parseInt($("input#length1").val());
    var length2 = parseInt($("input#length2").val());
    var length3 = parseInt($("input#length3").val());

    var triangleTest = triangle(length1, length2, length3);
    var triangleTypeTest = triangleType(length1, length2, length3);

      if (!triangleTest) {
        $("#resultsfalse").show();
      } else {
        if (triangleTypeTest = "equilateral") {
          $("#resultstrue").show();
          $(".type").text("equilateral");
        } else if (triangleTypeTest = "isosceles") {
          $("#resultstrue").show();
          $(".type").text("isosceles");
        } else {
          $("#resultstrue").show();
          $(".type").text("scalene");
        }
      }
    event.preventDefault();
  });
});
