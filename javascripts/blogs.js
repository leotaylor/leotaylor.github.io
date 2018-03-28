
const writeToDom = (stringToPrint, divId) =>{
    let printDiv = document.getElementById(divId);
    printDiv.innerHTML += stringToPrint;
  };

  const createBlogPosts = (blogArray) => {
    let blogString = "";
      for(let i = 0; i < blogArray.length; i++){  
          blogString += `<div>`;
          blogString +=     `<h1>${blogArray[i].id}</h1>`;
          blogString +=     `<h1 id='blogTitle'>${blogArray[i].title}</h1>`;
          blogString +=     `<h4>${blogArray[i].date}</h4>`;
          blogString +=     `<p id='seperate'>${blogArray[i].post}<p>`;
          blogString += `</div>`;
      }
    writeToDom(blogString, "my-blogs");
  }

function WTF(){
    console.log("ooops");
}

function executeFunction (){
    const data = JSON.parse(this.responseText);
    createBlogPosts(data.blogs);
}

const startApplication = () =>{
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeFunction);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "/db/blogs.json");
    myRequest.send();
}
startApplication();