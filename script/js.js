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
// let=0;

    for (var i=1; i<=100; ++i){
    
        if (i % 15 ==0 && i % 3==0){
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">FizzBuzz<div>`;
            console.log(`FizzBuzz`);
           
        } else if (i % 5 ==0){
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">Fizz<div>`;
            console.log(`Fizz`);
        } else if  (i % 3 == 0) {
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">Buzz<div>`;
            console.log(`Buzz`);
        }
        else {
            insideBox.innerHTML = insideBox.innerHTML + `<div class="box">${i}<div>`;
            // console.log(i);
        }
            console.log(i);
        }
       
        // console.log(i);


    

    // HO PROVATO A SCRIVERE QUESTO MA MI DA ERRORE NELL'ELSE FINALE


