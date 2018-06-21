const firebaseAPI = require('./firebaseAPI');
const events = require('./events');

const apiKeys = () => {
  return new Promise((resolve, reject) => {
    $.ajax('./db/apiKeys.json')
      .done((data) => {
        resolve(data.apiKeys);
      })
      .fail((err) => {
        reject(err);
      });
  });
};

const retrieveKeys = () => {
  apiKeys()
    .then((results) => {
      firebaseAPI.setConfig(results.firebase);
      firebase.initializeApp(results.firebase);
      events.getBlogsEvent();
      events.getProjectsEvent();
      events.getTechEvent();
    })
    .catch((err) => {
      console.error('no keys:', err);
    });
};

module.exports = {
  retrieveKeys,
};
