// for (let i=1; i <=100; ++i){
//     // document.writeln(i);
//     console.log(i);
//     var ciao = `sono ciao e sono uguale a :` + i;
// }

// console.log(ciao);


// for (let i=1; i<=100; ++i){
//     if (i % 3 == 0) {
//         insideBox.innerHTML = insideBox.innerHTML + `<div class=box>Buzz<div>`
//     } else if (i % 5 ==0) {
    //         insideBox.innerHTML = insideBox.innerHTML + `<div class=box>Fizz<div>`
    //     } else if (i % 15 ==0){
        //         insideBox.innerHTML = insideBox.innerHTML + `<div class=box>FizzBuzz<div>`
        //     } else {
            //         insideBox.innerHTML = insideBox.innerHTML + `<div class=box>${i}<div>`
//     }
//     }
// var i=0;
let insideBox = document.querySelector(`.box-container`);
insideBox=0;

                // insideBox.classList.add('box')


    for (var i=1; i<=100; ++i){
    
        if (i % 15 ==0){
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">FizzBuzz<div>`;
            // insideBox.classList.add('.box')
            console.log(`FizzBuzz`);
           
        } else if (i % 5 ==0){
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">Fizz<div>`;
            console.log(`Fizz`);
        } else if  (i % 3 == 0){
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">Buzz<div>`;
            console.log(`Buzz`);
        }
        else {
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">${i}<div>`;
            console.log(i);
        }
            // console.log(i);
        }

    // insideBox.classList.add('box')

    // CREDEVO CHE I DIV FOSSERO COLLEGATI ALL'HTML CON INNERHTML, HO PROVATO ANCHE AD AGGIUNGERE LA CLASSE CHE HO CREATO MA MI DA ERRORE. NON RIESCO A FAR STAMPARE I DIV IN HTML

       




