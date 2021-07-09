import { data } from "msw/lib/types/context"

const Header = (title, date, temp) => {
  // TASK 1
  // ---------------------
  // Implement this function taking `title`, `date` and `temp` as its 3 args and returning the markup below.
  // The tags used, the hierarchy of elements and their attributes must match the provided markup exactly!
  // The text inside elements will be set using their `textContent` property (NOT `innerText`).
  //
  //  <div class="header">
  //    <span class="date">{ date }</span>
  //    <h1>{ title }</h1>
  //    <span class="temp">{ temp }</span>
  //  </div>
  //
  const myheader = document.createElement('div')
  myheader.classList.add('header')
  const mydate = document.createElement('span')
  mydate.classList.add('data')
  const mytitle = document.createElement('h1')
  const mytemp = document.createElement('span')
  mytemp.classList.add('temp')
  myheader.appendChild(mydate)
  myheader.appendChild(mytitle)
  myheader.appendChild(mytemp)
  mydate.textContent(date)
  mytemp.textContent(temp)
  mytitle.textContent(title)

  return myheader
}

const headerAppender = (selector) => {
  // TASK 2
  // ---------------------
  // Implement this function taking a css selector as its only argument.
  // It should create a header using the Header component above, passing arguments of your choosing.
  // It should append the header to the element in the DOM that matches the given selector.
  //
}

export { Header, headerAppender }
