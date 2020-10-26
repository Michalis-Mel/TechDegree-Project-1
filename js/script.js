/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator

******************************************/

//Creating an array of quote objects

const quotes = [
  {
    quote: "Molon Labe",
    source: "King Leonidas",
    citation: "Ancient Greece",
    year: "300 B.C. ",
    usage: "Used in the 300 movie with Gerard Butler",
  },
  {
    quote: "I have no special talent. I am only passionately curious",
    source: "Albert Einstein",
    citation: "Usa",
    year: "1940",
  },
  {
    quote: "If you judge people, you have no time to love them",
    source: "Mother Tereza",
    citation: "India",
    year: "1990",
  },
  {
    quote: "All that we are is the result of what we have thought",
    source: "Budha",
    citation: "India",
  },
  {
    quote: "Stay hungry, stay foolish",
    source: "Steve Jobs",
    citation: "USA",
    year: "2010",
  },
  {
    quote: "Well done is better than well said",
    source: "Benjamin Franklin",
    citation: "USA",
    year: "1790",
  },
];

//Creating a function to get a random quote from the quotes array

function getRandomQuote(array) {
  let quote = Math.floor(Math.random() * array.length);
  return array[quote];
}

//Creating a function to display the random quote into the browser and change the body color

function printQuote() {
  let object = getRandomQuote(quotes);
  let html = `
    <p class="quote">${object.quote} </p>
    <p class="source">${object.source} 
   `;

  if (object.citation) {
    html += `<span class="citation">${object.citation}</span>`;
  }
  if (object.year) {
    html += `<span class="year">${object.year}</span>`;
  }
  if (object.usage) {
    html += `<span class="usage">${object.usage}</span>`;
  }
  html += `</p>`;
  document.getElementById("quote-box").innerHTML = html;
  document.body.style.backgroundColor = `${randomHex()}`;
  return html;
}

//Creating a function to give me a random color
function randomHex() {
  randomColor1 = Math.floor(Math.random() * 255);
  randomColor2 = Math.floor(Math.random() * 255);
  randomColor3 = Math.floor(Math.random() * 255);
  color = `rgb(${randomColor1}, ${randomColor2}, ${randomColor3})`;
  return color;
}

//Adding event listeners so when i click the show another quote button it calls the printQuote function

document.getElementById("load-quote").addEventListener("click", printQuote, false);

//Setting an interval to change my quote every 10 seconds

setInterval(printQuote, 10000);
