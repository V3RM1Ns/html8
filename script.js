function calculate(operation) {
    const num1 = (document.getElementById("num1").value);
    const num2 = (document.getElementById("num2").value);
    const resultBox = document.getElementById("resultBox");
    

    let result;

    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            if (num2 === 0) {
                resultBox.textContent = "0-a bölmək olmaz!";
                return;
            }
            result = num1 / num2;
            break;
        default:
            resultBox.textContent = "Əməliyyat tapılmadı";
            return;
    }

    resultBox.textContent = "Nəticə: " + result;
}
