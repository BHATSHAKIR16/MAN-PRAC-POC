//const url = "../asset/ProfileData.json";

var fetchProfileDetails = function () {
    fetch('Sarthak/DP/ProfileData.json').then(Response =>
        Response.json()).then(data => {
            setProfileDetails(data);
            console.log(data);
        })
        
}

var setProfileDetails = function (data) {
    //About Section
    document.getElementById('username').innerHTML = data.profile[0].fullname;
    document.getElementById('location').innerHTML = data.profile[0].location;
    document.getElementById('role').innerHTML = data.profile[0].role;
    document.getElementById('aboutMe').innerHTML = data.profile[0].about.aboutMe;
    document.getElementById('email').innerHTML = data.profile[0].about.email;
    document.getElementById('phone').innerHTML = data.profile[0].about.phone;
    document.getElementById('mf').innerHTML = data.profile[0].about.memberFirm;
    document.getElementById('gl').innerHTML = data.profile[0].about.globalLevel;
    document.getElementById('gb').innerHTML = data.profile[0].about.globalBusiness;
    document.getElementById('gi').innerHTML = data.profile[0].about.globalIndustries;
    document.getElementById('cc').innerHTML = data.profile[0].about.costcenter;
    document.getElementById('tenure').innerHTML = data.profile[0].about.tenure;
    
    //Past Projects Section
    document.getElementById('p1').innerHTML = data.profile[0].projects[0];
    document.getElementById('p2').innerHTML = data.profile[0].projects[1];
    document.getElementById('p3').innerHTML = data.profile[0].projects[2];

    //Skills Section
    document.getElementById('s1').innerHTML = data.profile[0].skills[0];
    document.getElementById('s2').innerHTML = data.profile[0].skills[1];
    document.getElementById('s3').innerHTML = data.profile[0].skills[2];
    document.getElementById('s4').innerHTML = data.profile[0].skills[3];
    document.getElementById('s5').innerHTML = data.profile[0].skills[4];
}

fetchProfileDetails();