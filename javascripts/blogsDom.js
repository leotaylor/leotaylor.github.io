const writeToDom = (stringToPrint) => {
  $('#my-blogs').html(stringToPrint);
};

const createBlogPosts = (blogArray) => {
  let blogString = '';
  blogString += `<h1>BLOG</h1>`;
  for (let i = 0; i < blogArray.length; i++) {
    blogString += `<div>`;
    blogString +=     `<h1 id='blogTitle'>${blogArray[i].title}</h1>`;
    blogString +=     `<h4 id='blogDate'>${blogArray[i].date}</h4>`;
    blogString +=     `<p id='seperate'>${blogArray[i].post}<p>`;
    blogString += `</div>`;
  }
  writeToDom(blogString);
};

module.exports = {
  createBlogPosts,
};

// const WTF = () => {
//   console.log('ooops');
// };

// const executeFunction = () => {
//   const data = JSON.parse(this.responseText);
//   createBlogPosts(data.blogs.reverse());
// };

// const startApplication = () => {
//   const myRequest = new XMLHttpRequest();
//   myRequest.addEventListener('load', executeFunction);
//   myRequest.addEventListener('error', WTF);
//   myRequest.open('GET', '/db/blogs.json');
//   myRequest.send();
// };

// startApplication();
