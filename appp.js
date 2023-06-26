let hull = document.querySelector(".hull-tracker");
hull.textContent = "";

//FUNCTION THAT GENERATES RANDOM NUMBER
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
  src: "https://media3.giphy.com/media/26BoCVdjSJOWT0Fpu/giphy.gif?cid=6c09b952f678vqxlg0ewv7ocijaatyc3i1evhlpugrogambb&ep=v1_internal_gif_by_id&rid=giphy.gif&ct=g",
};

let alien_ship_2 = {
  name: `The Daleks`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
  src: "https://bestanimations.com/media/ufos/126802993ufo-flying-saucer-animated-gif-image-5.gif",
};

let alien_ship_3 = {
  name: `Diamondhead`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
  src: "https://www.fg-a.com/aliens/flying-saucer-animated-4.gif",
};
let alien_ship_4 = {
  name: `Ghost-freak`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
  src: "https://media1.giphy.com/media/r88w2d7tHqazFwNEGN/giphy.gif",
};
let alien_ship_5 = {
  name: `Lunara`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
  src: "https://www.fg-a.com/spacecraft/2018-space-ship-spin.gif",
};
let alien_ship_6 = {
  name: `Phoenix`,
  hull: random_num(3, 6),
  firepower: random_num(2, 4),
  accuracy: random_num(0.6, 0.8),
  src: "https://www.fg-a.com/spacecraft/long-range-space-craft.gif",
};

let img_arr = [
  alien_ship_2.src,
  alien_ship_3.src,
  alien_ship_4.src,
  alien_ship_5.src,
  alien_ship_6.src,
];

let img = document.querySelector(".change-img");
let img_src = img.getAttribute("src");
let counter = 0;

// FUNCTION TO SWITCH IMAGE
function switch_img() {
  img.setAttribute("src", img_arr[counter]);
  counter++;
  if (counter > img_arr.length) {
    counter = 4;
  }
}

let alien_name_arr = [
  alien_ship_2.name,
  alien_ship_3.name,
  alien_ship_4.name,
  alien_ship_5.name,
  alien_ship_6.name,
];
//result-display
let display_result = document.querySelector(".results-div");
let hide_btn_display = document.querySelector(".alien-btns");
let hide_alien_sec = document.querySelector(".player-2-sec-visible");
let show_game_over = document.querySelector(".game-over");
let alien_names = document.querySelector(".alien-names");
alien_names.innerHTML = alien_ship_1.name;
let alien_hull_bar = document.querySelector(".hull-bar");
let alien_name_index = 0;

/////////////////////////////////////////////////////////////////functions to attack
let game = true;

function uss_attack(alien_ship_1) {
  while (game === true) {
    console.log(alien_ship_1);
    if (USS_Assembly.accuracy >= alien_ship_1.accuracy) {
      alien_ship_1.hull = USS_Assembly.firepower - alien_ship_1.hull;
      if (alien_ship_1.hull <= 0) {
        display_result.innerHTML = `${alien_ship_1.name} has been destroyed. Click "NEXT ALIEN" when you are ready to face the next opponent`;
        game = false;
        break;
      } else {
        display_result.innerHTML = `${
          alien_ship_1.name
        } survived with a hull of ${alien_ship_1.hull.toFixed(
          2
        )}. Now its their turn to attack you.`;
        game = false;
        break;
      }
    } else {
      display_result.innerHTML = `You missed the target. Now its ${alien_ship_1.name}'s turn.`;
      game = false;
      break;
    }
  }
}

// function uss_attack() {
//   if (USS_Assembly.accuracy > alien_ship_1.accuracy) {
//     alien_ship_1.hull = USS_Assembly.firepower - alien_ship_1.hull;
//     if (alien_ship_1.hull <= 0) {
//       alien_names.innerHTML = "";
//       alien_hull.innerHTML = `${alien_ship_1.name} has been destroyed. Click "NEXT ALIEN" when you are ready to face the next opponent`;
//       console.log(
//         `${alien_ship_1.name} has been destroyed. Click "NEXT ALIEN" when you are ready to face the next opponent`
//       );
//     } else {
//       alien_names.innerHTML = "";
//       alien_hull.innerHTML = `${alien_ship_1.name} survived with a hull of ${alien_ship_1.hull}. Now its their turn to attack you.`;
//     }
//   } else {
//     alien_names.innerHTML = "";
//     alien_hull.innerHTML = `You missed the target. Now its alien's turn.`;
//   }

//function for switching names when switch button is clicked
function switch_names() {
  alien_names.innerHTML = alien_name_arr[alien_name_index];
  if (alien_names.textContent === "Moonrakers") {
    uss_attack(alien_ship_1);
  }
  alien_name_index++;
  if (alien_name_index > alien_name_arr.length) {
    hide_btn_display.classList.add("hide-btn-display");
    hide_alien_sec.classList.add("hidden");
    show_game_over.classList.remove("hidden");
  }
}

//function for to display GAME OVER when RETREAT button is clicked
function retreat_btn() {
  let main_section = document.querySelector(".display-game-over");
  let hide_main_sec = document.querySelector(".game-over-completely");
  let result_div = document.querySelector(".results-div");
  main_section.classList.add("hidden");
  result_div.classList.add("hidden");
  hide_main_sec.classList.remove("hidden");
}

let uss_hull = document.querySelector(".uss-hull-tracker");
uss_hull.innerHTML = USS_Assembly.hull;
let alien_hull = document.querySelector(".alien-hull-tracker");
alien_hull.innerHTML = alien_ship_1.hull;

let alien_hull_arr = [
  alien_ship_2.hull,
  alien_ship_3.hull,
  alien_ship_4.hull,
  alien_ship_5.hull,
  alien_ship_6.hull,
];
let alien_hull_index = 0;

//function for switching alien names
function switch_alien_hull() {
  alien_hull.innerHTML = alien_hull_arr[alien_hull_index];
  alien_hull_index++;
}

// FIRST ATTACK
let arr__hull__alien = [];
let arr__hull__uss = [];

function alien_1_attack() {
  if (alien_ship_1.accuracy > USS_Assembly.accuracy) {
    USS_Assembly.hull = USS_Assembly.hull - alien_ship_1.firepower;
    if (USS_Assembly.hull < 0) {
      uss_hull.innerHTML = " has been destroyed";
    } else {
      arr__hull__uss.push(USS_Assembly.hull);
      uss_hull.innerHTML = `hull has been decreased to ${arr__hull__uss}  `;
    }
  } else {
    uss_hull.innerHTML = `The alien missed. Now it is your turn to attack them`;
  }
}
