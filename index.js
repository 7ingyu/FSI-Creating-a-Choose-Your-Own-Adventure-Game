let left = 'You come across a stray cat. It scampers off down a small hole just large enough for you to crawl through. Do you follow it or continue on your path?';
let follow = 'You follow the cat to a colony of cats, nestled in a fort of warm blankets and subsisting off of inexplicably warm soup. They are content with you staying, but you wonder if you should alert the world to this magical safe haven.';
let stay = 'You live happily amongst the cats for the rest of your days.';
let spread = 'After leaving the cat colony, you are never able to find it again; without proof, no one believes your story, which passes into legend nonetheless.';
let continueOn = 'You come across a chamber that reaches upward to a shining light above. There is a long, winding staircase, and a much quicker, but rickety-looking ladder that leads up toward the light. Which do you take?';
let ladder = 'After ascending a few feet up the ladder, one of its rungs snaps, and you comedically fall through each of the rungs below. Sheepish, you return home.';
let staircase = 'After ascending the staircase, you discover a shiny blue stone, which you take home and cherish forever.';
let right = 'You come across a snoring dragon. On the other side of him, you see a shiny chest of treasure. Another path would lead you away from the dragon altogether. Which do you take?';
let past = 'The dragon wakes up and sits upright. You only have a moment to respond, to stay or run:';
let stay2 = 'You and the dragon have an uplifting conversation about local politics and become lifelong friends.';
let run = 'Quickly, you run back to the cave\'s entrance. Sheepish, you return home.';
let away = 'After walking a while longer, you come across a shiny blue flower. It is so beautiful that you decide you must either draw it or pick it. Which do you do?';
let draw = 'You draw the flower, capturing only a fraction of its beauty with your quill. You bring the drawing home, somewhat disappointed, but over time, discover joy in sharing it with your friends and family, recounting the story of your days as a sorcerer with the aid of the sketch.';
let pick = 'You pick the flower and bring it home, and all marvel at its brilliance. However, over time it fades and eventually crumbles to dust.';

let answer  = window.prompt('Do you head left or right?');

if (answer === 'left') {
  answer = window.prompt(left)
  if (answer === 'follow') {
    answer = window.prompt(follow);
    if (answer === 'stay') {
      window.alert(stay);
    } else {
      window.alert(spread);
    }
  } else if (answer === 'continue') {
    answer = window.prompt(continueOn);
    if (answer === 'ladder') {
      window.alert(ladder);
    } else if (answer === 'staircase') {
      window.alert(staircase);
    }
  }
} else if (answer === 'right') {
  answer = window.prompt(right)
  if (answer === 'past') {
    answer = window.prompt(past);
      if (answer === 'stay') {
        window.alert(stay2)
      } else {
        window.alert(run)
      }
  } else if (answer === 'away') {
    answer = window.prompt(away)
    if (answer === 'draw') {
      window.alert(draw)
    } else if (answer === 'pick') {
      window.alert(pick)
    }
  }
}
