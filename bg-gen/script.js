var css = document.querySelector("h3");
var body = document.getElementById("gradient");

const parentFixed1 = document.querySelector('#fixed1'),
pickerFixed1 = new Picker({
    parent: parentFixed1,
    popup: false,
    alpha: true,
    editor: true,
    editorFormat: 'hsl',
    color: 'hsla(206.6,95%,61.5%,1)',
    onChange: function(color) {
        parentFixed1.style.backgroundColor = color.hslaString;
    },
});

const parentFixed2 = document.querySelector('#fixed2'),
pickerFixed2 = new Picker({
    parent: parentFixed2,
    popup: false,
    alpha: true,
    editor: true,
    editorFormat: 'hsl',
    color: 'hsla(0,93%,78.5%,1)',
    onChange: function(color) {
        parentFixed2.style.backgroundColor = color.hslaString;
    },
});

function setGradient() {
    let bg = "linear-gradient(to right, " 
    + pickerFixed1.color.hslaString
    + ", " 
    + pickerFixed2.color.hslaString
    + ")";
    body.style.background = bg;
    css.textContent = bg + ";";
}

body.style.background = setGradient();
pickerFixed1.onChange = setGradient;
pickerFixed2.onChange = setGradient;

document.getElementsByClassName("picker_done")[0].remove();
document.getElementsByClassName("picker_done")[0].remove();
