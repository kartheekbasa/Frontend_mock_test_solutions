function calculateAge() {
    const birthdate = document.getElementById('birthdate').value;
    const resultElement = document.getElementById('result');

    if (birthdate) {
        const birthDate = new Date(birthdate);
        const today = new Date();

        let age = today.getFullYear() - birthDate.getFullYear();
        const monthDiff = today.getMonth() - birthDate.getMonth();

        if (monthDiff < 0 || (monthDiff === 0 && today.getDate() < birthDate.getDate())) {
            age--;
        }

        resultElement.textContent = `Your age is ${age} years old.`;
    } else {
        resultElement.textContent = 'Please enter a valid birthdate.';
    }
}
