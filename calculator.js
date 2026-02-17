let results = [];

document.write("<h3>Calculation Results</h3>");
document.write("<table border='1'>");
document.write("<tr><th>Number 1</th><th>Operator</th><th>Number 2</th><th>Result</th></tr>");

while (true) {

    let x = prompt("Enter first number (Cancel to stop):");
    if (x === null) break;

    let y = prompt("Enter second number:");
    if (y === null) break;

    let operator = prompt("Enter operator (+, -, *, /, %):");
    if (operator === null) break;

    let result;

    if (isNaN(x) || isNaN(y)) {
        result = "Input Error";
    } else {
        x = Number(x);
        y = Number(y);

        switch (operator) {
            case "+":
                result = x + y;
                results.push(result);
                break;
            case "-":
                result = x - y;
                results.push(result);
                break;
            case "*":
                result = x * y;
                results.push(result);
                break;
            case "/":
                result = y !== 0 ? x / y : "Divide by zero error";
                if (y !== 0) results.push(result);
                break;
            case "%":
                result = x % y;
                results.push(result);
                break;
            default:
                result = "Operator Error";
        }
    }

    document.write("<tr><td>" + x + "</td><td>" + operator + "</td><td>" + y + "</td><td>" + result + "</td></tr>");
}

document.write("</table>");

/* Summary Table */
if (results.length > 0) {

    let total = results.reduce((a, b) => a + b, 0);
    let min = Math.min(...results);
    let max = Math.max(...results);
    let avg = total / results.length;

    document.write("<h3>Summary</h3>");
    document.write("<table border='1'>");
    document.write("<tr><th>Minimum</th><th>Maximum</th><th>Average</th><th>Total</th></tr>");
    document.write("<tr><td>" + min + "</td><td>" + max + "</td><td>" + avg + "</td><td>" + total + "</td></tr>");
    document.write("</table>");
}
