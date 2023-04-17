//Started by creating 2 objects that held my chosen adjectives and nouns. In the html I assigned values "a" and "b" and so keeping that in mind, aFirst/aLast (value=a) and bFirst/bLast (value=b)
let aFirst = ["adorable",
  "beautiful",
  "clever",
  "drab",
  "elegant",
  "fancy",
  "glamorous",
  "handsome",
  "magnificent",
  "nifty",
  "quaint",
  "sparkling",
  "talented",
  "unusual",
  "victorious",
  "witty",
  "zealous",
  "boastful",
  "brainy",
  "busy",
  "careful",
  "cautious",
  "determined",
  "diligent",
  "eager",
  "faithful",
  "famous",
  "gifted",
  "helpful",
  "inquisitive",
  "jolly",
  "kind",
  "lively",
  "nervous",
  "obedient",
  "polite",
  "proud",
  "silly",
  "thoughtful",
  "vague",
  "wandering",
  "zealous",
  "angry",
  "bewildered",
  "clumsy",
  "defeated",
  "embarrazzed",
  "fierce",]
let aLast = ["warning",
  "sample",
  "month",
  "power",
  "worker",
  "family",
  "disease",
  "policy",
  "flight",
  "pollution",
  "hearing",
  "knowledge",
  "map",
  "television",
  "temperature",
  "assistant",
  "customer",
  "cheek",
  "mall",
  "outcome",
  "virus",
  "king",
  "movie",]
let bFirst = ["grumpy",
  "helpless",
  "itchy",
  "jealous",
  "lazy",
  "mysterious",
  "nasty",
  "outstanding",
  "panicky",
  "repulsive",
  "scary",
  "thoughtless",
  "uptight",
  "worried",
  "attractive",
  "bald",
  "chubby",
  "dazzling",
  "flabby",
  "gorgeous",
  "muscular",
  "plain",
  "plump",
  "quickest",
  "roasted",
  "scrawny",
  "skinny",
  "ugly",
  "unusual",
  "vast",
  "wide-eyed",
  "young",
  "busboy",
  "delusional",
  "astro girl",
  "astro boy",
  "school nurse",
  "dawg",
  "gatekeeper",
  "girlboss",
  "gaslighter",
  "baddie",
  "tech baddie",
  "scammer",
  "resilient",
  "boomboxer",
  "swim teacher",
  "surfer",
  "bozo",
  "degenerate"
]
let bLast = ["reputation",
  "promotion",
  "significance",
  "direction",
  "profession",
  "advertising",
  "emphasis",
  "wife",
  "safety",
  "singer",
  "success",
  "requirement",
  "sympathy",
  "disk",
  "government",
  "depression",
  "tennis",
  "effort",
  "breath",
  "patient",
  "consequence",
  "camera",
  "tea",
  "response",
  "writing",
  "drama",
  "clothes",
  "actor",
  "actress",
  "performer"]

//variable creation: thesw variables can be used to access random elements from the corresponding arrays, thus generating a random first and last name combination. Using a combo of math.floor and math.random to get a valid index that can be used to select a random element from the array later on. 
let randomAFirstName = Math.floor(Math.random() * aFirst.length)
let randomALastName = Math.floor(Math.random() * aLast.length)
let randomBFirstName = Math.floor(Math.random() * bFirst.length)
let randomBLastName = Math.floor(Math.random() * bLast.length)

//adding event listener for the reveal button. sentenceDisplay is for where the generated name will pop up
const revealBtn = document.querySelector('#clickMe').addEventListener('click', getName);
let sentenceDisplay = document.querySelector('#stageNameDisplay');


//called the function below modes, keeping in mind that modes in JS as a concept = displays the number that appears the most frequently. Considering as I did not do a point system, but instead assigned values a and b to my html, I needed the mode(s) to tell me which answer the user selected the most (a or b), to then pull from the appropriately assigned variables I made above.Then I created an empty object called obj to store the frequency count of each element in the array. It then iterates through the array and updates the frequency count for each element in the obj object. Finally, the function identifies the element in the obj object with the highest frequency count and returns it as a string.
function modes(array) {
  const obj = {}
  array.forEach(strings => {
    if (!obj[strings]) {
      obj[strings] = 1
    } else {
      obj[strings] += 1
    }
  })

  //created these 2 variables below specifically for the assignment of value gained from user input. mostValue starts at zero and keeps getting bigger if we find bigger numbers; mostValueKey starts at negative infinity, which represents a value that is less than any other number. I used these two to  find the biggest number (read: more instances of selecting a rather than b, or vice versa).
  let mostValue = 0
  let mostValueKey = -Infinity

  for (let key in obj) {
    const value = obj[key]
    if (value > mostValue) {
      mostValue = value
      mostValueKey = key
    }
  }
  return String(mostValueKey)
}

//The function below retrieves the values of whichever checked radio buttons for the five different input names I created in the html (beverage, animal, color, personality, and zodiac)
function getName() {
  let one = document.querySelector('input[name="beverage"]:checked').value
  let two = document.querySelector('input[name="animal"]:checked').value
  let three = document.querySelector('input[name="color"]:checked').value
  let four = document.querySelector('input[name="personality"]:checked').value
  let five = document.querySelector('input[name="zodiac"]:checked').value

  //after creating variables per each survey question above, I created a "parent" variable called choices below to "contain" each one within an array. Then I console logged the contents of the choices array to the console (mostly for my own reference of what was going on). The function modes is called with the choices array as an argument, and the resulting mode is logged to the console.
  let choices = [one, two, three, four, five]
  console.log(choices)
  let mode = modes(choices)
  console.log(mode)

  //lastly, I did a conditional for whether the user chose mostly a's or b's. If mode is 'a', it combines a randomly selected first and last name from my 2 arrays representing a answers. If mode is 'b', it combines a randomly selected first and last name from my other 2 arrays representing b answers. This is then sets the text to display on the DOM as a string with the generated name result. 
  if (mode === 'a') {
    document.querySelector('#stageNameDisplay').innerText = `Your stage name is ${aFirst[randomAFirstName]} ${aLast[randomALastName]}`
  } else if (mode === 'b') {
    document.querySelector('#stageNameDisplay').innerText = `Your stage name is ${bFirst[randomBFirstName]} ${bLast[randomBLastName]}`
  }
}

//note: although I appreciated learning more about mode as a concept to enable this project, I realized afterward I could have simplified this code with ternary operator(s) instead (for example).



