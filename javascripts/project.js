
var projects = [
    {
        id: "project1", 
        title: "Dinosaur Project", 
        imageUrl: "https://pre00.deviantart.net/814e/th/pre/i/2015/033/a/1/indominus_rex_by_piecee01-d8g2jot.jpg", 
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"
    },
    {
        id: "project2",
        title: "Ball Python Project",
        imageUrl: "https://i.pinimg.com/736x/6f/10/f6/6f10f618b21ac4ceae614259ce789065--ball-python-terrarium-cute-snakes.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"
    },
    {
        id: "project3",
        title: "Komodo Dragon Project",
        imageUrl: "https://i.pinimg.com/236x/4f/ee/28/4fee284dab9902d772b537f11bc7ecb0--komodo-dragon-dragons.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"   
    },
    {
        id: "project4",
        title: "Boxer Pupper Project",
        imageUrl: "http://fallinpets.com/wp-content/uploads/2016/12/boxer-dog-puppy-so-cute.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"   
    },   
    {
        id: "project5",
        title: "Cheetah Project",
        imageUrl: "https://media-cdn.tripadvisor.com/media/photo-s/06/32/59/f2/amafu-forest-lodge.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"   
    },
    {
        id: "project6",
        title: "Badger Project",
        imageUrl: "https://data.whicdn.com/images/3076922/large.jpg",
        description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam. Sed nisi. Nulla quis sem at nibh elementum imperdiet. Duis sagittis ipsum. Praesent mauris. Fusce nec tellus sed augue semper porta. Mauris massa. Vestibulum lacinia arcu eget nulla.",
        githubUrl: "https://github.com/leotaylor?tab=repositories"   
    }   
  ];


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
  
  const writeToDom = (stringToPrint, divId) =>{
    let printDiv = document.getElementById(divId);
    printDiv.innerHTML += stringToPrint;
  }
createProjectCards(projects);