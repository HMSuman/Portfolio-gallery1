let mytext = [
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
    "I am suman halder.i love programming a lot.It is not only my work but also my favourie hobby.I think that i can make something bit in future by doing this work",
];
const btn = document.querySelector("#btn");
const textInput = document.querySelector("#textInput");
const result = document.querySelector("#result");
btn.addEventListener("submit", (e) => {
    e.preventDefault();
    const value = parseInt(textInput.value);
    const random = Math.floor(Math.random() * mytext.length);

    // for empty,negative and greater than 9

    if (isNaN(value) || value <= 0 || value > 9) {
        result.innerHTML = `<p>${mytext[random]}</p>`;
    } else {
        const slicArray = mytext.slice(0, value);
        const finalArray = slicArray
            .map((singleArray) => {
                return `<p>${singleArray}</p>`;
            })
            .join("");
        result.innerHTML = finalArray;
    }
});