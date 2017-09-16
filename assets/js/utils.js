function myNavBar() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

function writeText() {
    document.getElementById("problem").innerHTML = "Although youths are understandably less economically active in the traditional sense at the onset of their eligibility to enter the labour force, employment in these formative years is nevertheless crucial for nurturing ones career development. Being young and unemployed can lead to increase in the risk of poverty, deskilling and social exclusion as well as cause loss of motivation and mental health problems.";

    document.getElementById("problemfocus").innerHTML = "Online Job sourcing is a problem! Inefficient, Outdated methodologies, Small target clientele SMES & Individuals barely catered for No more space for Walk-Ins Door-Door Cv in hand job Applications, waste resources Provide no guarantee Lack of Dedicated micro-job platforms Bridging the opportunity gap";
    
    document.getElementById("solution").innerHTML = "A Convenient & efficient micro-job platform targetting persons aged 16-25 with low/medium skills Small and Medium Enterprises with temp/permanent work such as catering companies or restaurants. Users are conveniently notified of a job proposition match. Job posters can efficiently add a new job offering.";
}

window.onload = function() {
    writeText();
    document.getElementById("onClick").addEventListener("click", myNavBar);
}
