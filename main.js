let pracHolder = document.querySelector('.practitioner')
let searchBox = document.getElementById('searchBox')
pracData = []
courseData = []
searchBox.addEventListener('input',(event)=>{
   let searchData = event.target.value;
   console.log(searchData);
   filterSearchData(searchData);
})
function filterSearchData(searchData){
    pracData.filter((res)=>{
      return res.name.toLowerCase().includes(searchData);
    })
}

let practitionerData = function () {
    fetch('practitionerInfo.json').then(Response =>
        Response.json()).then(data => {
            pracData = data
            console.log(pracData)
            printPracData();
        })
        
}
let courses = {
    courseData : [],
    coursesHolder : document.querySelector('.courses'),
    courseContainer : document.querySelector('.courseHolder'),
    courseSource : document.getElementById('courseSource'),
    datePosted : document.getElementById('datePosted'),
    courseTitle : document.getElementById('courseTitle'),
    courseDesc : document.getElementById('courseDesc'),
    courseLang : document.getElementById('courseLang'),
    CPE        : document.getElementById('CPE'),
    duration   : document.getElementById('duration'),

    coursesHolderProposed : document.querySelector('.coursesProposed'),
    courseContainerProposed : document.querySelector('.courseHolderProposed'),
    courseSourceProposed : document.getElementById('courseSourceProposed'),
    datePostedProposed : document.getElementById('datePostedProposed'),
    courseTitleProposed : document.getElementById('courseTitleProposed'),
    courseDescProposed : document.getElementById('courseDescProposed'),
    courseLangProposed : document.getElementById('courseLangProposed'),
    CPEProposed        : document.getElementById('CPEProposed'),
    durationProposed   : document.getElementById('durationProposed'),
    getCourseData : function(){
        fetch('courseList.json').then(resposne=>
            resposne.json()).then(data=>{
                courses.courseData=data.courseList
                console.log(courseData)
                addCourses();
            })
    }

}

printPracData = function(){
    let output = ''
    for (let item of pracData) {
        // let singlePrac=document.createElement('div').setAttribute("class","singlePrac");
        // // singlePrac.setAttribute("class","singlePrac")
        // let pracImage=document.createElement('img').setAttribute('src',item.img)
        // let pracDef1 = document.createElement('div').setAttribute('class','singlePractitioner')
        // let pracDef=document.createElement('p').innerHTML=item.name
        // // pracDef1.appendChild(pracDef)
        // // singlePrac.appendChild(pracImage)
        // // singlePrac.appendChild(pracDef1)
        // // pracHolder.appendChild(pracDef)
        output += `
    <div class = "singlePractitioner">
    <img width = '45' height = '45' src = "${item.img}">
     <div class = "pracDef">
       <p class = 'pracName'>${item.name}</p>
       <p class = "pracRole">${item.role}</p>
     </div>
    </div>     
    <div class = "pracUnderline">
    </div>
    `;
    
    pracHolder.innerHTML=output;
    }
    console.log(pracData)
    }
 let addCourses = function(){
       for(let item of courses.courseData){
          courses.courseSource.innerHTML=item.courseSource;
          courses.datePosted.innerHTML=item.datePosted
          courses.courseTitle.innerHTML=item.courseTitle
          courses.courseDesc.innerHTML=item.courseDesc
          courses.courseLang.innerHTML=item.courseLang
          courses.CPE.innerHTML=item.CPEcredits
          courses.duration.innerHTML=item.duration
          let cloned=courses.coursesHolder.cloneNode(true)
          courses.coursesHolder.remove()
          courses.courseContainer.appendChild(cloned)

          courses.courseSourceProposed.innerHTML=item.courseSource;
          courses.datePostedProposed.innerHTML=item.datePosted
          courses.courseTitleProposed.innerHTML=item.courseTitle
          courses.courseDescProposed.innerHTML=item.courseDesc
          courses.courseLangProposed.innerHTML=item.courseLang
          courses.CPEProposed.innerHTML=item.CPEcredits
          courses.durationProposed.innerHTML=item.duration
          let clonedProposed=courses.coursesHolderProposed.cloneNode(true)
          courses.coursesHolderProposed.remove()
          courses.courseContainerProposed.appendChild(clonedProposed)
       }
    }
practitionerData();
courses.getCourseData();
function displayUtil(empProfile,courseContainer,performanceScreen,manageLearningScreen,screenHeading){
    document.querySelector('.emp-profile').style.display = empProfile
    document.querySelector('.courseContainer').style.display = courseContainer
    document.querySelector('.performanceScreen').style.display = performanceScreen
    document.querySelector('.manageLearningScreen').style.display = manageLearningScreen
    document.getElementById('screenHeading').innerHTML = screenHeading
}
