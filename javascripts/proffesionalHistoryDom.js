const printTech = (stringToPrint) => {
  $('#techUsed').html(stringToPrint);
};

const techUsed = (techUsed) => {
  let domString = '';
  domString += `<h1>Tech Used</h1>`;
  domString += `<div class="row">`;
  techUsed.forEach((tech) => {
    domString += `<div class="col-md-3 col-sm-6 col-xs-6 techImage">`;
    domString +=  `<img src="${tech.image}">`;
    domString +=  `<h2>${tech.desc}</h2>`;
    domString += `</div>`;
  });
  domString += `</div>`;
  printTech(domString);
};

module.exports = {
  techUsed,
};
