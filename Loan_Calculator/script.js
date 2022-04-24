window.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById("calc-form");
    if (form) {
        setupIntialValues();
        form.addEventListener("submit", function (e) {
            e.preventDefault();
            update();
        });
    }
});

function getCurrentUIValues() {
    return {
        amount: +(document.getElementById("loan-amount").value),
        years: +(document.getElementById("loan-years").value),
        rate: +(document.getElementById("loan-rate").value),
    }
}

// Get the inputs from the DOM.
// Put some default values in the inputs
// Call a function to calculate the current monthly payment
function setupIntialValues() {
    document.getElementById("loan-amount").defaultValue = "10000";
    document.getElementById("loan-years").defaultValue = "10";
    document.getElementById("loan-rate").defaultValue = "5";
    let values = {
        amount: 10000,
        years: 10,
        rate: 5,
    }
    calculateMonthlyPayment(values);



}

// Get the current values from the UI
// Update the monthly payment
function update() {
    let newValues = getCurrentUIValues();
    calculateMonthlyPayment(newValues);




}

// Given an object of values (a value has amount, years and rate ),
// calculate the monthly payment.  The output should be a string
// that always has 2 decimal places.
function calculateMonthlyPayment(values) {
    let principal = values.amount;
    let payments = values.years * 12;
    let interest = values.rate / 100 / 12;
    let monthlyPayment = (principal * interest) / (1 - Math.pow(1 + interest, -payments));
    monthlyPayment = monthlyPayment.toFixed(2);
    updateMonthly(monthlyPayment);

}

// Given a string representing the monthly payment value,
// update the UI to show the value.
function updateMonthly(monthlyPayment) {
    const text = document.getElementById('monthly-payment');
    text.textContent = monthlyPayment;


}
