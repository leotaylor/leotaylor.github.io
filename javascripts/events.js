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

const fading = () => {
  $('body').removeClass('fade-out');
};

const proScroll = () => {
  $(window).on('scroll', () => {
    const fromTopPx = 3100;
    const scrolledFromtop = $(window).scrollTop();
    if (scrolledFromtop > fromTopPx) {
      // $('.proHis').addClass('scrolled');
      $('#funDiv').fadeIn(1700).removeClass('hide');
    } else {
      // $('.proHis').removeClass('scrolled');
      $('#funDiv').fadeOut().addClass('hide');
    };
  });
};

// const clickEvents = () => {
//   $(document).on('click', '.panel-title', () => {
//     $('.collapse').collapse('toggle');
//   });
// };

const clickEvents = () => {
  $(document).on('click', '.ones', () => {
    $('.one').toggle();
  });
  $(document).on('click', '.twos', () => {
    $('.two').toggle();
  });
  $(document).on('click', '.threes', () => {
    $('.three').toggle();
  });
};

const initializer = () => {
  fading();
  proScroll();
  clickEvents();
};

module.exports = {
  getBlogsEvent,
  getProjectsEvent,
  getTechEvent,
  initializer,
};
