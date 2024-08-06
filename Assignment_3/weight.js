let timeout;
function convertWeight() {
    clearTimeout(timeout);
    const pounds = document.getElementById('pounds').value;
    const outputElement = document.getElementById('output');
    if (pounds === "") {
        outputElement.textContent = "";
        return;
    }
    const kg = pounds * 0.45359237;
    outputElement.textContent = `Your weight in kg is: ${kg.toFixed(2)}`;
    timeout = setTimeout(() => {
        outputElement.textContent = "Muskoni Dobbey";
    }, 10000);
}
