const firebaseAPI = require('./firebaseAPI');
const blogsDom = require('./blogsDom');
const projectDom = require('./projectDom');
const techDom = require('./proffesionalHistoryDom');

const getBlogsEvent = () => {
  firebaseAPI.getBlogData()
    .then((newBlogArray) => {
      blogsDom.createBlogPosts(newBlogArray);
    })
    .catch((error) => {
      console.error('error in retrieving blogs:', error);
    });
};

const getProjectsEvent = () => {
  firebaseAPI.getProjectsData()
    .then((newProjectsArray) => {
      projectDom.createProjectCards(newProjectsArray);
    })
    .catch((error) => {
      console.error('error in retrieving projects:', error);
    });
};

const getTechEvent = () => {
  firebaseAPI.getTechData()
    .then((newTechArray) => {
      techDom.techUsed(newTechArray);
    })
    .catch((error) => {
      console.error('error in retrieving projects:', error);
    });
};

const clickEvents = () => {
  $(document).on('click','#headOne', (e) => {
    e.preventDefault();
    $('.collapse').collapse('toggle');
  });
};

module.exports = {
  getBlogsEvent,
  getProjectsEvent,
  getTechEvent,
  clickEvents,
};
