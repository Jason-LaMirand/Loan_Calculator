
it('should calculate the monthly rate correctly', function () {
    let values = {
        amount: 10000,
        years: 10,
        rate: 5,
    };

    expect(calculateMonthlyPayment(values)).toEqual(106.07);

});


it("should return a result with 2 decimal places", function () {
    expect(monthlyPayment = 3.02548).toBe(3.02);
});

/// etc

it("has the correct default value for each input", function () {

})