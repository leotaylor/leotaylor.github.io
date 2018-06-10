const printProject = (stringToPrint) => {
  $('#my-projects').html(stringToPrint);
};

const createProjectCards = (projectArray) => {
  let projectString = '';
  for (let i = 0; i < projectArray.length; i++) {
    projectString += `<div id="card">`;
    projectString +=      `<h3>${projectArray[i].title}</h3>`;
    projectString +=      `<h3><img id="project-image" src= "${projectArray[i].imageUrl}"</h3>`;
    projectString +=      `<h5>${projectArray[i].description}</h5>`;
    projectString +=      `<h3>Technologies Used:</h3> <h5>${projectArray[i].technologiesUsed}</h5>`;
    projectString +=      `<h3>Check it out <a href="${projectArray[i].url}"> here!</a></h3>`;
    projectString +=      `<h3>GitHub Repository: <a href="${projectArray[i].github}">GITHUB</a></h3>`;
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
