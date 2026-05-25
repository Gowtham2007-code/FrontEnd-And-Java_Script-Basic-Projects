const input = document.querySelector('input');
const inputButtons = document.querySelectorAll('button');

function calculate()
{
    input.value = eval(input.value);
}

input.addEventListener('keydown', (event) => {
    if(event.key === 'Enter')
        calculate();
});

inputButtons.forEach((button) => {

    button.addEventListener('click', () => {

        const value = button.innerHTML;

        if(value === '=') 
            calculate();

        else if(value === 'AC') 
            input.value = '';

        else if(value === '⌫') 
            input.value = input.value.slice(0, -1);

        else if(value === 'X')
            input.value += '*';

        else
            input.value += value;
    });

});