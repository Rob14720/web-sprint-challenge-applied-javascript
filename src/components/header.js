const Header = (title, date, temp) => {

  const head = document.createElement('div');
  head.classList.add('header');
  const style1 = document.createElement('span');
  style1.classList.add('date');
  const h1 = document.createElement('h1');
  const style2 = document.createElement('span');
  style2.classList.add('temp');
  h1.textContent = title;
  style1.textContent = date;
  style2.textContent = temp;
  head.appendChild(style1);
  head.appendChild(h1);
  head.appendChild(style2);
  return head
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The html tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
}

const headerAppender = (selector) => {


  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //

  const container = document.querySelector(selector);
  const headerElem = Header('title', '12-15-1998', '87F');
  container.appendChild(headerElem);

  // HINT: querySelector can take in a string (ie querySelector("#wrapper")) 
  // but it can also take in a variable (ie querySelector(selector))
  // We are taking care of passing in the correct selector on line 16,
  // so all that you need to do is pass it into the querySelector method
  // for the tests to work!
}

export { Header, headerAppender }
