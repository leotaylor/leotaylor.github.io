
const writeToDom = (stringToPrint, divId) =>{
    let printDiv = document.getElementById(divId);
    printDiv.innerHTML += stringToPrint;
  }
// createProjectCards(projects);


  const createProjectCards = (projectArray) => {
    let projectString = "";
      for(let i = 0; i < projectArray.length; i++){
          projectString += `<div>`;
          projectString +=      `<h1>${projectArray[i].id}</h1>`;
          projectString +=      `<h3>${projectArray[i].title}</h3>`;
          projectString +=      `<h3><img src= "${projectArray[i].imageUrl}"</h3>`;
          projectString +=      `<h3>${projectArray[i].description}</h3>`;
          projectString +=      `<h3>Check it out <a href="${projectArray[i].githubUrl}"> here!</a></h3>`;
      }
    writeToDom(projectString, "my-projects");
  }
  
function WTF(){
    console.log("ooops");
}

function executeFunction (){
    const data = JSON.parse(this.responseText);
    createProjectCards(data.projects);
}

const startApplication = () =>{
    let myRequest = new XMLHttpRequest();
    myRequest.addEventListener("load", executeFunction);
    myRequest.addEventListener("error", WTF);
    myRequest.open("GET", "/db/projects.json");
    myRequest.send();
}
startApplication();