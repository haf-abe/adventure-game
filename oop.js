class Room {
    constructor(name, description) {
        this._name = name;
        this._description = description;
        this._linkedRooms ={};
    }

    get name() {
        return this._name
    }

    get description() {
        return this._description
    }

    set name(value) {
        if (value.length<4)
        console.error("name too short");
        return;

        this._name = value
    }
// link object methods with two parameters (direction and roomToLink)
describe() {
    return "Welcome to the " + this._name + " as you can see this " + this._name + " is " + this._description;
 }

    linkRoom(direction, roomToLink) {
    this._linkedRooms[direction] = roomToLink;
    }

    move(direction){
        if (direction in this._linkedRooms) {
          return this._linkedRooms[direction];
        } else{
          alert(" you can't go to the room this way");
          return this;
        }
    
      }
};


// eight instances of the the the Room class.

const Kitchen = new Room("Kitchen", "quite spacious, clean and it has all the necessary thigs a person would need in oreder to make a delicious food.")

const livingRoom = new Room("Living room", " also spacious and clean. We normally play games and have fun in this room during the weekends but it was closed for 4 months as it was being refurbished.")

const bedroom1 = new Room("Bedroom 1", " the master bedroom. it quite big, clean and has a great view. the garden as well as the bxm national park are in front of this room ")

const bedroom2 = new Room("Bedroom 2", "This is the biggest room we have in the house. it has a good view of the rever don where we cook and eat as a family")

const entrance = new Room("Entrance", "the entrance of the house. there are two enctrances. this is the main one. the back entrance is accross the garden.")

const garden = new Room("garden", "welcome to the first room of our spacious hous. where we cook and eat as a family")

const Shower= new Room("Shower", "welcome to the first room of our spacious hous. where we cook and eat as a family")

const balcony = new Room("Balcony", "welcome to the first room of our spacious hous. where we cook and eat as a family")

const guestroom =new Room("where we accommodate our guests and relatives. It is smaller that the other rooms but it is cosy and has a nice view. you can see don river and rmx park from here.")




// room linked to each other using four directions.
entrance.linkRoom("north", Kitchen);
entrance.linkRoom("east", bedroom2);
entrance.linkRoom("west", bedroom1);
bedroom2.linkRoom("north", livingRoom);
bedroom2.linkRoom("west", entrance);
bedroom1.linkRoom("east", entrance);
bedroom1.linkRoom("north", Kitchen);
bedroom1.linkRoom("west", balcony);
balcony.linkRoom("east", bedroom1);
Kitchen.linkRoom("east", livingRoom);
livingRoom.linkRoom("west", Kitchen);
Kitchen.linkRoom("west", garden);
garden.linkRoom("west", Kitchen)
garden.linkRoom("north-east", guestroom);
guestroom.linkRoom("south-east", livingRoom);
Kitchen.linkRoom("south", entrance);


//  the following is commmented out to see what would happen 
// if indtead of writing a function, I were to put the doc.getelementbyid under each instance.

function displayRoomInfo(room) {
    const textcontent = room.describe();
    document.getElementById("textArea").innerHTML = textcontent;
    document.getElementById("userInput").focus();
}


    //a function called startGame is created and this sets up the start point and calls the display function.
function startGame(){
    // set and display this room at the start page.
    currentRoom = entrance;
    displayRoomInfo(currentRoom);

  
    // event handler is added into the startGame() function for enter keypress that calls
    //  the move method to move 
    // between Objects and call the display function to change what is displayed on screen.

    document.addEventListener("keydown", function (event){
      if(event.key === "Enter") {
        const command  = document.getElementById("userInput").value.toLowerCase();
        const directions =["north", "south", "east", "west", "north-east", "south-east"]
        if(directions.includes(command)){
          currentRoom = currentRoom.move(command);
          displayRoomInfo(currentRoom);
         
        } else {
          document.getElementById("userInput").value = "";
          alert("that is not a valid command") 
        }
      }
    })


   
}

console.log(Kitchen._linkedRooms);


startGame()

