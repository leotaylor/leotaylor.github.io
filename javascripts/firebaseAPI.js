let firebaseconfig = {};

const setConfig = (fbConfig) => {
  firebaseconfig = fbConfig;
};

const getBlogData = () => {
  return new Promise((resolve, reject) => {
    const blogArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseconfig.databaseURL}/blogs/blogs.json`,
    })
      .done((blogObject) => {
        if (blogObject !== null) {
          Object.keys(blogObject). forEach((fbKey) => {
            blogObject[fbKey].id = fbKey;
            blogArray.push(blogObject[fbKey]);
          });
        }
        resolve(blogArray.reverse());
      })
      .fail((error) => {
        reject(error);
      });
  });
};

const getProjectsData = () => {
  return new Promise((resolve, reject) => {
    const projectArray = [];
    $.ajax({
      method: 'GET',
      url: `${firebaseconfig.databaseURL}/projects/projects.json`,
    })
      .done((projectObject) => {
        if (projectObject !== null) {
          Object.keys(projectObject). forEach((fbKey) => {
            projectObject[fbKey].id = fbKey;
            projectArray.push(projectObject[fbKey]);
          });
        }
        resolve(projectArray);
      })
      .fail((error) => {
        reject(error);
      });
  });
};

module.exports = {
  setConfig,
  getBlogData,
  getProjectsData,
};
