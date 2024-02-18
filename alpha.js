//-------GENERAL SYSTEM----//
// function play(){
//     //hide the home screen to hide the screen add the class hidden to 
//     homeSection = document.getElementById('home-section');
//     homeSection.classList.add('hidden');
//     //show the playground
//     const playGroundSection = document.getElementById('playground-section')
//     playGroundSection.classList.remove('hidden');
// }

//--------IN A SHORT CUT APPROACH----//
function hideElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.add('hidden');

}
function showElementById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('hidden');
}

//Continue gaming 

function getARandomAlphabet(){
     // get or create an alphabet array
    const alphabetString = 'abcdefghijklmnopqrstuvwxyz';
    const alphabets = alphabetString.split('');
    const randomNumbers = Math.random()*25;
    const index = Math.round(randomNumbers);
    const alphabet = alphabets[index];
    return alphabet;

}
//-------utility function--------01
function setBackgroundColorById(elementId){
    const element =document.getElementById(elementId);
    element.classList.add('bg-orange-400');
}
//-------utility function--------02
function removeBackgroundColorById(elementId){
    const element = document.getElementById(elementId);
    element.classList.remove('bg-orange-400');
}

//-------utility function--------03
function getTextElementValueById(elementId){
    const element = document.getElementById(elementId);
    const elementValueText = element.innerText;
    const value = parseInt(elementValueText);
    return value;
}
//-------utility function--------04
function setTextElementValueById(elementId , value){
    const element = document.getElementById(elementId);
    element.innerText = value;
}
//-------utility function--------04
function getElementTextById(elementId){
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;
}

// //---GENERAL APPROACH-----callback-function-----//
// function handleKeyboardButtonPress(event){
//     const playerPressed = event.key;
//     console.log( 'player pressed :' , playerPressed);

//     //get the expected to press
//     const currentAlphabetElement = document.getElementById('current-alphabet');
//     const currentAlphabet = currentAlphabetElement.innerText;
//     const expectedAlphabet = currentAlphabet.toLowerCase();
//     console.log(playerPressed,currentAlphabet);

//     // GENERAL METHOD FOR ---check matched or not
//     if(playerPressed === expectedAlphabet ){
//         console.log('you get a point');
//         //update score
//         //1.get the current score
//         const currentScoreElement = document.getElementById('current-score');
//         const currentScoreText = currentScoreElement.innerText;
//         const currentScore = parseInt(currentScoreText);
//         //2. increase the score
//         const newScore = currentScore + 1;
//         //3.show the updated score
//         currentScoreElement.innerText = newScore;
        

//         //start a new round
//         removeBackgroundColorById(expectedAlphabet);
//         continueGame();
//     }
//     else{
//         console.log('you lost a life');
//         //step -1 : get the current life number
//         const currentLifeElement = document.getElementById('current-life');
//         const currentLifeText = currentLifeElement.innerText;
//         const currentLife = parseInt(currentLifeText);

//         //step -2:reduce the life count
//         const newLife = currentLife - 1;

//         //step-3: display the updated life count
//         currentLifeElement.innerText = newLife;
//     }
// }

//---------SHORTCUT APPROACH------callback-function-----//
function handleKeyboardButtonPress(event){
    const playerPressed = event.key;
    console.log( 'player pressed :' , playerPressed);

    //stop the game if pressed 'Esc'
    if(playerPressed === 'Escape'){
        gameOver();
    }

    //get the expected to press
    const currentAlphabetElement = document.getElementById('current-alphabet');
    const currentAlphabet = currentAlphabetElement.innerText;
    const expectedAlphabet = currentAlphabet.toLowerCase();
    console.log(playerPressed,currentAlphabet);

    //---SHORT CUT APPROACH(WRITING COMMON FUNCTION FOR SCORE AND LIFE) for-----check matched or not
    if(playerPressed === expectedAlphabet ){
        console.log('you got a score');
        const currentScore = getTextElementValueById('current-score');
        const newScore = currentScore + 1;
        setTextElementValueById('current-score',newScore);
        removeBackgroundColorById(expectedAlphabet);
        continueGame();
    }
    else{
        console.log('you lost a life');
        const currentLife = getTextElementValueById('current-life');
        const updatedLife = currentLife -1;
        setTextElementValueById('current-life',updatedLife);
        if(updatedLife === 0){
            gameOver();
        }
    }
}

//capture key press----//
document.addEventListener('keyup', handleKeyboardButtonPress);

function continueGame(){
    //step-1 : generate a random alphabet
    const alphabet = getARandomAlphabet();
    console.log('your random alphabet :', alphabet);
    //set randomly generated alphabet to the screen
    const currentAlphabetElement  = document.getElementById('current-alphabet');
    currentAlphabetElement.innerText = alphabet;
    //set background color
    setBackgroundColorById(alphabet);
}

function play(){
    //hide everything show only the playground
    hideElementById('home-section');
    hideElementById('score-section');
    showElementById('playground-section');

    //reset score and life
    setTextElementValueById('current-life', 5);
    setTextElementValueById('current-score', 0);
    continueGame();
}


function gameOver(){
    hideElementById('playground-section');
    showElementById('score-section');
    //update the final score
    //1.get the final score
    const lastScore = getTextElementValueById('current-score');
    console.log(lastScore);
    setTextElementValueById('final-score',lastScore);

    //clear the last selected
    const currentAlphabet = getElementTextById('current-alphabet');
    removeBackgroundColorById(currentAlphabet);
}

