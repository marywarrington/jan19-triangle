describe('triangle', function() {
    it("is not a triangle for any two lengths less than or equal to the third length", function() {
      expect(triangle(4,5,20)).to.equal(false)
    });
  });

describe('triangleType', function() {
    it("is equilateral for three equal lengths", function() {
      expect(triangleType(3,3,3)).to.equal("equilateral");
    });
    it("is isosceles for two equal lengths", function() {
      expect(triangleType(3,3,4)).to.equal("isosceles")
    });
    it("is scalene for no equal lengths", function() {
      expect(triangleType(4,5,6)).to.equal("scalene")
    });
});
