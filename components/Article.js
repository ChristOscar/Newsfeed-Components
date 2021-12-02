// This is the data we will be using to create our articles. Look at it, then proceed to line 93.
// OPTIONAL: if you're feeling adventurous, try to make this data an export from a different module, and import it here.
// You can read about ES6 modules here: https://exploringjs.com/es6/ch_modules.html#sec_basics-of-es6-modules

// OPTIONAL DONE!
import data from './articleData';

  // Step 1: Write a component called 'articleMaker' to create an article.
  // Your component is a function that takes an article object as its only argument,
  // and returns a DOM node looking like the one below:

  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class="expandButton">+</span>
  // </div>

function articleMaker(articleObj){
  // Instantiate all the elements needed for a panel
  const panel = document.createElement('div');
  const panelTitle = document.createElement('h2');
  const panelDate = document.createElement('p');
  const panelContent1 = document.createElement('p');
  const panelContent2 = document.createElement('p');
  const panelContent3 = document.createElement('p');
  const panelButton = document.createElement('span');

  // Setup the structure of our elements
  panel.appendChild(panelTitle);
  panel.appendChild(panelDate);
  panel.appendChild(panelContent1);
  panel.appendChild(panelContent2);
  panel.appendChild(panelContent3);
  panel.appendChild(panelButton);

  // Making sure that computer knows what data it is looking for 
  panelTitle.textContent = articleObj['title'];
  panelDate.textContent = articleObj['date'];
  panelContent1.textContent = articleObj['firstParagraph'];
  panelContent2.textContent = articleObj['secondParagraph'];
  panelContent3.textContent = articleObj['thirdParagraph'];

  // <div class="article">
  //   <h2>{title of the article}</h2>
  //   <p class="date">{date of the article}</p>

  //   {three separate paragraph elements}

  //   <span class="expandButton">+</span>
  // </div>

  // Adding proper class names to our elments
  panel.classList.add('article');
  panelDate.classList.add('date');
  panelButton.classList.add('expandButton');

  panelButton.addEventListener('click', (c) => {
    c.target.toggle('article-open');
  });

  console.log(panel);
  return panel;

}

const articles = document.querySelector('.articles');
console.log(articles);
data.forEach(dataPoint =>{
  const articleToAdd = articleMaker(dataPoint);
  articles.appendChild(articleToAdd);

});


  // Step 2: Still inside `articleMaker`, add an event listener to the span.expandButton.
  // This listener should toggle the class 'article-open' on div.article.

  // Step 3: Don't forget to return something from your function!

  // Step 4: Outside your function now, loop over the data. At each iteration you'll use your component
  // to create a div.article element and append it to the DOM inside div.articles (see index.html).

  // Step 5: Try adding new article object to the data array. Make sure it is in the same format as the others.
  // Refresh the page to see the new article.




