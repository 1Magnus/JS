/*Реализовать основные 4 арифметические операции (+, -, /, *) в виде функций с двумя параметрами. Т.е. например, функция для сложения должна принимать два числа, складывать их и возвращать результат.
Обязательно использовать оператор return. */

function sum(a, b) {
    return a + b
}

function sub(a, b) {
    return a - b
}

function div(a, b) {
    return a / b
}

function mul(a, b) {
    return a * b
}

let a = 2, b = 2


/*Реализовать функцию с тремя параметрами: function mathOperation(arg1, arg2, operation),
где arg1, arg2 – значения аргументов, operation – строка с названием операции. В зависимости от
переданного значения операции (использовать switch) выполнить одну из арифметических операций
(использовать функции из задания 4) и вернуть полученное значение. */
function mathOperation(arg1, arg2, operation) {
    switch (operation) {
        case '+':
            return sum(arg1, arg2)
        case '-':
            return sub(arg1, arg2)
        case '/':
            return div(arg1, arg2)
        case '*':
            return mul(arg1, arg2)
        default:
            return 'Я не знаю такого знака'
    }
}

alert(mathOperation(a, b, "+"));
alert(mathOperation(a, b, "-"));
alert(mathOperation(a, b, "/"));
alert(mathOperation(a, b, "*"));
alert(mathOperation(a, b, "sd"));
