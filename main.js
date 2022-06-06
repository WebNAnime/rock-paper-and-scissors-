

let botImg = document.querySelector('#sprite1')
let playerImg = document.querySelector('#sprite')


var playerSc = 1;


var botsc = 1;


let botScore = document.querySelector('#botScore').innerHTML = '0'



let playerScore = document.querySelector('#playerScore').innerHTML = '0'


fun1 = () => {


    let botPlayer = Math.floor(Math.random() * 3)




    playerImg.src = 'rock2.png'


    if (botPlayer == 0) {
        botImg.src = 'rock.png'
    }

    else if (botPlayer == 1) {

        botImg.src = 'paper.png'

        document.querySelector('#botScore').innerHTML = botsc++;



    }

    else if (botPlayer == 2) {
        botImg.src = 'scissor.png'

        document.querySelector('#playerScore').innerHTML = playerSc++;


    } else {

        alert("something went wrong")

    }


    if (playerSc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#playerScore').innerHTML = 0;
        document.querySelector('#win').innerHTML = 'You  Win';

        playerSc = 1;
    } else if (botsc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#win').innerHTML = 'Computer Win';
        let botScore = document.querySelector('#botScore').innerHTML = '0'
        botsc = 1;
    }





}
let fun2 = () => {

    playerImg.src = 'paper2.png'


    let botPlayer = Math.floor(Math.random() * 3)



    if (botPlayer == 0) {
        botImg.src = 'rock.png'


        document.querySelector('#playerScore').innerHTML = playerSc++;

    }

    else if (botPlayer == 1) {

        botImg.src = 'paper.png'

    }

    else if (botPlayer == 2) {
        botImg.src = 'scissor.png'

        document.querySelector('#botScore').innerHTML = botsc++;

    }
    if (playerSc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#playerScore').innerHTML = 0;
        playerSc = 1;
    } else if (botsc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#win').innerHTML = 'Computer Win';
        let botScore = document.querySelector('#botScore').innerHTML = '0'
        botsc = 1;
    }


}










let fun3 = () => {

    playerImg.src = 'scissor2.png'


    let botPlayer = Math.floor(Math.random() * 3)






    if (botPlayer == 0) {
        botImg.src = 'rock.png'


        document.querySelector('#botScore').innerHTML = botsc++;

    }

    else if (botPlayer == 1) {

        botImg.src = 'paper.png'

        document.querySelector('#playerScore').innerHTML = playerSc++;


    }

    else if (botPlayer == 2) {
        botImg.src = 'scissor.png'
    }

    if (playerSc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#playerScore').innerHTML = '0';
        let botScore = document.querySelector('#botScore').innerHTML = '0'

        playerSc = 1;
    } else if (botsc == 6) {
        document.querySelector('.winner').style.display = "flex"
        document.querySelector('#win').innerHTML = 'Computer Win';
        let botScore = document.querySelector('#botScore').innerHTML = '0'
        document.querySelector('#playerScore').innerHTML = '0';
        botsc = 1;
    }

}





let again = () => {

    botImg.src = '';
    playerImg.src = '';

    document.querySelector('.winner').style.display = "none"
    document.querySelector('#playerScore').innerHTML = 0;
    let botScore = document.querySelector('#botScore').innerHTML = 0;
    botsc = 1;
    playerSc = 1;

}

