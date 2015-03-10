// variable for storing bio of resume
var bio = {

	"name":"Sushil Mainali",
	"role":"Software Developer",
	"contacts":{
		"mobile":"3434353434",
		"email":"mainalis@gmail.com",
		"github":"smainali",
		"twitter":"sushil.mainali1",
		"blog":"sushilmainali.co.uk",
		"location":"Coventry, UK"
	},
	"welcomeMessage":"Hi, welcome to resume page of Sushil Mainali",
	"skills":["Communication","Leadership", "Adaptability"],
	"biopic":"images/aaaa.gif",
	display:function() {
					var formattedName = HTMLheaderName.replace("%data%", bio.name);
					$("#header").prepend(formattedName);
					var formattedRole = HTMLheaderRole.replace("%data%", bio.role);
					$("#header").append(formattedRole);
					var kk = [];
					var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
					var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
					var formattdTwitter = HTMLtwitter.replace("%data%", bio.contacts['twitter']);
					var formattedGithub = HTMLgithub.replace("%data%", bio.contacts['github']);
					var formattedBlog = HTMLblog.replace("%data%",bio.contacts['blog']);
					var formattedLocation = HTMLlocation.replace("%data%",bio.contacts['location']);
		
					var item = [formattedMobile, formattedEmail, formattdTwitter, formattedGithub, formattedBlog,formattedLocation];
					$("#topContacts").append(item);
					$("#header").append($("#topContacts"));
					$("#header").append($(HTMLbioPic.replace("%data%",bio.biopic)));
					
					$("#header").append($(HTMLWelcomeMsg.replace("%data%",bio.welcomeMessage)));
					//$("#header").append(HTMLskillsStart);
					$("#header").append(HTMLskillsStart);
					var formattedSkills = []
					for(skills in bio.skills) {

						//$("#header").append(HTMLskills.replace("%data%",bio.skills[skills]));
						var temp = HTMLskills.replace("%data%",bio.skills[skills]);
						$("#skills:last").append(temp);
						//formattedSkills.push(HTMLskills.replace("%data%",bio.skills[skills]));
					
					} 

					//$("#skills").append(formattedSkills);
	},
	display_footer:function(){
					var kk = [];
					var formattedMobile = HTMLmobile.replace("%data%", bio.contacts['mobile']);
					var formattedEmail = HTMLemail.replace("%data%", bio.contacts['email']);
					var formattdTwitter = HTMLtwitter.replace("%data%", bio.contacts['twitter']);
					var formattedGithub = HTMLgithub.replace("%data%", bio.contacts['github']);
					var formattedBlog = HTMLblog.replace("%data%",bio.contacts['blog']);
					var formattedLocation = HTMLlocation.replace("%data%",bio.contacts['location']);
					var item = [formattedMobile, formattedEmail, formattdTwitter, formattedGithub, formattedBlog,formattedLocation];
					$("#footerContacts:last").append(item);
	}
}

//Display content of bio
bio.display();



//variable storing work field of resume
var work = {
	"jobs" : [
		{
		"employer":"Himalayan hitech valley",
		"title":"Java programmer",
		"location":"Kathmandu, Nepal",
		"date":"2008-2009",
		"description":" Java back end web programmer"
		},
		{
		"employer":"Harper chalice group",
		"title":"Software developer",
		"location":"Coventry, United Kingdom",
		"date":"2013",
		"description":" Android and desktop application developer"
		}

	],
	display:function(){ 

			$("#workExperience").append(HTMLworkStart);
			for( item in work.jobs) {
				var formattedEmployer = HTMLworkEmployer.replace("%data%", work.jobs[item].employer);
				var formattedTitle = HTMLworkTitle.replace("%data%",work.jobs[item].title);
				 $(".work-entry:last").append(formattedEmployer + formattedTitle);
				 $(".work-entry:last").append(HTMLworkDates.replace("%data%",work.jobs[item].date));
				 $(".work-entry:last").append(HTMLworkLocation.replace("%data%",work.jobs[item].location));
				 $(".work-entry:last").append(HTMLworkDescription.replace("%data%",work.jobs[item].description));

			}
			//$("#main").append($("#workExperience"));

	}
};
//displaying work section of resume
work.display();

//variable storing project section of resume
var projects =  {
	
	"projects": [
	{

		"title":"Fence Secure Tablet App",
		"dates":"2013-2014",
		"description":" Key pad style tab to monitor fence secure devices",
		"images":["images/aaaa.gif","images/a1.gif","images/a2.gif"]
	},
	{
		"title":"Fence Secure Desktop App",
		"dates":"2013-2014",
		"description":" Desktop to monitor fence secure devices",
		"images":["images/aaaa.gif"]
	},
	{
		"title":"Fence Secure Network Controller",
		"dates":"2013-2014",
		"description":" Desktop app to read and write the setting of desktop",
		"images":["images/aaaa.gif","images/a1.gif","images/a2.gif"]
	}
	],

	display: function(){

		$("#projects").append(HTMLprojectStart);

	for (items in projects.projects) {
		

		var formattedProjectName = HTMLprojectTitle.replace("%data%", 
									projects.projects[items].title);
		var formattedYear = HTMLprojectDates.replace("%data%", 
									projects.projects[items].dates);

		var formattedDescription = HTMLprojectDescription.replace("%data%", 
									projects.projects[items].description);

		var formatedHProjectImage = HTMLprojectImage.replace("%data%", 
									projects.projects[items].images);


		$(".project-entry:last").append(
        formattedProjectName);

		$(".project-entry:last").append(
        formattedYear);

		$(".project-entry:last").append(
        formattedDescription);


		for( image in projects.projects[items].images) {
			$(".project-entry:last").append(
        		HTMLprojectImage.replace("%data%", 
									projects.projects[items].images[image]));
			//console.log(projects.projects[items].images[image]);
		}

		

		

		

	}

	}
}
//Displaying work section of resume
projects.display();

//variable storing education section of resume
var education = {
		"schools": [
				{
					"name": "Kathmandu University",
					"location": "Kavre, Nepal",
					"degree": "Bacheloar in Computer Science",
					"majors": "computer science",
					"dates": "2008",
					"url": "Ku.edu.np"
				},
				{
					"name": "Vrij University",
					"location": "Brussels, Belgium",
					"degree": "Master in Computer Science",
					"majors": "computer science",
					"dates": "2013",
					"url": "vub.ac.be"
				}
					],
		"OnlineCourse": [
				{
					"title": "Android Programming - Pattern oriented ",
					"location": "UK",
					"degree": "Android Programming",
					"school": "coursera",
					"date": "june 2014",
					"url": "https://www.coursera.org/course/androidpart3"
				},
				{
					"title": "Android Programming - Webservice",
					"location": "UK",
					"degree": "Android Programming",
					"school": "coursera",
					"date": "auguest 2014",
					"url": "https://www.coursera.org/course/androidpart2"
				},
				{
					"title": "Android Programming Hand Held devices",
					"location": "UK",
					"degree": "Android Programming",
					"school": "coursera",
					"date": "july 2014",
					"url": "https://www.coursera.org/course/androidpart1"
				},
				{
					"title": "Basic Python",
					"location": "UK",
					"degree": "Basic in Python",
					"school": "coursera",
					"date": "sept 2014",
					"url": "coursera"
				}
						],
		display: function(){	
				$("#education").append(HTMLschoolStart);

				for(item in education.schools) {
			
							var formattedSchoolName=  HTMLschoolName.replace("%data%",education.schools[item].name);
							var formatedHTMLschoolDegree = HTMLschoolDegree.replace("%data%",education.schools[item].degree);
							 $(".education-entry:last").append(formattedSchoolName + formatedHTMLschoolDegree);
							var formattedHTMLschoolDates = HTMLschoolDates.replace("%data%",education.schools[item].dates);
							$(".education-entry:last").append(formattedHTMLschoolDates);
							var formattedHTMLschoolLocation = HTMLschoolLocation.replace("%data%",education.schools[item].location);
							$(".education-entry:last").append(formattedHTMLschoolLocation);
							var formattedHTMLschoolMajor = HTMLschoolMajor.replace("%data%",education.schools[item].majors);
							$(".education-entry:last").append(formattedHTMLschoolMajor);
				}

				$(".education-entry").append(HTMLonlineClasses);


				for(item in education.OnlineCourse) {			
							var formattedSchoolName =  HTMLonlineTitle.replace("%data%",education.OnlineCourse[item].title);
							var formatedHTMLschoolDegree = HTMLonlineSchool.replace("%data%",education.OnlineCourse[item].school);
							 $(".education-entry").append(formattedSchoolName + formatedHTMLschoolDegree);
							var formattedHTMLschoolDates = HTMLonlineDates.replace("%data%",education.OnlineCourse[item].date);
							$(".education-entry").append(formattedHTMLschoolDates);
							var formattedHTMLschoolLocation = HTMLonlineURL.replace("%data%",education.OnlineCourse[item].url);
							$(".education-entry").append(formattedHTMLschoolLocation);
			
				}

		}
	}
//displaying education section of resume
education.display();

//adding mapsection to the resume
$("#mapDiv").append(googleMap);

//adding footer section of resume
bio.display_footer();




