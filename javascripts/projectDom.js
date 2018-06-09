const printProject = (stringToPrint) => {
  $('#my-projects').html(stringToPrint);
};

const createProjectCards = (projectArray) => {
  let projectString = '';
  for (let i = 0; i < projectArray.length; i++) {
    projectString += `<div id="card">`;
    //   projectString +=      `<h1>${projectArray[i].id}</h1>`;
    projectString +=      `<h3>${projectArray[i].title}</h3>`;
    projectString +=      `<h3><img id="project-image" src= "${projectArray[i].imageUrl}"</h3>`;
    projectString +=      `<h3>${projectArray[i].description}</h3>`;
    projectString +=      `<h3>Check it out <a href="${projectArray[i].githubUrl}"> here!</a></h3>`;
    projectString += `</div>`;
  }
  printProject(projectString);
};

module.exports = {
  createProjectCards,
};

// const WTF = () => {
//   console.log('ooops');
// };

// const executeFunction = () => {
//   const data = JSON.parse(this.responseText);
//   createProjectCards(data.projects);
// };

// const startApplication = () => {
//   const myRequest = new XMLHttpRequest();
//   myRequest.addEventListener('load', executeFunction);
//   myRequest.addEventListener('error', WTF);
//   myRequest.open('GET', '/db/projects.json');
//   myRequest.send();
// };

// startApplication();
