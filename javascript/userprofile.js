document.getElementById("Start").addEventListener("click", PersonalDetailsPrompt);

function PersonalDetailsPrompt() {  
    let fname = prompt("Please enter your first name:    (1/5)");
    if (fname === null) return;
    console.log("User's first name:", fname);

    let lname = prompt("Please enter your last name:        (2/5)");
    if (lname === null) return;
    console.log("User's last name:", lname);

    let age = prompt("Please enter your age:        (3/5)");
    if (age === null) return;
    console.log("User's age:", age);

    let email = prompt("Please enter your email address:        (4/5)");
    if (email === null) return;
    console.log("User's email:", email);

    let gender = prompt("Please select your gender:     (5/5)\n1. Female\n2. Male \n Enter either 1 or 2");
    if (gender === null) return;
    if (gender === "1") {
        gender = "Female";
    } else if (gender === "2") {
        gender = "Male";
    } else {
        gender = "Other"; // If user enters an invalid choice
    }
    console.log("User's gender:", gender);

    // Update the content with the user input
    document.getElementById("name").textContent = fname + " " + lname;
    document.getElementById("age").textContent = age;
    document.getElementById("email").textContent = email;
    document.getElementById("gender").textContent = gender;

    // Display the personal details section
    document.getElementById("personal-details-container").style.display = "block";

    // Add event listener for the Next button
    document.getElementById("nextButton").addEventListener("click", VolunteeringPrompt);

    // Add event listener for the "Fill Again" button
    document.getElementById("fillAgain").addEventListener("click", FillAgainPersonalDetailsPrompt);

    updateProgressBar(1, 3);
}

function FillAgainPersonalDetailsPrompt() {
    // Clear previous details
    document.getElementById("name").textContent = "";
    document.getElementById("age").textContent = "";
    document.getElementById("email").textContent = "";
    document.getElementById("gender").textContent = "";

    // Hide personal details section
    document.getElementById("personal-details-container").style.display = "none";

    // Call PersonalDetailsPrompt() again
    PersonalDetailsPrompt();
    
}

function VolunteeringPrompt() {
    let cause = prompt("What brings you to the cause :          (1/4)");
    if (cause === null) return;
    console.log("cause:", cause);

    let team = prompt(" Which volunteering team do you prefer       (2/4): \n1. Climate Education and Awareness Team\n2. Climate Policy and Advocacy Team \n3. Climate Justice and Equity Team\n4. International Climate Action Team");
    if (team === null) return;
    if (team === "1") {
        team = "Climate Education and Awareness Team";
    } else if (team === "2") {
        team = "Climate Policy and Advocacy Team";
    } else if (team === "3") {
        team = "Climate Justice and Equity Team"; // If user enters an invalid choice
    } else {
        team = "International Climate Action Team";
    }
    console.log("team:", team);

    let country = prompt("Country :     (3/4)");
    if (country === null) return;
    console.log("country:", country);

    let district = prompt("District :       (4/4)");
    if (district === null) return;
    console.log("district:", district);

    // Update the content of the spans with the user input
    document.getElementById("cause").textContent = cause;
    document.getElementById("team").textContent = team;
    document.getElementById("country").textContent = country;
    document.getElementById("district").textContent = district;

    // Display the personal details section
    document.getElementById("volunteertasks-container").style.display = "block";

    // Add event listener for the Next button
    document.getElementById("nextButton2").addEventListener("click", QualificationPrompt);

    // Add event listener for the "Fill Again" button
    document.getElementById("fillAgain1").addEventListener("click", FillAgainVolunteeringPrompt);
    updateProgressBar(2, 3);
}

function FillAgainVolunteeringPrompt() {
    // Clear previous details
    document.getElementById("cause").textContent = "";
    document.getElementById("team").textContent = "";
    document.getElementById("country").textContent = "";
    document.getElementById("district").textContent = "";

    // Hide volunteering tasks section
    document.getElementById("volunteertasks-container").style.display = "none";

    // Call VolunteeringPrompt() again
    VolunteeringPrompt();
    
}

function QualificationPrompt() {
    let university = prompt("Please enter your University :     (1/4)");
    if (university === null) return;
    console.log("university :", university);

    let degree = prompt("Please enter your highest degree:      (2/4)");
    if (degree === null) return;
    console.log("degree:", degree);

    let area = prompt("Please enter your area of study :        (3/4)");
    if (area === null) return;
    console.log("area :", area);

    let year = prompt("Please enter your completion year:       (4/4)");
    if (year === null) return;
    console.log("year :", year);

    // Update the content of the spans with the user input
    document.getElementById("uni").textContent = university;
    document.getElementById("degree").textContent = degree;
    document.getElementById("area").textContent = area;
    document.getElementById("year").textContent = year;

    // Display the qualification section
    document.getElementById("qualification-container").style.display = "block";

    // Add event listener for the Next button
    document.getElementById("nextButton3").addEventListener("click", FinalPrompt);

    // Add event listener for the "Fill Again" button
    document.getElementById("fillAgain2").addEventListener("click", FillAgainQualificationPrompt);
    updateProgressBar(3, 3);
}

function FillAgainQualificationPrompt() {
    // Clear previous details
    document.getElementById("uni").textContent = "";
    document.getElementById("degree").textContent = "";
    document.getElementById("area").textContent = "";
    document.getElementById("year").textContent = "";

    // Hide qualification section
    document.getElementById("qualification-container").style.display = "none";

    // Call QualificationPrompt() again
    QualificationPrompt();
    
}

function FinalPrompt() {
    let conditions = prompt("Do you accept the terms and conditions before you submit :\n1. Yes\n2. No");
    if(conditions===null)return;
    if (conditions === "1") {
        conditions = "Yes";
    } else if (conditions === "2") {
        conditions = "No";
    } else {
        conditions = "Other"; // If user enters an invalid choice
    }
    console.log("User's choice:", conditions);

    // Display the final section
    document.getElementById("final").style.display = "block";
}


function updateProgressBar(currentStep, totalSteps) {
    let completionPercentage = (currentStep / totalSteps) * 100;
    document.getElementById("progressBar").style.width = completionPercentage + "%";
    document.getElementById("progressBar").textContent = completionPercentage.toFixed(2) + "% completed";
}
