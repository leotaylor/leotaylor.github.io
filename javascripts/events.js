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

// const proScroll = () => {
//   $(window).on('scroll', () => {
//     const fromTopPx = 1800;
//     const scrolledFromtop = $(window).scrollTop();
//     if (scrolledFromtop > fromTopPx) {
//       // $('.proHis').addClass('scrolled');
//       $('#funDiv').fadeIn(3500).removeClass('hide');
//     } else {
//       // $('.proHis').removeClass('scrolled');
//       $('#funDiv').fadeOut().addClass('hide');
//     };
//   });
// };

const proScroll = () => {
  $(window).bind('scroll', () => {
    if ($(window).scrollTop() >= $('#proj').offset().top + $('#proj').outerHeight() - window.innerHeight) {
      $('#funDiv').fadeIn(1500).removeClass('hide');
    } else {
      $('#funDiv').fadeOut().addClass('hide');
    };
  });
};

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

const carousel = () => {
  $(document).ready = (() => {
    $('#carousel-example-generic').carousel();

    $('.item1').click = (() => {
      $('#carousel-example-generic').carousel(0);
    });
    $('.item2').click = (() => {
      $('#carousel-example-generic').carousel(1);
    });
    $('.left').click = (() => {
      $('#carousel-example-generic').carousel('prev');
      console.log('something');
    });
    $('.right').click = (() => {
      $('#carousel-example-generic').carousel('next');
    });
  });
};

const scrollSpy = () => {
  $('body').scrollspy({ target: '#bs-example-navbar-collapse-1', });
};

const initializer = () => {
  fading();
  proScroll();
  scrollSpy();
  clickEvents();
  carousel();
};

module.exports = {
  getBlogsEvent,
  getProjectsEvent,
  getTechEvent,
  initializer,
};
