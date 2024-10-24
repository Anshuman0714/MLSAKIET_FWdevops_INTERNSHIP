
let input = document.getElementById('inputbox');
let buttons = document.querySelectorAll('button');
let expression = "";

const updateInput = () => {
    input.value = expression;
};

const evaluateExpression = () => {
    try {
        expression = eval(expression.replace(/%/g, '/100*')); 
    } catch (error) {
        expression = "Error";
    }
    updateInput();
};

const handleButtonClick = (e) => {
    const value = e.target.innerHTML;
    if (value === '=') {
        evaluateExpression();
    } else if (value === 'AC') {
        expression = "";
        updateInput();
    } else if (value === 'DEL') {
        expression = expression.slice(0, -1);
        updateInput();
    } else {
        expression += value;
        updateInput();
    }
};

buttons.forEach(button => {
    button.addEventListener('click', handleButtonClick);
});
