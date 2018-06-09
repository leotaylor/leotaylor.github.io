const firebaseAPI = require('./firebaseAPI');
const blogsDom = require('./blogsDom');
const projectDom = require('./projectDom');

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

module.exports = {
  getBlogsEvent,
  getProjectsEvent,
};
