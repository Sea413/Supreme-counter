describe('pigLatin', function() {
  it("is false for a consonant to be at the start of a word", function() {
    expect(pigLatin("tree")).to.equal(false);
  });

  it("is true for words starting with a vowel to end in ay", function() {
    expect(pigLatin('appleay')).to.equal(true);
  });
 //  it("is false for years divisible by 100", function() {
 //    expect(leapYear(1900)).to.equal(false);
 //  });
 //
 // it("is true for years divisible by 400", function() {
 //    expect(leapYear(2000)).to.equal(true);
 //  });
});
