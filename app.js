function random_num(min, max) {
  return (Math.random() * (max - min) + min).toFixed(2);
}
let USS_Assembly = {
  name: "Battlestar Galactica",
  hull: 20,
  firepower: 5,
  accuracy: 0.7,
};
let alien_ship_1 = {
  name: `Moonrakers`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};

let alien_ship_2 = {
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};
let alien_ship_3 = {
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};
let alien_ship_4 = {
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};
let alien_ship_5 = {
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};
let alien_ship_6 = {
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
};
let alien_hull_arr = [];
let USS_Assembly_hull_arr = [];

// FUNCTION FOR ALLIEN ATTACK
function alien_attack(enemy) {
  // if alien ship missed its first shot
  if (alien_ship_1.accuracy <= enemy.accuracy) {
    console.log(
      `ALIEN MISSED!! ${enemy.name} has a FULL hull of ${enemy.hull}, now it is your turn to attack them`
    );
  }
  // if alien ship hits and "COMPLETELY" destroys its enemy
  else {
    enemy.hull = enemy.hull - alien_ship_1.firepower;
    if (enemy.hull <= 0) {
      console.log(`GAME OVER! ${enemy.name} has been destroyed`);
    }
    // if alien ship hits and "PARTIALLY" destroys its enemy
    else {
      USS_Assembly_hull_arr.push(enemy.hull.toFixed(2));

      console.log(
        `${alien_ship_1.name} hit the target but the ${
          enemy.name
        } survived with a remaining hull of ${enemy.hull.toFixed(
          2
        )}, now it is your turn to attack them`
      );
    }
  }
}
// FUNCTION FOR USS ASSEMBLY ATTACK
let game_over = false;
if (game_over === false) {
  function uss_attack(enemy) {
    // if uss assembly missed its first shot
    if (USS_Assembly.accuracy <= enemy.accuracy) {
      console.log(
        `YOU MISSED!! ${enemy.name} has a FULL hull of ${enemy.hull}, now its gonna attack you`
      );
      alien_attack(USS_Assembly);
    }
    // if uss assembly hits and "COMPLETELY" destroys its enemy
    else {
      enemy.hull = USS_Assembly.firepower - enemy.hull;
      if (enemy.hull <= 0) {
        console.log(`GAME OVER! ${enemy.name} has been destroyed`);
        game_over = true;
      }
      // if uss assembly hits and "PARTIALLY" destroys its enemy
      else {
        alien_hull_arr.push(enemy.hull.toFixed(2));

        console.log(
          `You hit the target but the ${
            enemy.name
          } survived with a remaining hull of ${enemy.hull.toFixed(
            2
          )}, now its gonna attack you`
        );
        alien_attack(USS_Assembly);
      }
    }
  }
}
uss_attack(alien_ship_1);

function round_begins() {
  //You attack the first alien ship

  // if uss assembly missed its first shot (Scenario-1)
  //Now, Alien ship will get to attack at the uss assembly (outcome-1-1)
  // if alien ship missed its target  (outcome-1-1a)
  //if alien ship partially hits its target  (outcome-1-1b)
  //Now, uss assembly will get to attack at the Alien ship(outcome-1-1c)
  // if uss assembly missed its second shot (outcome-1-1d)
  //Now, Alien ship will get to attack at the uss assembly(outcome-1-1e)
  // if alien ship missed its target  (outcome-1-1f)
  //////////////////////////////////
  ///////////////////////////////////
  // if uss assembly partially hits its target on the first attempt(outcome-2)
  //////////////////////////////////
  ///////////////////////////////////
  // if uss assembly hits and completely destroyed its target(outcome-3)

  ///////////////////////////////////
  ///////////////////////////////////

  if (USS_Assembly.accuracy <= alien_ship_1.accuracy) {
    console.log(`You missed`);
    console.log(
      `ALIEN has a FULL hull of ${alien_ship_1.hull}, now its gonna attack you`
    );
    //ALIENS TURN TO ATTACK
    //
    if (alien_ship_1.accuracy <= USS_Assembly.accuracy) {
      console.log(`ALIEN MISSED`);
      console.log(`NOW ITS YOUR TURN TO ATTACK`);
    } else {
      USS_Assembly.hull = USS_Assembly.hull - alien_ship_1.firepower;
      USS_Assembly_hull_arr.push(USS_Assembly.hull.toFixed(2));
      console.log(
        `YOU HAVE BEEN HIT, YOUR HULL IS NOW ${USS_Assembly_hull_arr} `
      );
    }
  } else {
    alien_ship_1.hull = USS_Assembly.firepower - alien_ship_1.hull;
    alien_hull_arr.push(alien_ship_1.hull.toFixed(2));
    if (alien_ship_1.hull <= 0) {
      console.log(`THE ATTACK WAS SUCCESSFULL..ALIEN SHIP HAS BEEN DESTROYED`);
    } else {
      console.log(
        `ALIEN SURVIVED with a remaining hull of ${alien_hull_arr},  now its gonna attack you,`
      );
    }
  }
}
