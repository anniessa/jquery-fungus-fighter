$(document).ready(onReady);

// State Variables can be declared outside of the onReady
// Feel free to make this to what you want!
// Example:
// let fungusHP = 100;

let fungusHP = 100;
let myAP = 100;


function onReady() {
    
    // Make sure you check the index.html file! 
    // There are lots of buttons and things ready for you to hook into here!
    $('.attack-btn.arcane-sceptre').on('click', arcaneAttack);
    $('.attack-btn.entangle').on('click', entangleAttack);
    $('.attack-btn.dragon-blade').on('click', dragonBladeAttack);
    $('.attack-btn.star-fire').on('click', starFireAttack);
    
    // 🧠 Remember
    // - Handle events that ->
    // - Updates state which is ->
    // - Rendered to the DOM
}

function arcaneAttack() {
    fungusHP -= 14;
    myAP -= 12;
    if (fungusHP < 0){
        fungusHP = 0;
    }

    if (myAP < 0){
        myAP = 0;
    }
    console.log('this is arcane attack', fungusHP, myAP);

    render();
}

function entangleAttack() {
    fungusHP -= 9;
    myAP -= 23;
    if (fungusHP < 0){
        fungusHP = 0;
    }

    if (myAP < 0){
        myAP = 0;
    }

    console.log('this is entangle attack', fungusHP, myAP);

    render();
}

function dragonBladeAttack() {
    fungusHP -= 47;
    myAP -= 38;
    if (fungusHP < 0){
        fungusHP = 0;
    }

    if (myAP < 0){
        myAP = 0;
    }
    console.log('this is dragon blade attack', fungusHP, myAP);

    render();
}

function starFireAttack() {
    fungusHP -= 25;
    myAP -= 33;
    if (fungusHP < 0){
        fungusHP = 0;
    }

    if (myAP < 0){
        myAP = 0;
    }
    console.log('this is star fire attack', fungusHP, myAP);

    render();
}

function render() {
    $('.hp-text').text(fungusHP + ' HP');
    $('.ap-text').text(myAP + ' AP');

    $('#hp-meter').val(fungusHP);
    $('#ap-meter').val(myAP);

    if (fungusHP <= 0){
        $('.freaky-fungus.walk').removeClass('walk').addClass('dead');
    }
    if (myAP <= 0){
        $('.freaky-fungus.walk').removeClass('walk').addClass('jump');
        $('.attack-btn').prop('disabled', true);
    }   
}