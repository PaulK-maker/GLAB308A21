
//Part 1: Humble Beginnings
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
    
      companion:  {
            name: "Frank",
            type: "Flea",
            belongings:["small hat","sunglasses"]
        }
    },
        roll(mod = 0) {

            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
            }
        
     };   

    
     ///Part 2: Class Fantasy
     class Character {
        constructor (name) {
          this.name = name;
          this.health = 100;
          this.inventory = [];
        }

        roll(mod = 0) {
            const result = Math.floor(Math.random() * 20) + 1 + mod;
            console.log(`${this.name} rolled a ${result}.`);
          }
      }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
      

//Part 3: Class Features

class Adventurer extends Character {
    constructor (name, role,magic, stealth) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.magic=magic;
      this.stealth=stealth;
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  //companion Class with properties and methods specific to the companions.

  class companion extends Character {
    constructor (name, type,ability) {
      super(name);
      // Adventurers have specialized roles.
      this.name = name;
      this.loyalty=loyalty;
      this.stealth=stealth;
      this.extraPower=extraPower
      // Every adventurer starts with a bed and 50 gold coins.
      this.inventory.push("bedroll", "50 gold coins");
    }

    help(adventurer){ // help method
        console.log(`${this.name}) is helping ${adventurer.name}`);
        adventurer.roll(Math.floor(this.loyalty / 10));
    }

protects(){ // protet method
    console.log(`${this.name}makes ${this.type} secure all time`);

};
  }

  // Finally, change the declaration of Robin and the companions to use the new Adventurer and Companion classes.
  const robin = new adventurer ("Robin","Explorer");

    robin.health= 10;
    robin.inventory= ["sword", "potion", "artifact"];
    const leo=new companion("Leo","Cat",10);

    const Frank = new companion("Frank","Flea","8");
Frank.inventory=["small hat", "sunglasses"];

robin.companion=leo;
leo.companion=Frank

// Part 4: Class Uniforms -Using static properties and methods with static

class Character {
    static MAX_HEALTH=100;
        
      constructor(name) {
      this.name = name;
      this.health=Character.MAX_HEALTH;
      this.inventory = [];
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`);
      }
  }

const robin = new Character("Robin");
robin.inventory = ["sword", "potion", "artifact"];
robin.companion = new Character("Leo");
robin.companion.type = "Cat";
robin.companion.companion = new Character("Frank");
robin.companion.companion.type = "Flea";
robin.companion.companion.inventory = ["small hat", "sunglasses"];
  

//adventure class with static
       

class Adventurer extends Character {
    static ROLES=["Fighter","Healer","Wizard"]

    constructor (name, role,magic, stealth) {
      super(name);
      // Adventurers have specialized roles.
      this.role = role;
      this.magic=magic;
      this.stealth=stealth;
      // Every adventurer starts with a bed and 50 gold coins.
switch(role){
    case "Fighter":
    case "Healer":
    case "Wizard":
    this.role=role;
    break;
    throw new Error(`invalid role,must be either)
    ${Adventurer.ROLES.join()}`);
    
}
      this.inventory.push("bedroll", "50 gold coins");
    }
    
    
    // Adventurers have the ability to scout ahead of them.
    scout () {
      console.log(`${this.name} is scouting ahead...`);
      super.roll();
    }
  }

  //Part 5: Gather your Party
//Factories are classes that generate objects according to the factory’s instance properties.

class AdventurerFactory {  
    constructor (role) {
      this.role = role;
      this.adventurers = [];
    }
    generate (name) {
      const newAdventurer = new Adventurer(name, this.role);
      this.adventurers.push(newAdventurer);
    }
    findByIndex (index) {
      return this.adventurers[index];
    }
    findByName (name) {
      return this.adventurers.find((a) => a.name === name);
    }
  }
  
//   const healers = new AdventurerFactory("Healer");
  const robin = healers.generate("Robin");





  //Part 6: Developing Skills

  class Adventurer extends Character{

   duel(opponent) {
console.log(`Duel opponent${this.name} and ${opponent.name}`);

while(this.health>50&& opponent.health>50){

    const  roll1=this.roll();
    const roll2= opponent.roll();

    const loser = roll1< roll2? this: opponent;
    loser.health-=1;

    console.log(`${this.name} rolled ${roll1 } (HP: ${this.health})
         vs
        ${opponent.name} rolled ${roll2 } (HP: ${opponent.health}`)
}
    }
  }

const winner =this.health>50? this :opponent;
console.log(`${winner.name} wins the duel`);

return winner;
