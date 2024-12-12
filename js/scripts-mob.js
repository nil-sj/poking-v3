let isGameOn = false; // Indicates whether a game is currently in progress

////////////////////////////////////////////////////////////////////
//  CONSTANTS //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// 

// Datasets for objects, animals, their images, and sound files

const animals = ["bear", "bird", "cat", "chicken", "cow", "dog", "duck", "fish", "fox", "horse", "lion", "monkey", "mouse", "octopus", "pig", "sheep"];
const rings = ["ring1-old-phone.mp3", "ring2-telephone-dial-and-ring.mp3", "ring3-telephone-ring.mp3", "ring4-phone-ringing.mp3", "ring5-classic-telefone.mp3"];
const notAvailable = "not-available.mp3";
const calloffSounds = ["end-call1.mp3", "end-call2.mp3", "end-call3.mp3", "end-call4.mp3"];
const tunes = ["baa-baa-black-sheep.mp3", "happy-birthday-to-you.mp3", "mary-had-a-little-lamb.mp3", "old-macdonald-had-a-farm.mp3", "twinkle-twinkle-little-star.mp3"];


// Datasets for response messages or questions

const playfulMessagesForZero = [
  ["Zero?", "Oh no! Where did the animals go?", "Let's press a number"],
  ["Zero animals?", "Maybe they're all hiding!", "Press a number to find them"],
  ["Zero is like a magic circle -", "round and fun!", "Let's have more fun with more numbers."],
  ["Zero animals here.", "No problem!", "Let's try another number!"],
  ["Zero means nothing,", "Find something!", "Press a number button!"],
  ["No animals here.", "Let's go find some!", "Press a number button!"],
  ["Zero animals,", "Press another key", "to see the animals!"],
];

const randomSurprisesForZero = [
  {
    object: "rainbow",
    message: ["Zero animals,", "but guess what?", "A rainbow just appeared!"]
  },
  {
    object: "star",
    message: ["Zero animals...", "but wait!", "Here comes a dancing star!"]
  },
  {
    object: "balloon",
    message: ["Zero animals,", "but colorful balloons are flying up!"]
  },
  {
    object: "sun",
    message: ["Zero animals...", "but the sun is shining brightly!"]
  },
  {
    object: "cloud",
    message: ["Zero animals,", "but fluffy clouds are floating by!"]
  }
];


const animalMessagesFor1to9 = [
  {
    animal: "bear",
    animalplural: "bears",
    adjective: "big",
    singleaction: "loves to eat honey",
    pluralactions: [
      "love to eat honey",
      "can climb trees",
      "hibernate in the winter"
    ]
  },
  {
    animal: "bird",
    animalplural: "birds",
    adjective: "colorful",
    singleaction: "can sing sweet songs",
    pluralactions: [
      "can sing sweet songs",
      "build nests in trees",
      "fly high in the sky"
    ]
  },
  {
    animal: "cat",
    animalplural: "cats",
    adjective: "curious",
    singleaction: "loves to purr softly",
    pluralactions: [
      "love to purr softly",
      "like to chase mice",
      "can sleep all day"
    ]
  },
  {
    animal: "chicken",
    animalplural: "chickens",
    adjective: "funny",
    singleaction: "likes to peck at seeds",
    pluralactions: [
      "like to peck at seeds",
      "lay eggs",
      "cluck loudly"
    ]
  },
  {
    animal: "cow",
    animalplural: "cows",
    adjective: "gentle",
    singleaction: "gives us milk",
    pluralactions: [
      "give us milk",
      "chew grass slowly",
      "say moo moo"
    ]
  },
  {
    animal: "dog",
    animalplural: "dogs",
    adjective: "friendly",
    singleaction: "wags its tail when it is happy",
    pluralactions: [
      "wag their tails when they are happy",
      "like to bark",
      "can fetch sticks"
    ]
  },
  {
    animal: "duck",
    animalplural: "ducks",
    adjective: "quacky",
    singleaction: "likes to quack loudly",
    pluralactions: [
      "like to quack loudly",
      "waddle to the pond",
      "float on water"
    ]
  },
  {
    animal: "fish",
    animalplural: "fishes",
    adjective: "tiny",
    singleaction: "can swim in the water",
    pluralactions: [
      "can swim in the water",
      "blow bubbles",
      "have shiny scales"
    ]
  },
  {
    animal: "fox",
    animalplural: "foxes",
    adjective: "clever",
    singleaction: "is quick and sneaky",
    pluralactions: [
      "are quick and sneaky",
      "can dig burrows",
      "have bushy tails"
    ]
  },
  {
    animal: "horse",
    animalplural: "horses",
    adjective: "strong",
    singleaction: "runs very fast",
    pluralactions: [
      "can run very fast",
      "say neigh neigh",
      "pull carts or plows"
    ]
  },
  {
    animal: "lion",
    animalplural: "lions",
    adjective: "brave",
    singleaction: "is the king of the jungle",
    pluralactions: [
      "are the kings of the jungle",
      "roar loudly",
      "rest under trees"
    ]
  },
  {
    animal: "monkey",
    animalplural: "monkeys",
    adjective: "playful",
    singleaction: "loves to climb trees",
    pluralactions: [
      "love to climb trees",
      "eat bananas",
      "swing from branches"
    ]
  },
  {
    animal: "mouse",
    animalplural: "mice",
    adjective: "tiny",
    singleaction: "squeaks softly",
    pluralactions: [
      "squeak softly",
      "nibble on cheese",
      "run very fast"
    ]
  },
  {
    animal: "octopus",
    animalplural: "octopuses",
    adjective: "wiggly",
    singleaction: "has eight arms",
    pluralactions: [
      "have eight arms",
      "can squirt ink",
      "hide in the sand"
    ]
  },
  {
    animal: "pig",
    animalplural: "pigs",
    adjective: "muddy",
    singleaction: "says oink oink",
    pluralactions: [
      "say oink oink",
      "like to roll in the mud",
      "can sniff around for food"
    ]
  },
  {
    animal: "sheep",
    animalplural: "sheep",
    adjective: "fluffy",
    singleaction: "says baa baa",
    pluralactions: [
      "say baa baa",
      "give us wool",
      "like to graze on grass"
    ]
  }
];

const quizQuestions = [
  {
    item: "dog",
    numberofitems: 1,
    question: "How many legs does a dog have?",
    answer: 4
  },
  {
    item: "monkey",
    numberofitems: 1,
    question: "How many tails does a monkey have?",
    answer: 1
  },
  {
    item: "rainbow",
    numberofitems: 1,
    question: "How many colors are there in a rainbow?",
    answer: 7
  },
  {
    item: "mouse",
    numberofitems: 1,
    question: "How many trunks does a mouse have?",
    answer: 0
  },
  {
    item: "elephant",
    numberofitems: 1,
    question: "How many trunks does an elephant have?",
    answer: 1
  },
  {
    item: "octopus",
    numberofitems: 1,
    question: "How many tentacles does an octopus have?",
    answer: 8
  },
  {
    item: "fish",
    numberofitems: 1,
    question: "How many legs does a fish have?",
    answer: 0
  },
  {
    item: "horse",
    numberofitems: 1,
    question: "How many wings does a horse have?",
    answer: 0
  },
  {
    item: "duck",
    numberofitems: 1,
    question: "How many legs does a duck have?",
    answer: 2
  },
  {
    item: "star",
    numberofitems: 3,
    question: "How many stars do you see?",
    answer: 3
  },
  {
    item: "cloud",
    numberofitems: 3,
    question: "How many clouds are floating in the sky?",
    answer: 6
  },
  {
    item: "balloon",
    numberofitems: 2,
    question: "How many balloons are flying up?",
    answer: 4
  },
  {
    item: "cat",
    numberofitems: 4,
    question: "How many cats are here?",
    answer: 4
  },
  {
    item: "sheep",
    numberofitems: 6,
    question: "How many sheep do you count?",
    answer: 6
  },
  {
    item: "bird",
    numberofitems: 7,
    question: "How many birds are flying?",
    answer: 7
  },
  {
    item: "cow",
    numberofitems: 2,
    question: "How many cows are grazing?",
    answer: 2
  }
];

const conversationMessages = [
  ["Hello, Hello!", "Who's there?"],
  ["Hello my dear,", "What made you call me today?"],
  ["Hi!", "Glad you called me!", "It's been long since I heard from you."],
  ["Hey!", "Nice to have you called me.", "How has your day been so far?"],
  ["Hello!", "Oh, it's you?", "I was just thinking of you.", "Can you sing a song for me, please?"],
  ["Hi there!", "Guess what?", "I was hoping you'd call!"],
  ["Hello friend,", "What's your favorite color?"],
  ["Hey buddy,", "Do you want to hear a joke?"],
  ["Hiya!", "Did you know you're my favorite caller?"],
  ["Hello!", "I've missed you!", "How's your day going?"]
];

const partingMessages = [
  ["Okay, bye now!", "Call me again soon!"],
  ["Goodbye!", "Take care!", "I'll be waiting for your next call."],
  ["See you later!", "Don't forget to smile!"],
  ["Alright then,", "Talk to you soon!", "Bye-bye!"],
  ["Bye for now!", "Stay awesome!"],
  ["Goodbye, my friend!", "I'll miss you!"],
  ["Catch you later!", "Keep being amazing!"],
  ["Bye-bye!", "Have a fantastic day!"],
  ["Adios!", "Remember to call me again!"],
  ["Alright, bye!", "Don't forget to tell me something fun next time!"]
];

////////////////////////////////////////////////////////////////////
//  GENERATORS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Function to randomly select an element from an array
function getRandomElement(array) {
  const randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
}

// Helper function to convert numbers to words
function convertNumberToWords(num) {
  const words = ["zero", "one", "two", "three", "four", "five", "six", "seven", "eight", "nine"];
  return words[num];
}

// Function to randomly generate sum questions
function generateSumQuestion() {
  // Define the operations
  const operations = [
    { sign: "+", operation: (a, b) => a + b, words: "plus" },
    { sign: "-", operation: (a, b) => a - b, words: "minus" },
    { sign: "×", operation: (a, b) => a * b, words: "times" },
    { sign: "÷", operation: (a, b) => a % b == 0 ? Math.round(a / b) : -1, words: "divided by" }
  ];

  // Randomly select an operation
  const selectedOperation = getRandomElement(operations);

  // Generate random left and right numbers
  let left = Math.floor(Math.random() * 10);
  let right = Math.floor(Math.random() * 10);

  // Ensure valid division (no division by zero)
  if (selectedOperation.sign === "÷" && right === 0) {
    right = Math.floor(Math.random() * 9) + 1; // Avoid zero for the right number
  }

  // Calculate the answer
  const answer = selectedOperation.operation(left, right);

  // Ensure the result is between 0 and 9
  if (answer < 0 || answer > 9) {
    return generateSumQuestion(); // Regenerate if the result is out of bounds
  }

  // Construct the question in words
  const leftWord = convertNumberToWords(left);
  const rightWord = convertNumberToWords(right);
  const question = `${leftWord} ${selectedOperation.words} ${rightWord} makes what?`;

  // Return the generated object
  return {
    left,
    sign: selectedOperation.sign,
    right,
    question,
    answer
  };
}
// Example usage: console.log(generateSumQuestion());


// Functions for generating call and call-off message
const generateWelcome = () => ({
  ring: getRandomElement(rings),
  message: getRandomElement(conversationMessages)
});

const generateGoodbye = () => ({
  sound: getRandomElement(calloffSounds),
  message: getRandomElement(partingMessages)
});

////////////////////////////////////////////////////////////////////
//  RESPONDERS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

let currentAudio = null; // Store reference to the currently playing audio

const stopAllActions = () => {
  // Stop any ongoing audio playback
  if (currentAudio) {
    currentAudio.pause();
    currentAudio.currentTime = 0; // Reset playback position
    currentAudio = null; // Clear the reference
  }

  // Stop any ongoing speech
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel(); // Stop any ongoing speech
  }
};

// Function to play sounds
const playSound = (soundFile) => {
  currentAudio = new Audio(`audio/${soundFile}`);
  currentAudio.play();
};

// Function to play sound and speak messages
const playSoundAndSpeak = (soundFile, messages) => {
  currentAudio = new Audio(`audio/${soundFile}`);

  // Listen for when the audio ends
  currentAudio.addEventListener('ended', () => {
    speakMessages(messages);
  });

  // Handle playback errors
  currentAudio.addEventListener('error', (e) => {
    console.error("Error during playback:", e);
  });

  // Start playback
  currentAudio.play();     
};

// Function to speak messages and then play a sound
const speakMessagesAndPlaySound = (messages, soundFile) => {
  // Check if the browser supports the Web Speech API
  if (!('speechSynthesis' in window)) {
    console.error("Web Speech API is not supported in this browser.");
    return;
  }

  // Function to speak a single message part
  const speakPart = (part) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(part);
      utterance.onend = () => resolve(); // Resolve when speaking ends
      speechSynthesis.speak(utterance);
    });
  };

  // Speak all messages sequentially
  const speakAllMessages = async () => {
    for (const message of messages) {
      await speakPart(message);
    }
  };

  // Play the sound after all messages are spoken
  const playSound = () => {
    currentAudio = new Audio(`audio/${soundFile}`);
    currentAudio.addEventListener('error', (e) => {
      console.error("Error during playback:", e);
    });
    currentAudio.play(); // Start playback
  };

  // Start the sequence
  speakAllMessages().then(playSound);
};

// Functions to read a message array
function speakMessages(messageParts) {
  if (!('speechSynthesis' in window)) {
    console.error("Web Speech API is not supported in this browser.");
    return;
  }

  // Function to speak a single message part
  const speakPart = (part, delay) => {
    return new Promise((resolve) => {
      const utterance = new SpeechSynthesisUtterance(part);
      utterance.onend = () => setTimeout(resolve, delay);
      speechSynthesis.speak(utterance);
    });
  };

  // Speak each message part sequentially with pauses
  const speakSequentially = async () => {
    for (const part of messageParts) {
      await speakPart(part, 500); // 500ms pause between parts
    }
  };

  speakSequentially();
}

// Screen and buttons functionality
const screenContent = document.getElementById("screen-content");

function displayContent(width, count, item) {
  let htmlCode = `<div class='content-wrapper'>`;
  let counter = 0;
  do {
    htmlCode += `<div class='content-box ${width}'>`;
    htmlCode += `<img src='../img/${item}.png' alt='${item}' class='content-item'>`;
    htmlCode += `</div>`;
    counter++;
  } while (counter < count)
  htmlCode += `</div>`;  
  screenContent.innerHTML = htmlCode;
}

function displayForNumbers(count, item){
  let width;
  if (count <= 1) {
    width = "hundred";
  } else if (count <= 4) {
    width = "fifty";
  } else {
    width = "thirtythree"
  }
  displayContent(width, count, item);
}

// Function to display messages on the screen
const displayMessage = (message) => {
  screenContent.innerHTML = "";
  const paragraph = document.createElement("p");
  paragraph.textContent = message;
  screenContent.appendChild(paragraph);
};

// Function to display sum questions
function displaySumQuestion(left, sign, right) {
  screenContent.innerHTML = `<div class='content-wrapper'>
  <div class='content-box thirtythree sumq'>${left}</div>
  <div class='content-box thirtythree sumq'>${sign}</div>
  <div class='content-box thirtythree sumq'>${right}</div>
  <div class='content-box thirtythree sumq'>=</div>
  <div class='content-box thirtythree sumq'>?</div>
  </div>`;
}


////////////////////////////////////////////////////////////////////
//  HANDLERS ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function quizHandler() {
  isGameOn = true;

  const quizQuestion = getRandomElement(quizQuestions);
  displayForNumbers(quizQuestion.numberofitems, quizQuestion.item);  
  window.currentGameAnswer = quizQuestion.answer;
  speakMessages([quizQuestion.question]);
}

function sumsHandler() {
  isGameOn = true;

  const sumQuestion = generateSumQuestion();
  displaySumQuestion(sumQuestion.left, sumQuestion.sign, sumQuestion.right);
  window.currentGameAnswer = sumQuestion.answer;
  speakMessages([sumQuestion.question]);
}

function musicHandler() {
  displayContent("hundred", 1, "tune")
  playSound(getRandomElement(tunes));
}

function callHandler() {
  displayContent("hundred", 1, "call")
  const welcome = generateWelcome();
  if (Math.random() > 0.1) {
    playSoundAndSpeak(welcome.ring, welcome.message);
  } else {
    playSound(notAvailable);
  }
}

function callEndHandler() {
  displayContent("hundred", 1, "callend")
  const goodbye = generateGoodbye();
  speakMessagesAndPlaySound(goodbye.message, goodbye.sound);
}

function zeroHandler() {
  if (Math.random() > 0.4) {
    displayForNumbers(0, "zero");
    speakMessages(getRandomElement(playfulMessagesForZero));
  } else {
    const surprise = getRandomElement(randomSurprisesForZero);
    displayContent("hundred", 1, surprise.object);
    speakMessages(surprise.message);
  }  
}

function numberHandler(number) {
  if (isGameOn) {
    // Game mode: Check the answer
    if (number === window.currentGameAnswer) {
      displayContent("hundred", 1, "right");
      speakMessages(["Correct!", `The answer is ${number}.`]);
    } else {
      displayContent("hundred", 1, "wrong");
      speakMessages(["Oops!", "Try again next time!"]);
    }
    isGameOn = false; // End the game
    delete window.currentGameAnswer; // Clear the answer
  } else if (number === 0){
    zeroHandler();
  } else {
    // Regular mode: Handle number as usual
    let numberData = getRandomElement(animalMessagesFor1to9);
    let messages = [];
    if (number === 1) {
      messages[0] = `${convertNumberToWords(number)} ${numberData.adjective} ${numberData.animal}`;
      messages[1] = `The ${numberData.animal} ${numberData.singleaction}`;
    } else {
      messages[0] = `${convertNumberToWords(number)} ${numberData.adjective} ${numberData.animalplural}`;
      messages[1] = `${numberData.animalplural} ${getRandomElement(numberData.pluralactions)}`;
    }
    displayForNumbers(number, numberData.animal);
    speakMessages(messages);
  }
}

function cancelGame() {
  if (isGameOn) {
    isGameOn = false;
    delete window.currentGameAnswer;
  }
}


////////////////////////////////////////////////////////////////////
//  EVENT LISTENERS ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Note on starting quiz and sums....
// May be define a isGameOn boolean variable in global scope and initialize at false.
// when game starts (quiz or sums) set the variable value to true.
// and then depending on the boolean value handle the clicks differently
// like when it's false call the handlers as usual for number keys.
// and when it's true, and number keys are pressed call a function to check answer and give feedback.
// (if any non number key is pressed and if game mode is on, game mode is set off and game is cancelled)
// each of the game buttons (quiz or sums) presents one question and feedback and turns game mode off after that
// so user has to press the game button again to be served next game.

// Event listener for buttons
displayMessage("Double Click Here To Enter Full Screen and Play");

document.addEventListener("dblclick", function(event) {

var element = document.querySelector(".toy-mobile");

element.requestFullscreen()
  .then(() => {
      displayMessage("Great! Now, Press Any Button and Enjoy...");
      document.querySelectorAll("button").forEach((button) => {
        button.addEventListener("click", () => {
          const action = button.getAttribute("data-action");

          if (isGameOn && (action === "music" || action === "call" || action === "call-off" || action === "quiz" || action === "sums")) {
            cancelGame();
          }
      
          if (action === "quiz") {
            stopAllActions();
            quizHandler();
          } else if (action === "sums") {
            stopAllActions();
            sumsHandler();
          } else if (action === "music") {
            stopAllActions();
            musicHandler();
          } else if (action === "call") {
            stopAllActions();
            callHandler();
          } else if (action === "call-off") {
            stopAllActions();
            callEndHandler();
          } else {
            stopAllActions();
            numberHandler(+action);
          }
        });
      });
    }
  )
  .catch(function(error) {
  	// element could not enter fullscreen mode
  	// error message
  	console.log(error.message);
    alert("error");
  });

}, false);