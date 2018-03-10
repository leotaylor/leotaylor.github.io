var blogs = [
    {
        id: "blog1", 
        title: "And, so it begins.", 
        date: "02/27/2018", 
        post: "<p>Having never experimented with the tools necessary for the creation of website, I felt completely overwhelmed learning about HTML and CSS as well as using the terminal and GitHub. However, I have to come to realize how necessary and useful these tools can be. I am certainly looking forward to having a better understanding of how to use these tools and create beautiful websites in the process.Throughout the tree house courses and the first couple of weeks of class, I have found HTML to be the least intimidating and easiest to learn. I feel like once you know the basic functioning of the language, then it becomes fairly intuitive. I like the way it interacts with CSS by way of setting classes and ids. However, I am still struggling to learn the difference between the two and how to create highest priority for certain elements. (line break) Overall, I find that CSS is very cool and versatile, but difficult to use. There are so many commands that do so many different things that is hard to remember what to use when and how to get certain commands to work correctly, such as floats. Setting colors, text size, and column/container widths to be fairly easy. However, when working with columns I have a hard time getting things positioned just right, especially once I start resizing the screen. I hope to get better at this as time goes on. I remember going over flexbox and bootstrap during the treehouse courses and thinking that those tools made styling much easier. I look forward to learning more about these tools in the class. (line break) And then there is GitHub and using the terminal in general. I found that I actually caught on to using the terminal pretty quick although I frequently make mistakes. The most common of which is not moving into the directory folder I had just created when trying to create files. GitHub, doesn’t make sense yet. I know how to make new repositories and branches. However, I have no idea what is actually going on. But, it is clear to me how useful it can be, especially when working on a team or updating a live website. However, I find that when making a website from scratch, it adds unnecessary steps while the site is not yet live. (line break) For the most part, I am excited about learning how to use these tools further and having them be a part of my daily professional career. The learning curve has been difficult at times and I’m sure nothing is getting any easier. But I welcome the challenge as I know it is going to allow me to acquire a fulfilling career. I just wish I had applied for Nashville Software School sooner!"
    },

    {
        id: "blog2", 
        title: "Soon I will like JavaScript", 
        date: "03/06/2018", 
        post: "Never has crying in the shower felt more like an option than when we began to study JavaScript in class. I was hoping I would have retained more from Treehouse, but I was in such a rush to get through all of the Treehouse content that I didn’t get a good understanding of some of the concepts. I regret that I didn’t have time to get to the book “A Smarter Way to Learn HTML and CSS” by Mark Myers before class began. However, once we jumped into the deep pool that is JavaScript I pulled out that book and found it to be a valuable resource. Additionally, after playing with the challenges on my own and with my group, I have finally found myself starting to catch on to the basic concepts. I think working in a group of students as hopelessly lost as myself, combined with the non stop dreams/nightmares at night that revolve around JavaScript has aided the most in helping me become more comfortable with the language.(line break) I originally had a very hard time with the arrays challenges and the objects challenges. However, it turns out that the function challenges is where it started coming together for me. Functions make sense! After beginning to work on the function challenges, I have been able to apply what I have been learning through functions and apply that to arrays and objects. I am currently clinging on to for loops and other elementary basics of JavaScript while keeping array methods in sight. I have been reading about the array methods on Mozilla Developer Network but it is almost too technical for me at the moment. Instead, I have been going to YouTube and searching for videos that describe how this array methods work. This has been crucial for me in regards to understanding how to use these methods.(line break) While working on the challenges, Google has been my friend. So much so, that I find myself having to close several windows upon finishing the challenges. The challenges have made me feel all of the emotions, but ultimately are helping me figure out how to work with JavaScript. I have a long way to go before I am fluent in JavaScript but at least now it seems possible. I know that I have a lot of frustration waiting for me every time I open my laptop to tackle a new problem, but I just have to continue to remind myself that it will be worth it once I have acquired these in-demand skills.(line break) One of the areas of JavaScript where I still fill the most confusion is the difference between strings, arrays, and objects and how to interact with them. It seems certain functions or methods may work on one, but behave differently with another. At the moment, there is nothing I want more than to fully fluent in JavaScript and understand exactly how it works, but I realize it will take time and hard work and while my time is extremely limited, I have an infinite supply of hard work."
    },
    {
        id: "blog3", 
        title: "Advanced JavaScript", 
        date: "03/10/2018", 
        post: "Today was the first day of class and it was the BEST!!!!!!!"
    }
  ];

  function createBlogPosts(blogArray){
    var blogString = "";
      for(var i = 0; i < blogArray.length; i++){
          
          blogString += "<h1>" + blogArray[i].id + "</h1>";
          blogString += "<h1>" + blogArray[i].title + "</h1>";
          blogString +=  "<h4>" + blogArray[i].date + "</h4>";
          blogString += "<p>" + blogArray[i].post + "<p>";
      }
    writeToDom(blogString, "my-blogs");
  }
  
  function writeToDom(stringToPrint, divId){
    var printDiv = document.getElementById(divId);
    printDiv.innerHTML += stringToPrint;
  }
createBlogPosts(blogs);