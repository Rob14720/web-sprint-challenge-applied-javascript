import axios from "axios";

const Card = (article) => {
  // TASK 5
  // ---------------------
  // Implement this function, which should return the markup you see below.
  // It takes as its only argument an "article" object with `headline`, `authorPhoto` and `authorName` properties.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  // Add a listener for click events so that when a user clicks on a card, the headline of the article is logged to the console.
  const card = document.createElement('div');
  card.classList.add('card');
  const headline = document.createElement('div');
  headline.classList.add('headline');
  headline.textContent = article.headline;
  const author = document.createElement('div')
  author.classList.add('author');
  author.textContent = article.author
  const imgContainer = document.createElement('div');
  imgContainer.classList.add('img-container');
  const img = document.createElement('img');
  const span = document.createElement('span');
  span.textContent = `By ${article.authorName}`;
  img.src = article.authorPhoto;
  card.appendChild(headline);
  card.appendChild(author);
  author.appendChild(imgContainer);
  author.appendChild(span);
  imgContainer.appendChild(img);
  return card;

  //
  // <div class="card">
  //   <div class="headline">{ headline }</div>
  //   <div class="author">
  //     <div class="img-container">
  //       <img src={ authorPhoto }>
  //     </div>
  //     <span>By { authorName }</span>
  //   </div>
  // </div>
  //
  const cardDiv = document.createElement('div');
  cardDiv.classList.add('card');
  const headlineDiv = document.createElement('div');
  headlineDiv.classList.add('headline');
  headlineDiv.textContent = article.headline;
  cardDiv.appendChild(headlineDiv);
  return cardDiv;

}

const cardAppender = (selector) => {
  const container = document.querySelector(selector);
  axios.get('http://localhost:5001/api/articles').then((res) => {
    console.log(res.data.articles);
    for (let key in res.data.articles) {
      const articles = res.data.articles[key];
      for (let article of articles) {
        const cardElement = Card(article);
        container.appendChild(cardElement);
        // TASK 6
        // ---------------------
        // Implement this function that takes a css selector as its only argument.
        // It should obtain articles from this endpoint: `http://localhost:5001/api/articles` (test it with console.log!!).
        // However, the articles do not come organized in a single, neat array. Inspect the response closely!
        // Create a card from each and every article object in the response, using the Card component.
        // Append each card to the element in the DOM that matches the selector passed to the function.
        //
      }
    }
  })
}

  export { Card, cardAppender }
