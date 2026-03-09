let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let money = 10001;
let min = 0;
let hr = 0;
let haveFish = false;


//If you need, add any "helper" functions here
if(min < 60){
	min = min - 60;
	hr = hr + 1;
}

//Make one function for each location
function Hallway() {
    clear();
    print("\nYou are in the hall!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tFishroom" +
    	"\n\tOutside");
    
    function processInput(input){
        if (input.toLowerCase() === "locationb") {
            locationB();
        } else {
            stayHere();
            waitThenCall(locationA);
        }
    }
    waitForInput(processInput);
}

function locationB() {
    clear();
    print("\nYou are in location B!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tlocationA");
    
    function processInput(input){
        if (input.toLowerCase() === "locationa") {
            locationA();
        } else {
            stayHere();
            waitThenCall(locationB);
        }
    }
    waitForInput(processInput);
}

//finally, make sure you customize this to tell it what should happen at the
//very start. For this simple example, any input will bring you
//to locationA
function start(){
    print("Welcome to a game about a goldfish! You are the owner of this " +
"goldfish and it's only friend. He wishs for a another friend because you are " +
"often at work. your goal is to get him a freind. Press any key to start");

    function processInput(input){
            Hallway();
    }
    waitForInput(processInput);
}
