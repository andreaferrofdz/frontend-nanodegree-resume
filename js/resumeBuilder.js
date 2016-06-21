/*
This is empty on purpose! Your code to build the resume will go here.
 */

 var data = "%data%";

var bio = {
	"name": "Andrea Ferro",
	"role": "Web Developer",
	"contacts": {
		"mobile": "5512954423",
		"email": "andreaferrofdz@gmail.com",	
		"github": "andreaferrofdz",
		"location": "Mexico City"
	},
	"biopic": "images/andrea.jpg",
	"welcomeMessage": "The time to be awesome is now!!!",
	"skills": ["html","css","asp.net", "sql","oracle", "c#", "vb"]
};

bio.display = function() {

	var formattedName = HTMLheaderName.replace(data, "Andrea Ferro");
	var formattedRole = HTMLheaderRole.replace(data, "Web Developer");

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").prepend(HTMLlocation.replace(data, bio.contacts.location));
	$("#topContacts").prepend(HTMLgithub.replace(data, bio.contacts.github));
	$("#topContacts").prepend(HTMLemail.replace(data, bio.contacts.email));
	$("#topContacts").prepend(HTMLmobile.replace(data, bio.contacts.mobile));

	$("#footerContacts").prepend(HTMLlocation.replace(data, bio.contacts.location));
	$("#footerContacts").prepend(HTMLgithub.replace(data, bio.contacts.github));
	$("#footerContacts").prepend(HTMLemail.replace(data, bio.contacts.email));
	$("#footerContacts").prepend(HTMLmobile.replace(data, bio.contacts.mobile));

	$("#header").append(HTMLbioPic.replace(data, bio.biopic));
	$("#header").append(HTMLwelcomeMsg.replace(data, bio.welcomeMessage));

	$("#header").append(HTMLskillsStart);


	for (var skill in bio.skills) {
		if(bio.skills.hasOwnProperty(skill)) {
	  		$("#skills").append(HTMLskills.replace(data, bio.skills[skill]));
	  	}
	}

};

var work = {
	"jobs": [{
			"employer": "Me",
			"title": "Freelacer",
			"dates": "2016 - Future",
			"description": "Development and supporting web applications.",
			"location": "Mexico City"
		},
		{
			"employer": "TNS",
			"title": "Web Developer",
			"dates": "2015 - 2016",
			"description": "Development and supporting web applications. Creating database tables, queries and scripts on multiple DBMS (SQL Server, MYSQL). Management of change control for multiple environments (DEV, UAT and PROD). Organization and monitoring of SIT and UAT testings.",
			"location": "Mexico City"
		},
		{
			"employer": "JP Morgan Chase",
			"title": "Trainee, Application Delivery Mexico",
			"dates": "2013 - 2015",
			"description": "Development and supporting BI processes using Pentaho tool for regulatory reporting of finance, operations and accounting. Development and support of macros for reporting purposes. Help with the support in front and middle office on the trading floor. Creating database tables, queries and scripts on multiple DBMS (Oracle, Sybase, SQL Server). Management of change control for multiple environments (DEV, UAT and PROD). Organization and monitoring of SIT and UAT testings. Solution and control of incidents in production. Developed an application to have monitored all incidents affecting different areas of business including systems",
			"location": "Mexico City"
		}]
};

work.display = function () {

	for (var indexCount = 0; indexCount < work.jobs.length; indexCount++) {
		$("#workExperience").append(HTMLworkStart);

		var formattedEmployer = HTMLworkEmployer.replace(data, work.jobs[indexCount].employer);
		var formattedTitle = HTMLworkTitle.replace(data, work.jobs[indexCount].title);
		var formattedEmployerTitle = formattedEmployer + formattedTitle;

		$(".work-entry:last").append(formattedEmployerTitle);

		$(".work-entry:last").append(HTMLworkDates.replace(data, work.jobs[indexCount].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace(data, work.jobs[indexCount].description));
		
	}

};

var education = {
	"schools": [
		{
			"name": "La Salle University",
			"dates": "2010-2014",
			"location": "Mexico City",
			"degree": "Bachelor",
			"majors": ["Engineering Cybernetics and Computers Systems"],
			"url": ["http://www.lasalle.mx/"]
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"date": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
};

education.display = function () {
	for (var school in education.schools) {
		if(education.schools.hasOwnProperty(school)) {
			$("#education").append(HTMLschoolStart);

			$(".education-entry:last").append(HTMLschoolName.replace(data, education.schools[school].name) + HTMLschoolDegree.replace(data, education.schools[school].degree));
			$(".education-entry:last").append(HTMLschoolDates.replace(data, education.schools[school].date));
			$(".education-entry:last").append(HTMLschoolLocation.replace(data, education.schools[school].location));

			for (var indexCount = 0; indexCount < education.schools[school].majors.length; indexCount++) {
				$(".education-entry:last").append(HTMLschoolMajor.replace(data, education.schools[school].majors[indexCount]));
			}
		}
	}

	for (var onlineCourse in education.onlineCourses) {
		if(education.onlineCourses.hasOwnProperty(onlineCourse)) {
			$(".education-entry:last").append(HTMLonlineClasses);

			$(".education-entry:last").append(HTMLonlineTitle.replace(data, education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace(data, education.onlineCourses[onlineCourse].school));
			$(".education-entry:last").append(HTMLonlineDates.replace(data, education.onlineCourses[onlineCourse].dates));
			$(".education-entry:last").append(HTMLonlineURL.replace(data, education.onlineCourses[onlineCourse].url));
		}
	}

};


var projects = {
	"projects": [
		{
			"title": "School web site",
			"dates": "2016",
			"description": "A Responsive website, using bootstrap",
			"images": ["images/schoolWebsite/inicio.jpg", "images/schoolWebsite/inscripciones.jpg", "images/schoolWebsite/fin.jpg"]
		}
	]
	
};

projects.display = function () {
	for (var project in projects.projects) {
		if(projects.projects.hasOwnProperty(project)) {
			$("#projects").append(HTMLprojectStart);

			$(".project-entry:last").append(HTMLprojectTitle.replace(data, projects.projects[project].title));
			$(".project-entry:last").append(HTMLprojectDates.replace(data, projects.projects[project].dates));
			$(".project-entry:last").append(HTMLprojectDescription.replace(data, projects.projects[project].description));

			for (var image in projects.projects[project].images) {
				if(projects.projects[project].images.hasOwnProperty(image)) {
	  				$(".project-entry:last").append(HTMLprojectImage.replace(data, projects.projects[project].images[image]));
	  			}
			}
		}

	}

};



bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
