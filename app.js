var InputSelected = null;

function SelectInput(inputId)
{
    if(inputId !== 'InputResult')
    {
        InputSelected = document.getElementById(inputId);
    }
}

function AssignNumber(numAsText)
{
    if(InputSelected === null)
    {
        alert("Select an input");
    }
    else
    {
        InputSelected.value += numAsText;
    }
}

function Add()
{
    var a = 1*document.getElementById('InputA').value;
    var b = 1*document.getElementById('InputB').value;

    document.getElementById('InputResult').value = a + b;
}

function Sub()
{
    var a = document.getElementById('InputA').value;
    var b = document.getElementById('InputB').value;

    document.getElementById('InputResult').value = a - b;
}

function Mult()
{
    var a = document.getElementById('InputA').value;
    var b = document.getElementById('InputB').value;

    document.getElementById('InputResult').value = a * b;
}

function Div()
{
    var a = document.getElementById('InputA').value;
    var b = document.getElementById('InputB').value;

    document.getElementById('InputResult').value = a / b;
}

function Clean()
{
    document.getElementById('InputA').value = "";
    document.getElementById('InputB').value = "";
    document.getElementById('InputResult').value = "";
}
