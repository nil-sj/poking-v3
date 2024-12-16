let isGameOn = false; // Indicates whether a game is currently in progress

////////////////////////////////////////////////////////////////////
//  CONSTANTS //////////////////////////////////////////////////////
//////////////////////////////////////////////////////////////////// 

// Datasets for objects, animals, their images, and sound files

const animals = ["bear", "bird", "cat", "chicken", "cow", "dog", "duck", "fish", "fox", "horse", "lion", "monkey", "mouse", "octopus", "pig", "sheep", "owl", "snake", "frog", "alligator", "bat", "bison", "butterfly", "camel", "crab", "giraffe", "goat", "hippo", "kangaroo", "koala", "panda", "penguin", "porcupine", "raccoon", "rhino", "salamander", "seahorse", "shark", "skunk"];
const rings = ["ring1-old-phone.mp3", "ring2-telephone-dial-and-ring.mp3", "ring3-telephone-ring.mp3", "ring4-phone-ringing.mp3", "ring5-classic-telefone.mp3"];
const notAvailable = "not-available.mp3";
const calloffSounds = ["end-call1.mp3", "end-call2.mp3", "end-call3.mp3", "end-call4.mp3"];
const tunes = ["baa-baa-black-sheep.mp3", "happy-birthday-to-you.mp3", "mary-had-a-little-lamb.mp3", "old-macdonald-had-a-farm.mp3", "twinkle-twinkle-little-star.mp3"];
const animalSounds = [
  { bird: "chirp" },
  { cat: "meow" },
  { chicken: "cluck" },
  { cow: "moo" },
  { dog: "woof" },
  { duck: "quack" },
  { horse: "neigh" },
  { lion: "roar" },
  { monkey: "screech" },
  { pig: "oink" },
  { sheep: "baa" },
  { owl: "hoot" },
  { snake: "hiss" },
  { frog: "ribbit" }
];

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
  },
  {
    animal: "owl",
    animalplural: "owls",
    adjective: "wise",
    singleaction: "says hoo hoo softly",
    pluralactions: [
      "say hoo hoo softly",
      "stay awake at night",
      "turn their heads all around"
    ]
  },
  {
    animal: "frog",
    animalplural: "frogs",
    adjective: "bouncy",
    singleaction: "says ribbit ribbit",
    pluralactions: [
      "say ribbit ribbit",
      "jump high",
      "sit on lily pads"
    ]
  },
  {
    animal: "snake",
    animalplural: "snakes",
    adjective: "slithery",
    singleaction: "hisses softly",
    pluralactions: [
      "hiss softly",
      "slither on the ground",
      "hide under rocks"
    ]
  },
  {
    animal: "alligator",
    animalplural: "alligators",
    adjective: "scaly",
    singleaction: "snaps its jaws",
    pluralactions: [
      "snap their jaws",
      "swim in rivers",
      "bask in the sun"
    ]
  },
  {
    animal: "bat",
    animalplural: "bats",
    adjective: "nocturnal",
    singleaction: "hangs upside down",
    pluralactions: [
      "hang upside down",
      "fly at night",
      "use echolocation"
    ]
  },
  {
    animal: "bison",
    animalplural: "bison",
    adjective: "majestic",
    singleaction: "grazes on grass",
    pluralactions: [
      "graze on grass",
      "roam the plains",
      "charge when threatened"
    ]
  },
  {
    animal: "butterfly",
    animalplural: "butterflies",
    adjective: "colorful",
    singleaction: "flutters its wings",
    pluralactions: [
      "flutter their wings",
      "sip nectar from flowers",
      "brighten the garden"
    ]
  },
  {
    animal: "camel",
    animalplural: "camels",
    adjective: "humpy",
    singleaction: "stores water in its hump",
    pluralactions: [
      "store water in their humps",
      "walk across deserts",
      "carry heavy loads"
    ]
  },
  {
    animal: "crab",
    animalplural: "crabs",
    adjective: "claw-some",
    singleaction: "walks sideways",
    pluralactions: [
      "walk sideways",
      "pinch with their claws",
      "hide in sandy burrows"
    ]
  },
  {
    animal: "giraffe",
    animalplural: "giraffes",
    adjective: "tall",
    singleaction: "reaches high leaves",
    pluralactions: [
      "reach high leaves",
      "have long necks",
      "run gracefully"
    ]
  },
  {
    animal: "goat",
    animalplural: "goats",
    adjective: "horned",
    singleaction: "chews on leaves",
    pluralactions: [
      "chew on leaves",
      "climb steep hills",
      "say baa baa"
    ]
  },
  {
    animal: "hippo",
    animalplural: "hippos",
    adjective: "chunky",
    singleaction: "sits in the water",
    pluralactions: [
      "sit in the water",
      "open their mouths wide",
      "wallow in mud"
    ]
  },
  {
    animal: "kangaroo",
    animalplural: "kangaroos",
    adjective: "bouncy",
    singleaction: "jumps on its strong legs",
    pluralactions: [
      "jump on their strong legs",
      "carry babies in their pouches",
      "hop across fields"
    ]
  },
  {
    animal: "koala",
    animalplural: "koalas",
    adjective: "cuddly",
    singleaction: "eats eucalyptus leaves",
    pluralactions: [
      "eat eucalyptus leaves",
      "sleep in trees",
      "cling to branches"
    ]
  },
  {
    animal: "panda",
    animalplural: "pandas",
    adjective: "adorable",
    singleaction: "munches on bamboo",
    pluralactions: [
      "munch on bamboo",
      "roll around playfully",
      "rest in the shade"
    ]
  },
  {
    animal: "penguin",
    animalplural: "penguins",
    adjective: "waddly",
    singleaction: "waddles on ice",
    pluralactions: [
      "waddle on ice",
      "slide on their bellies",
      "huddle to stay warm"
    ]
  },
  {
    animal: "porcupine",
    animalplural: "porcupines",
    adjective: "spiky",
    singleaction: "raises its quills",
    pluralactions: [
      "raise their quills",
      "roll into balls",
      "eat bark and leaves"
    ]
  },
  {
    animal: "raccoon",
    animalplural: "raccoons",
    adjective: "sneaky",
    singleaction: "looks for food in bins",
    pluralactions: [
      "look for food in bins",
      "wash their food",
      "hide in the trees"
    ]
  },
  {
    animal: "rhino",
    animalplural: "rhinos",
    adjective: "strong",
    singleaction: "has a big horn",
    pluralactions: [
      "have big horns",
      "charge when angry",
      "graze on grass"
    ]
  },
  {
    animal: "salamander",
    animalplural: "salamanders",
    adjective: "slimy",
    singleaction: "lives in moist places",
    pluralactions: [
      "live in moist places",
      "crawl slowly",
      "regrow their tails"
    ]
  },
  {
    animal: "seahorse",
    animalplural: "seahorses",
    adjective: "tiny",
    singleaction: "swims upright",
    pluralactions: [
      "swim upright",
      "cling to coral",
      "have curly tails"
    ]
  },
  {
    animal: "shark",
    animalplural: "sharks",
    adjective: "sharp-toothed",
    singleaction: "has lots of sharp teeth",
    pluralactions: [
      "have lots of sharp teeth",
      "swim very fast",
      "hunt in the deep sea"
    ]
  },
  {
    animal: "skunk",
    animalplural: "skunks",
    adjective: "stinky",
    singleaction: "sprays a smelly scent",
    pluralactions: [
      "spray a smelly scent",
      "waddle through the woods",
      "dig for insects"
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
    item: "sun",
    numberofitems: 1,
    question: "How many suns in our solar system?",
    answer: 1
  },
  {
    item: "snake",
    numberofitems: 1,
    question: "How many legs does a snake have?",
    answer: 0
  },
  {
    item: "owl",
    numberofitems: 5,
    question: "How many owls do you see?",
    answer: 5
  },
  {
    item: "frog",
    numberofitems: 2,
    question: "How many frogs do you see?",
    answer: 2
  },
  {
    item: "fox",
    numberofitems: 4,
    question: "How many foxes do you see?",
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
    item: "bird",
    numberofitems: 1,
    question: "How many wings does a bird have?",
    answer: 2
  },
  {
    item: "elephant",
    numberofitems: 1,
    question: "How many eyes does the elephant have?",
    answer: 2
  },
  {
    item: "pig",
    numberofitems: 1,
    question: "How many ears does the pig have?",
    answer: 2
  },
  {
    item: "bear",
    numberofitems: 1,
    question: "How many noses does the bear have?",
    answer: 1
  },
  {
    item: "sheep",
    numberofitems: 1,
    question: "How many bags full of wool does the sheep have in the poem baba black sheep?",
    answer: 3
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
    item: "lion",
    numberofitems: 1,
    question: "How many legs does a lion have?",
    answer: 4
  },
  {
    item: "bird",
    numberofitems: 1,
    question: "How many legs does a bird have?",
    answer: 2
  },
  {
    item: "cow",
    numberofitems: 2,
    question: "How many cows are grazing?",
    answer: 2
  },
  {
    item: "pig",
    numberofitems: 3,
    question: "How many pigs are on the screen?",
    answer: 3
  },
  {
    item: "bat",
    numberofitems: 1,
    question: "How many wings does a bat have?",
    answer: 2
  },
  {
    item: "bison",
    numberofitems: 1,
    question: "How many horns does a bison have?",
    answer: 2
  },
  {
    item: "butterfly",
    numberofitems: 1,
    question: "How many wings does a butterfly have?",
    answer: 4
  },
  {
    item: "camel",
    numberofitems: 1,
    question: "How many humps does a Bactrian camel have? the one you see on screen.",
    answer: 2
  },
  {
    item: "crab",
    numberofitems: 1,
    question: "How many claws does a crab have?",
    answer: 2
  },
  {
    item: "giraffe",
    numberofitems: 1,
    question: "How many legs does a giraffe have?",
    answer: 4
  },
  {
    item: "kangaroo",
    numberofitems: 1,
    question: "How many legs does a kangaroo use to hop?",
    answer: 2
  },
  {
    item: "penguin",
    numberofitems: 1,
    question: "How many wings does a penguin have?",
    answer: 2
  },
  {
    item: "rhino",
    numberofitems: 1,
    question: "How many horns does a rhinoceros typically have?",
    answer: 1
  },
  {
    item: "seahorse",
    numberofitems: 1,
    question: "How many fins does a seahorse have?",
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
  ["Hello!", "I've missed you!", "How's your day going?"],
  ["Hi there!", "What's the most exciting thing you've done today?"],
  ["Hey!", "Guess who was just thinking about you?", "Yes, your guess is right, it's me."],
  ["Hello, my friend!", "Do you want to play a guessing game?", "Ok, guess my name."],
  ["Hi!", "Did you learn something new today?", "Tell me about it."],
  ["Hello!", "Can I tell you a fun fact?", "You'll love it!", "Octopuses have three hearts."],
  ["Hey!", "Want to know a fun fact", "Ok!", "Butterflies taste with their feet."],
  ["Hi!", "Do you know this fun fact?", "Sloths can hold their breath longer than dolphins."],
  ["Hey buddy!", "If you could be an animal, which one would you be?"],
  ["Hi there!", "What's your favorite thing to do on a sunny day?"],
  ["Hello, Hello!", "What would you do if you found a treasure chest?"],
  ["Hey!", "What's your favorite food?"],
  ["Hiya!", "Want to hear something cool?", "I just thought of you!"]
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
  ["Alright, bye!", "Don't forget to tell me something fun next time!"],
  ["Goodbye!", "Have a great day!", "You're the best!"],
  ["Bye for now!", "Stay curious and keep smiling!"],
  ["See you later!", "And remember, you're awesome!"],
  ["Alright then,", "Take care and call me soon again!"],
  ["Goodbye!", "Think of something fun to share next time!"],
  ["Bye-bye!", "Don't forget to laugh today!"],
  ["Catch you later!", "And remember, you're one of a kind!"],
  ["Adios, my friend!", "Call me anytime!"],
  ["Goodbye for now!", "Stay happy and adventurous!"],
  ["Alright, bye!", "Can't wait to hear from you again!"]
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
    { sign: "÷", operation: (a, b) => a !== 0 && b !== 0 && a % b === 0 ? Math.round(a / b) : -1, words: "divided by" }
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

// Function to shuffle an array
function shuffleArray(array) {
  for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1)); // Pick a random index
    [array[i], array[j]] = [array[j], array[i]]; // Swap elements
  }
  return array;
}

// Function to generate animal sound question data
function generateAnimalSoundOptions() {
  const soundSet = getRandomElement(animalSounds);
  const soundAnimal = Object.keys(soundSet)[0];
  const optionsArray = [soundAnimal];
  let counter = 1;
  while (counter < 4) {
    const randomPick = getRandomElement(animals)
    if (!optionsArray.includes(randomPick)) {
      optionsArray.push(randomPick);
      counter++;
    }
  }

  const shuffledAnimals = shuffleArray(optionsArray);
  
  const questionText = `Which of these animals says ${soundSet[soundAnimal]} ${soundSet[soundAnimal]}?`;
  const questionOptions = [];
  let answer;
  shuffledAnimals.forEach((animal, index) => {
    questionOptions.push({ serial: index + 1, item: animal });
    if (animal === soundAnimal) {
      answer = index + 1; // Record the correct answer's position
    }
  });
  const answerText = soundAnimal;

  return { questionText, questionOptions, answer, answerText };
}

////////////////////////////////////////////////////////////////////
//  RESPONDERS /////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

let currentAudio = null; // Store reference to the currently playing audio

function stopAllActions() {
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
  const message = messageParts.join(" ");
  if ('speechSynthesis' in window) {
    const utterance = new SpeechSynthesisUtterance(message);
    utterance.lang = "en-US";
    alert("speaking.");
    speak(utterance);
  } else {
      console.error("Web Speech API is not supported in this browser.");
      alert("Speech API is not supported on your device.");
  }
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

// Function to display pickQuestions for Quiz
function displayPickQuestion(questionArray) {
  let htmlCode = `<div class='content-wrapper'>`
  questionArray.forEach((option) => {
    htmlCode += `<div class='content-box fifty'><div class='number-box'>${option.serial}</div><img src='../img/${option.item}.png' alt='${option.item}' class='content-item'></div>`;
  });
  htmlCode += `</div>`;
  screenContent.innerHTML = htmlCode;
}


////////////////////////////////////////////////////////////////////
//  HANDLERS ///////////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

function quizHandler() {
  isGameOn = true;
  if ('speechSynthesis' in window) {
    speechSynthesis.cancel(); // Stop any ongoing speech
  }
  if (Math.random() < 0.7) {
    const quizQuestion = getRandomElement(quizQuestions);
    displayForNumbers(quizQuestion.numberofitems, quizQuestion.item);  
    window.currentGameAnswer = quizQuestion.answer;
    window.currentGameAnswerText = null;
    speakMessages([quizQuestion.question]);
  } else {
    const pickQuestion = generateAnimalSoundOptions();
    displayPickQuestion(pickQuestion.questionOptions);
    window.currentGameAnswer = pickQuestion.answer;
    window.currentGameAnswerText = pickQuestion.answerText;    
    speakMessages([pickQuestion.questionText]);
  }
  
}

function sumsHandler() {
  isGameOn = true;

  const sumQuestion = generateSumQuestion();
  displaySumQuestion(sumQuestion.left, sumQuestion.sign, sumQuestion.right);
  window.currentGameAnswer = sumQuestion.answer;
  window.currentGameAnswerText = null;
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
      speakMessages(currentGameAnswerText ? [`Correct!, The answer is ${currentGameAnswerText}.`] : [`Correct!, The answer is ${number}.`]);
      displayContent("hundred", 1, "right");
    } else {
      speakMessages(["Oops! Try again next time!"]);
      displayContent("hundred", 1, "wrong");
    }
    isGameOn = false; // End the game
    delete window.currentGameAnswer; // Clear the answer
    window.currentGameAnswerText = null;
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
    window.currentGameAnswerText = null;
  }
}


////////////////////////////////////////////////////////////////////
//  EVENT LISTENERS ////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////

// Event listener for buttons
document.querySelector(".toy-mobile").requestFullscreen?.() || 
  alert("Fullscreen mode is not supported on this browser. Yet you can use it.");

startSteps();  

function startSteps() {
  displayMessage("Press Any Button and Enjoy...");
  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("touchstart", (event) => {
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

