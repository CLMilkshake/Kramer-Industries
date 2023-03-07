/* ======================================================================
  Author Custom JavaScript
====================================================================== */
// Loop through Array of Objects
var objPeople = [
	{ 
		username: "Kramer Admin",
		password: "TheFutureIsNow21"
	}

]

function getInfo() {
	var username = document.getElementById("Username").value
	var password = document.getElementById('Password').value

	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!");
			var signedIn = true
			localStorage.setItem("signedIn", signedIn);
			localStorage.setItem("user", username);
			// stop the function if this is found to be true
			window.location = "https://clmilkshake.github.io/Kramer-Industries/index.html"
			return
		}
	}
	console.log("incorrect username or password")
	console.log(username);
	console.log(password);
	var element = document.getElementById("incorrectPassword");
	element.style.opacity = "1";
}

function createAccount()
{
	var username = document.getElementById('createUsername').value
	var password = document.getElementById('createPassword').value
	
	for(var i = 0; i < objPeople.length; i++) {
		// check is user input matches username and password of a current index of the objPeople array
		if(username == objPeople[i].username && password == objPeople[i].password) {
			console.log(username + " is logged in!!!")
			
            document.getElementById("Username").innerHTML = username;
			var signedIn = true
			localStorage.setItem("user", username);
			// stop the function if this is found to be true
			window.location = "https://clmilkshake.github.io/Labcraft/index.html"
			return
		}
	}

	console.log("incorrect username or password")
	var element = document.getElementById("incorrectPassword");
	element.style.opacity = "1";
}