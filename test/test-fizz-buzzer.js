const should = require('chai').should();

const fizzBuzzer = require('../fizzBuzzer');

describe('fizzBuzzer',  () => {

  it('should return "fizz-buzz" if divisible by 15', function () {
    const probabilites = [15,30,45];
    probabilites.forEach(function (input) {
      fizzBuzzer(input).should.equal('fizz-buzz');
    });
  });

  it('should return "fizz" if divisible by 3', function () {

    [3, 9, 12].forEach(function (input) {
      fizzBuzzer(input).should.equal('fizz');
    });
  });

  it('should return "buzz" if divisible by 5', () => {
    [5,10,20].forEach(function (input) {
      fizzBuzzer(input).should.equal('buzz');
    });
  });
});
