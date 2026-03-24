let gameActive = true; //this variable is required. 
                       //to stop the game, set it to false.

//Declare your other global variables here
let money = 10001;
let min = 0;
let hr = 0;
let haveFish = false;
let fishHungry = false;
let cleanFish = false;

//If you need, add any "helper" functions here
if(min < 60){
	min = min - 60;
	hr = hr + 1;
}

//Make one function for each location
function hallway() {
    clear();
    print("\nYou are in the hall!"); 
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tFishroom" +
    	"\n\tOutside");
    
    function processInput(input){
        if (input.toLowerCase() == "fishroom") {
            fishroom();
        } 
	    else if(input.stoLowerCase() == "outside") {
            outside();
        } 

	 else {
            stayHere();
            waitThenCall(hallway);
        }
    }
    waitForInput(processInput);
}

function fishroom() {
    clear();
    print("\nYou are in the Fishroom");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tHallway");
    
    function processInput(input){
        if (input.toLowerCase() == "hallway") {
            hallway();
        } else {
            stayHere();
            waitThenCall(fishroom);
        }
    }
    waitForInput(processInput);
}
function outside() {
    clear();
    print("\nYou are outside!");
    print("\nWhere do you want to go next? Say one of these choices:" +
        "\n\tHallway" +
    	"\n\tPetSmart" +
    	"\n\tVeryBoringJob");
    
    function processInput(input){
        if (input.toLowerCase() == "hallway") {
            hallway();
        } 
	    else if(input.stoLowerCase() == "petsmart") {
            petsmart();
        } 
	  else if(input.stoLowerCase() == "veryboringjob") {
            veryboringjob();
        } 

	 else {
            stayHere();
            waitThenCall(hallway);
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
            hallway();
    }
    waitForInput(processInput);
}
