let bg = document.getElementById("bg");
let rockwall = document.getElementById("rockwall");
let text = document.getElementById("text");
window.addEventListener("scroll", function () {
	var value = window.scrollY;
	bg.style.top = value * 0.5 + "px";
	rockwall.style.top = value * 0.15 + "px";
	text.style.top = value * 1 + "px";
});

let projectTitle = document.getElementById("project-title");
let projectText = document.getElementById("project-text");
let projectCodeLink = document.getElementById("project-code");
let projectDeployedLink = document.getElementById("project-deployed-app");
let projectTechnologies = document.getElementById("technologies");
function modal(id, projectID) {
	let el = document.getElementById(id); // can also use a query selector
	el.classList.add("on");
	let body = document.querySelector("body");
	let bg = document.createElement("div");
	bg.className = "modal-js-overlay";

	body.appendChild(bg);

	let close = document.createElement("span");
	el.appendChild(close);
	close.className = "modal-js-close";
	close.innerHTML = "x";
	close.addEventListener("click", function () {
		let overlay = body.querySelector(".modal-js-overlay");
		let closebtn = body.querySelector(".modal-js-close");
		projectText.innerHTML = "";
		body.removeChild(overlay);

		el.classList.remove("on");
		el.removeChild(closebtn);
	});

	switch (projectID) {
		case "siteseers":
			projectTitle.innerHTML = "SiteSeers";
			projectText.innerHTML = `Site seers is single page web application that connects users looking for campsites and hosts. This project was created using React, Node, an Express server and a Mongo Database. In this app, users can sign up and log in. Their information is saved on our database and protected using JSON Web Tokens. Once logged in user's can manage and edit their profile, add campsite listings, browse listings by city, and make reservations.`;
			projectTechnologies.innerHTML = `
					<li>React</li>
					<li>Excalidraw</li>
					<li>Axios</li>
					<li>Cloudinary</li>
					<li>Node.js</li>
					<li>Express.js</li>
					<li>GraphQL</li>
					<li>Mongoose</li>
					<li>Web-Vitals</li>
					<li>NoSQL</li>
					<li>Apollo</li>
					<li>HTML</li>
					<li>JavaScript</li>
					<li>CSS</li>
				`;
			projectCodeLink.setAttribute(
				"href",
				"https://github.com/jorge30fm/SiteSeers"
			);
			projectDeployedLink.setAttribute(
				"href",
				"https://stark-journey-76834.herokuapp.com/login"
			);
			break;
		case "shop-shop":
			projectTitle.innerHTML = "Shop-shop";
			projectText.innerHTML = `Shop-shop is an e-commerce platform that allows users to browse products, add them to a shopping cart and make purchases as desired. This single page application was created using the React framework; its data is centralized in state globally to make it easier to share state across the entire application.`;
			projectTechnologies.innerHTML = `
			<li>React</li>
			<li>Node</li>
			<li>Stripe</li>
			<li>GraphQL</li>
			<li>Mongo DB </li>
			<li>Express</li>
			<li>Mongoose</li>
			<li>HTML</li>
					<li>JavaScript</li>
					<li>CSS</li>`;
			projectCodeLink.setAttribute(
				"href",
				"https://github.com/jorge30fm/shop-shop"
			);
			projectDeployedLink.setAttribute("href", "https://fathomless-falls-26947.herokuapp.com/");
			break;
		case "deep-thoughts":
			projectTitle.innerHTML = "Deep-Thoughts";
			projectText.innerHTML = `Deep-thoughs is a social media single page application. Users can create an account, post their thoughts for others to see, and interact with other users by adding them as friends and posting reactions to their thoughts. Users information is protected using bcrypt and json web tokens to communicate with the back the backend server`;
			projectTechnologies.innerHTML = `
			<li>React</li>
			<li>Express</li>
			<li>Mongo DB </li>
			<li>GraphQL</li>
			<li>NoSQL</li>
			<li>Mongoose</li>
			<li>JWT</li>
			<li>Node</li>
			<li>bcrypt</li>
			<li>HTML</li>
					<li>JavaScript</li>
					<li>CSS</li>`;
			projectCodeLink.setAttribute(
				"href",
				"https://github.com/jorge30fm/deep-thoughts"
			);
			projectDeployedLink.setAttribute(
				"href",
				"https://hidden-anchorage-50418.herokuapp.com/"
			);
			break;
		case "budget-tracker":
			projectTitle.innerHTML = "Budget-Tracker";
			projectText.innerHTML = `This Progressive Web Application is for avid travelers who wants to track their withdrawals, and deposits with or without a data/internet connection so that their account balance is accurate when traveling. Users can track their withdrawals and deposits with or without a data/internet connection. They can also download the app onto their devices for frequent use`;
			projectTechnologies.innerHTML = `
			<li>PWA</li>
			<li>Webpack</li>
			<li>Node</li>
			<li>Service Worker</li>
			<li>Indexed DB</li>
			<li>Manifest</li>
			<li>Express</li>
			<li>MongoDB</li>
			<li>Heroku</li>
			<li>HTML</li>
			<li>JavaScript</li>
			<li>CSS</li>`;
			projectCodeLink.setAttribute(
				"href",
				"https://github.com/jorge30fm/budget-tracker"
			);
			projectDeployedLink.setAttribute(
				"href",
				"https://blooming-sands-76583.herokuapp.com/"
			);
			break;
		case "weather-dashboard":
			projectTitle.innerHTML = "Weather Dashboard";
			projectText.innerHTML = `Weather Dashboard is a weather forecasting app that uses the power of openweather API. Users can find information about a city of their choice and see current weather conditions and a five day forecast. Searches are saved to local storage for easier access upon future application use.`;
			projectTechnologies.innerHTML = `
			<li>HTML</li>
			<li>JavaScript</li>
			<li>CSS</li>
			<li>OpenWeather API</li>
			<li>Moment.js</li>
			<li>jQuery</li>
			<li>Local Storage</li>
			<li>Bootstrap</li>`;
			projectCodeLink.setAttribute(
				"href",
				"https://github.com/jorge30fm/weather-dashboard"
			);
			projectDeployedLink.setAttribute(
				"href",
				"https://jorge30fm.github.io/weather-dashboard/"
			);
			break;
		case "furbaby-finder":
			projectTitle.innerHTML = "Furbaby Finder";
			projectText.innerHTML = `Furbaby Finder is a Tinder style website that helps you match with your preffered 'Fur Baby'. Open the app, input desired search criteria and browse pets up for adoption. Users can filter based on type of pet, gender, and distance from zipcode. Adoption listings can be saved for future use and deleted if the user has a change of mind`;
			projectTechnologies.innerHTML = `
			<li>HTML</li>
			<li>CSS</li>
			<li>JavaScript</li>
			<li>BootStrap</li>
			<li>PetFinder API</li>
			<li>DogFacts API</li>
			<li>Local Storage</li>`;
			projectCodeLink.setAttribute("href", "https://github.com/jorge30fm/furbaby_finder");
			projectDeployedLink.setAttribute("href", "https://jorge30fm.github.io/furbaby_finder/");
			break;
	}
}
