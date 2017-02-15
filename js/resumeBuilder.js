var bio = {
  "name": "Stephanie Spears",
  "role": "Web Developer",
  "contacts": {
    "mobile": "503-459-3847",
    "email": "Stephanie.Spears1@gmail.com",
    "github": "https://github.com/Stephanie-Spears",
    "location": "Portland, Oregon"
  },
  "welcomeMessage": "Success is no accident. It is hard work, perseverance, learning, studying, sacrifice and most of all, love of what you are doing or learning to do. -Pele",

  "languages": ["C++", "PHP", "Drupal", "HTML/CSS/JavaScript", "Java", "Visual Basic", "Python", "SQL", "C#", "Ruby", "Swift" ],

  "skills": ["Excellent written and verbal communication", "Highly organized and detail-oriented", "Learn and adapt quickly", "Good sense of humor and positive attitude", "Analytical thinking and research ability", "Work effectively as part of a team or independently"],

  "myBioPic": "img/bioPic.jpg"
};

function displayBio(){
  if (bio.length !== 0){
    var formattedName=HTMLheaderName.replace("%data%", bio.name);
    var formattedRole=HTMLheaderRole.replace("%data%", bio.role);
    $("#header").prepend(formattedName, formattedRole);

    var formattedMobile=HTMLmobile.replace("%data%", bio.contacts.mobile);
    var formattedEmail=HTMLemail.replace("%data%", bio.contacts.email);
    var formattedGithub=HTMLgithub.replace("%data%", bio.contacts.github);
    var formattedLocation=HTMLlocation.replace("%data%", bio.contacts.location);
    $("#topContacts").prepend(formattedMobile, formattedEmail, formattedGithub, formattedLocation);

    var formattedBioPic=HTMLbioPic.replace("%data%", bio.myBioPic);
    var formattedWelcomeMessage=HTMLwelcomeMsg.replace("%data%", bio.welcomeMessage);
    $("#header").append(formattedBioPic, formattedWelcomeMessage);

    if (bio.languages.length > 0) {
      $("#headerLanguages").append(HTMLlanguagesStart);
      for (var x = 0; x < bio.languages.length; x++){
        alert(bio.languages[x]);
        var formattedLanguages=HTMLlanguages.replace("%data%", bio.langauges); // NOTE: breaks if I do bio.langauges[x]...debug
        $("#langauges").append(formattedLanguages);
      }
    }
    if (bio.skills.length > 0) {
      $("#headerSkills").append(HTMLskillsStart);
      for (var e = 0; e < bio.skills.length; e++){
        alert(bio.skills[e]);
        var formattedSkills=HTMLskills.replace("%data%", bio.skills[e]);
        $("#skills").append(formattedSkills);
      }
    }
  }
}

displayBio();

var education = {
  "schools": [
    {
      "name": "Epicodus",
      "location": "Portland, OR 97204",
      "degree": "--Certificate of Completion",
      "majors": ["PHP", " Drupal ", " JavaScript"],
      "dates": "Jan 2017-July 2017",
      "url": "https://www.epicodus.com/"
    },
    {
      "name": "University of Oregon",
      "location": "Eugene, OR 97403",
      "degree": "--Bachelor of Arts",
      "majors": ["Psychology", " Humanities", " English (minor)"],
      "dates": "Sept 2009-June 2011",
      "url": "http://uoregon.edu/"
    },
    {
      "name": "Oregon State University",
      "location": "Corvallis, OR 97331",
      "degree": "",
      "majors": ["English", " Human Development"],
      "dates": "Sept 2007-Aug 2009",
      "url": "http://oregonstate.edu/"
    },
    {
      "name": "Portland State University",
      "location": "Portland, OR 97201",
      "degree": "",
      "majors": ["English Literature", " Psychology"],
      "dates": "Sept 2006-Aug 2007",
      "url": "https://www.pdx.edu/"
    },
    {
      "name": "Portland Community College",
      "location": "Portland, OR 97219",
      "degree": "",
      "majors": ["Computer Science"],
      "dates": "Sept 2006-Aug 2007, Feb 2016-Dec 2016",
      "url": "https://www.pdx.edu/"
    }
  ],
  "completedCourses": [
    {
      "title": "JavaScript Basics",
      "school": "Udacity",
      "dates": "Feb 2017",
      "url": "https://classroom.udacity.com/courses/ud804/lessons/1946788554/concepts/25505685350923"
    },
    {
      "title": "Programming Foundations with Python",
      "school": "Udacity",
      "dates": "Feb 2017",
      "url": "https://classroom.udacity.com/courses/ud036/lessons/990110642/concepts/10079185740923"
    },
    {
      "title": "Intro to Computer Science",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/cs101/lessons/48299949/concepts/486985440923"
    },
    {
      "title": "How to Use Git and Github",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/ud775/lessons/2980038599/concepts/29607789240923"
    },
    {
      "title": "Intro to HTML and CSS",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/ud304/lessons/2617868617/concepts/27713785570923"
    },
    {
      "title": "Web Development",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/cs253/lessons/48756010/concepts/484037880923"
    },
    {
      "title": "Intro to Java: Functional Programming",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url": "https://classroom.udacity.com/courses/ud282/lessons/8193672240/concepts/82227937880923"
    },
    {
      "title": "Linux Command Line Basics",
      "school": "Udacity",
      "dates": "Jan 2017",
      "url":
      "https://classroom.udacity.com/courses/ud595/lessons/4597278561/concepts/46968696010923"
    },
    {
      "title": "Software Design",
      "school": "Portland Community College",
      "dates": "Sept 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerinformationsystems/#coursestext"
    },
    {
      "title": "Computer Science I",
      "school": "Portland Community College",
      "dates": "Sept 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerscience/#coursestext"
    },
    {
      "title": "Computer Science II",
      "school": "Portland Community College",
      "dates": "Nov 2016",
      "url": "http://catalog.pcc.edu/programsanddisciplines/computerscience/#coursestext"
    }
  ]
};

function displayEducation() {
  if (education.schools.length > 0) {
    for (var i = 0; i < education.schools.length; i++) {
      $("#education").append(HTMLschoolStart);
      var formattedSchoolName = HTMLschoolName.replace("%data%", education.schools[i].name);
      formattedSchoolName = formattedSchoolName.replace("#", education.schools[i].url);
      var formattedSchoolDegree = HTMLschoolDegree.replace("%data%", education.schools[i].degree);
      var formattedSchoolDate = HTMLschoolDates.replace("%data%", education.schools[i].dates);
      var formattedSchoolLocation = HTMLschoolLocation.replace("%data%", education.schools[i].location);
      var formattedSchoolMajor = HTMLschoolMajor.replace("%data%", education.schools[i].majors);
      $(".education-entry:last").append(formattedSchoolName, formattedSchoolDegree, formattedSchoolDate, formattedSchoolLocation, formattedSchoolMajor);
    }
  }
  if (education.completedCourses.length > 0){
    for (var e = 0; e < education.completedCourses.length; e++){
      $("#completedCourses").append(HTMLonlineCourseStart);
      var formattedOnlineTitle = HTMLonlineTitle.replace("%data%", education.completedCourses[e].title);
      formattedOnlineTitle = formattedOnlineTitle.replace("#", education.completedCourses[e].url);
      var formattedOnlineSchool = HTMLonlineSchool.replace("%data%", education.completedCourses[e].school);
      var formattedOnlineDates = HTMLonlineDates.replace("%data%", education.completedCourses[e].dates);
      var formmattedOnlineURL = HTMLonlineURL.replace("%data%", education.completedCourses[e].url);
      $(".onlineCourse-entry:last").append(formattedOnlineTitle, formattedOnlineSchool, formattedOnlineDates);
    }

  }
}

displayEducation();


var work = {
  "jobs": [
    {
      "employer": "Self-Employed",
      "title": "Private Instructor",
      "dates": "April 2012-current",
      "location": "Umeda, Osaka, Japan",
      "description": "Private English instructor, assisting clients with various English language-related tasks. Tasks were unique to the client’s needs, and largely depended on the client’s profession. Activities ranged from Japanese-English translation, proofreading and assistance creating or understand articles, essays, scientific or medical studies, conference speeches, legal contracts, and professional correspondences between international colleagues. I continue to work from a distance with several private clients.",
      "url": ""
    },
    {
      "employer": "Kuzuha Language College",
      "title": "English Language Consultant",
      "dates": "Feb 2012-Dec 2015",
      "location": "Kuzuha, Hirakata, Japan",
      "description": "English Language Consultant on a variety of technical and academnic materials. Editing, proof-reading, translation.",
      "url": "http://www.klc-inc.com/"
    },
    {
      "employer": "YMCA International",
      "title": "English Language Teacher",
      "dates": "June 2014-April 2015",
      "location": "Nishinomiya, Kobe, Japan",
      "description": "Part-time dispatch English teacher, traveling to several private elementary schools for weekly lessons, as well as coordinating and hosting special holiday events.",
      "url": "http://www.oyis.org/index.php/en/"
    },
    {
      "employer": "Kinder Kids International",
      "title": "English Language Teacher",
      "dates": "Feb 2012-June 2014",
      "location": "Nakayama, Kobe, Japan",
      "description": "Saturday school English instructor, teaching groups of children in an English immersion environment. Activities included language games, vocabulary building, grammar correction, and general speaking/listening development.",
      "url": "http://www.kinderkids.com/en/"
    },
    {
      "employer": "Blue Dolphin International Preschool",
      "title": "English Language Teacher",
      "dates": "Feb 2012-June 2014",
      "location": "Mikage, Kobe, Japan",
      "description": "English immersion teacher for preschool-aged children.",
      "url": "http://www.blue-dolphins.net/"
    },
    {
      "employer": "Scott T. Bailey, Attorney at Law",
      "title": "Research Assistant",
      "dates": "June 2011-Sept 2011",
      "location": "Florence, Oregon",
      "description": "Brief summer-break internship position. Assisted with researching, organizing, and summarizing medical evidence in support of medical disability claims.",
      "url": "https://www.stblawyer.com/contact"
    },
    {
      "employer": "American English Institute, University of Oregon",
      "title": "Academnic Tutor",
      "dates": "Nov 2009-June 2011",
      "location": "Eugene, Oregon",
      "description": "Tutor to non-native English speakers at the University of Oregon. Assisted with group learning as well as individual tutoring.",
      "url": "https://aei.uoregon.edu/"
    }
  ]
};

function displayWork() {
  if (work.jobs.length > 0) {
    for (var i = 0; i < work.jobs.length; i++) {
      $("#workExperience").append(HTMLworkStart);
      var formattedEmployer=HTMLworkEmployer.replace("%data%", work.jobs[i].employer);
      formattedEmployer=formattedEmployer.replace("#", work.jobs[i].url);
      formattedTitle=HTMLworkTitle.replace("%data%", work.jobs[i].title);
      formattedEmployerTitle= formattedEmployer + formattedTitle;
      // $(".work-entry:last").append(formattedEmployerTitle);

      var formattedDates=HTMLworkDates.replace("%data%", work.jobs[i].dates);
      // $(".work-entry:last").append(formattedDates);
      var formattedLocations=HTMLworkLocation.replace("%data%", work.jobs[i].location);
      // $(".work-entry:last").append(formattedLocations);
      var formattedDescription=HTMLworkDescription.replace("%data%", work.jobs[i].description);
      $(".work-entry:last").append(formattedEmployerTitle, formattedDates, formattedLocations, formattedDescription);
    }
  }
}

displayWork();

var projects = {
  "projects": [
    {
      "title": "Stephanie's Portfolio",
      "link" : "https://stephanie-spears.github.io/stephanie-spears/",
      "dates": "February 2016-Present",
      "description": "A web application for presenting my project portfolio",
      "images": [ "img/portfolio-screenshot.png" ]
    }
  ]
};

function displayProjects() {
  if (projects.projects.length > 0) {
    for (var i = 0; i < projects.projects.length; i++) {
      $("#projects").append(HTMLprojectStart);

      var formattedTitle = HTMLprojectTitle.replace("%data%", projects.projects[i].title);
      formattedTitle = formattedTitle.replace("#", projects.projects[i].link);

      $(".project-entry:last").append(formattedTitle);

      var formattedDates = HTMLprojectDates.replace("%data%", projects.projects[i].dates);
      $(".project-entry:last").append(formattedDates);

      var formattedDescription = HTMLprojectDescription.replace("%data%", projects.projects[i].description);
      $(".project-entry:last").append(formattedDescription);

      if (projects.projects[i].images.length > 0) {
        for (var e = 0; e < projects.projects[i].images.length; e++) {
          var formattedImage = HTMLprojectImage.replace("%data%", projects.projects[i].images[e]);
          $(".project-entry:last").append(formattedImage);
        }
      }
    }
  }
}
displayProjects();


// FUNCTIONS

//takes in a string of two names and capitalizes the last name
function inName(name) {
  name = name.trim().split(" "); //trim will take away the white space in the front and back of the name string. split it at the space char
  name[1] = name[1].toUpperCase();
  name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase(); //capitalizes first name's first letter, appends it to the remainder of the first name which it ensures is lower case.
  return name[0] + " " + name[1];
}
$("#main").append(internationalizeButton);

// //displays where the user clicks on webpage--inside inspect
// $(document).click(function(loc) {
//   var x = loc.pageX;
//   var y = loc.pageY;
//   logClicks(x,y);
// });

//creates an array of all work locations
function locationizer(work_obj) {
  var locationArray = [];
  for (var i = 0; i < work.jobs.length; i++) {
    var newLocation = work_obj.jobs[i].location;
    locationArray.push(newLocation);
  }
  return locationArray;
}
locationizer(work);

//invoke the map in helper.js
$("#mapDiv").append(googleMap);
