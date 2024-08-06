function calculateTip() {
    const billAmount = parseFloat(document.getElementById('billAmount').value);
    const tipPercentage = parseFloat(document.getElementById('tipPercentage').value);
    const resultElement = document.getElementById('result');

    if (isNaN(billAmount) || isNaN(tipPercentage) || billAmount <= 0 || tipPercentage < 0) {
        resultElement.textContent = 'Please enter valid values.';
        return;
    }

    const tipAmount = billAmount * (tipPercentage / 100);
    const totalAmount = billAmount + tipAmount;

    resultElement.innerHTML = `
        Total Amount: $${totalAmount.toFixed(2)}
    `;
}
