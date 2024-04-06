document.addEventListener("DOMContentLoaded", function() {
    const display = document.getElementById("display");
    const buttons = document.querySelectorAll(".btn");

    let expression = '';

    buttons.forEach(button => {
        button.addEventListener("click", function() {
            const value = this.value;
            
            if (value === '=') {
                try {
                    const result = eval(expression);
                    display.value = result;
                    expression = result.toString();
                } catch (error) {
                    display.value = 'Error';
                }
            } else if (value === 'C') {
                display.value = '';
                expression = '';
            } else {
                expression += value;
                display.value += value;
            }
        });
    });
});
