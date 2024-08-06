function calculateLoan() {
    const loanAmount = parseFloat(document.getElementById('loanAmount').value);
    const interestRate = parseFloat(document.getElementById('interestRate').value) / 100 / 12;
    const loanTerm = parseInt(document.getElementById('loanTerm').value) * 12;
    const resultDiv = document.getElementById('result');

    if (isNaN(loanAmount) || isNaN(interestRate) || isNaN(loanTerm)) {
        resultDiv.textContent = 'Please enter valid numbers for all fields.';
        return;
    }

    const x = Math.pow(1 + interestRate, loanTerm);
    const monthlyPayment = (loanAmount * x * interestRate) / (x - 1);

    resultDiv.textContent = `Monthly Payment: ${monthlyPayment.toFixed(2)}`;
}
