
//Named function to call back
function action() {
    return 'Twende'
}


function receivesAFunction(parameter1) {
    action();
    parameter1();

}



function returnsANamedFunction() {
    return action;
}




const returnsAnAnonymousFunction = () => function() {
    return "Anonymousfunction"
}



