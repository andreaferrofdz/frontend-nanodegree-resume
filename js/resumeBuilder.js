/*
This is empty on purpose! Your code to build the resume will go here.
 */

var bio = {
	"name": "Andrea Ferro",
	"role": "Web Developer",
	"contactInfo": {
		"mobile": "5512954423",
		"email": "andreaferrofdz@gmail.com",	
		"github": "andreaferrofdz",
		"location": "Mexico City"
	},
	"picture": "images/andrea.jpg",
	"welcomeMsg": "The time to be awesome is now!!!",
	"skills": ["html","css","asp.net", "sql","oracle", "c#", "vb"]
}

bio.display = function() {

	var formattedName = HTMLheaderName.replace("%data%", "Andrea Ferro");
	var formattedRole = HTMLheaderRole.replace("%data%", "Web Developer");

	$("#header").prepend(formattedRole);
	$("#header").prepend(formattedName);

	$("#topContacts").prepend(HTMLlocation.replace("%data%", bio.contactInfo.location));
	$("#topContacts").prepend(HTMLgithub.replace("%data%", bio.contactInfo.github));
	$("#topContacts").prepend(HTMLemail.replace("%data%", bio.contactInfo.email));
	$("#topContacts").prepend(HTMLmobile.replace("%data%", bio.contactInfo.mobile));

	$("#header").append(HTMLbioPic.replace("%data%", bio.picture));
	$("#header").append(HTMLwelcomeMsg.replace("%data%", bio.welcomeMsg));

	$("#header").append(HTMLskillsStart);

	for (skill in bio.skills) {
	  	$("#skills").append(HTMLskills.replace("%data%", bio.skills[skill]));
	}

}

var work = {
	"jobs": [
		{
			"employer": "Me",
			"title": "Freelacer",
			"dates": "2016 - Future",
			"description": "Development and supporting web applications."
		},
		{
			"employer": "TNS",
			"title": "Web Developer",
			"dates": "2015 - 2016",
			"description": "Development and supporting web applications. Creating database tables, queries and scripts on multiple DBMS (SQL Server, MYSQL). Management of change control for multiple environments (DEV, UAT and PROD). Organization and monitoring of SIT and UAT testings."
		},
		{
			"employer": "JP Morgan Chase",
			"title": "Trainee, Application Delivery Mexico",
			"dates": "2013 - 2015",
			"description": "Development and supporting BI processes using Pentaho tool for regulatory reporting of finance, operations and accounting. Development and support of macros for reporting purposes. Help with the support in front and middle office on the trading floor. Creating database tables, queries and scripts on multiple DBMS (Oracle, Sybase, SQL Server). Management of change control for multiple environments (DEV, UAT and PROD). Organization and monitoring of SIT and UAT testings. Solution and control of incidents in production. Developed an application to have monitored all incidents affecting different areas of business including systems"
		}
	]


}

work.display = function () {

	for (job in work.jobs) {
	 	$("#workExperience").append(HTMLworkStart);

	 	var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[job].employer);
	 	var formattedTitle = HTMLworkTitle.replace("%data%", work.jobs[job].title);
	 	var formattedEmployerTitle = formattedEmployer + formattedTitle;

	 	$(".work-entry:last").append(formattedEmployerTitle);

	 	$(".work-entry:last").append(HTMLworkDates.replace("%data%", work.jobs[job].dates));
		$(".work-entry:last").append(HTMLworkDescription.replace("%data%", work.jobs[job].description));
	}

}

var education = {
	"schools": [
		{
			"name": "La Salle University",
			"dates": "2010-2014",
			"location": "Mexico City",
			"degree": "Bachelor",
			"major": "Engineering Cybernetics and Computers Systems"
		}
	],
	"onlineCourses": [
		{
			"title": "Front-End Web Developer Nanodegree",
			"school": "Udacity",
			"dates": "2016",
			"url": "https://www.udacity.com/course/front-end-web-developer-nanodegree--nd001"
		}
	]
}

education.display = function () {
	for (school in education.schools) {

		$("#education").append(HTMLschoolStart);

		$(".education-entry:last").append(HTMLschoolName.replace("%data%", education.schools[school].name) + HTMLschoolDegree.replace("%data%", education.schools[school].degree));
		$(".education-entry:last").append(HTMLschoolDates.replace("%data%", education.schools[school].dates));
		$(".education-entry:last").append(HTMLschoolLocation.replace("%data%", education.schools[school].location));
		$(".education-entry:last").append(HTMLschoolMajor.replace("%data%", education.schools[school].major));
	}

	for (onlineCourse in education.onlineCourses) {

		$(".education-entry:last").append(HTMLonlineClasses);

		$(".education-entry:last").append(HTMLonlineTitle.replace("%data%", education.onlineCourses[onlineCourse].title) + HTMLonlineSchool.replace("%data%", education.onlineCourses[onlineCourse].school));
		$(".education-entry:last").append(HTMLonlineDates.replace("%data%", education.onlineCourses[onlineCourse].dates));
		$(".education-entry:last").append(HTMLonlineURL.replace("%data%", education.onlineCourses[onlineCourse].url));
	}

}


var projects = {
	"projects": [
		{
			"title": "School web site",
			"dates": "2016",
			"description": "A Responsive website, using bootstrap",
			"images": ["images/schoolWebsite/inicio.jpg", "images/schoolWebsite/inscripciones.jpg", "images/schoolWebsite/fin.jpg"]
		}
	]
	
}

projects.display = function () {
	for (project in projects.projects) {

		$("#projects").append(HTMLprojectStart);

		$(".project-entry:last").append(HTMLprojectTitle.replace("%data%", projects.projects[project].title));
		$(".project-entry:last").append(HTMLprojectDates.replace("%data%", projects.projects[project].dates));
		$(".project-entry:last").append(HTMLprojectDescription.replace("%data%", projects.projects[project].description));

		for (image in projects.projects[project].images) {
  			$(".project-entry:last").append(HTMLprojectImage.replace("%data%", projects.projects[project].images[image]));
		}

	}

}



bio.display();
work.display();
projects.display();
education.display();

$('#mapDiv').append(googleMap);
