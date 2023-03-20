let pracHolder = document.querySelector('.practitioner')
let searchBox = document.getElementById('searchBox')
courseData = []
searchBox.addEventListener('input',(event)=>{
   let searchData = event.target.value;
   console.log(searchData);
   filterSearchData(searchData);
})

let practitionerData = function () {
    pracData = []
    fetch('practitionerInfo.json').then(Response =>
        Response.json()).then(data => {
            pracData = data
            console.log(pracData)
            printPracData(pracData);
        })
        
}
function filterSearchData(searchData){
    console.log('triggered')
  let resultData=[];
  console.log(searchData)
  console.log(pracData)
 resultData=pracData.filter((e)=>e.name.toLowerCase().includes(searchData.toLowerCase())
 )
 console.log(resultData)
 printPracData(resultData)
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
let pracList = {
    singlePractitioner : document.querySelector('.singlePractitioner'),
    pracImage : document.getElementById('pracImg'),
    pracName : document.querySelector('.pracName'),
    pracRole : document.querySelector('.pracRole'),
    pracUnderline : document.querySelector('.pracUnderline')
}

function printPracData(arbData){
    pracHolder.innerHTML=""
    // let output = ''
    for (let item of arbData) {
        pracList.pracImage.src= item.img
        pracList.pracName.innerHTML=item.name; 
        pracList.pracRole.innerHTML=item.role;
        let clonedPrac = pracList.singlePractitioner.cloneNode(true)
        let clonedUnderline = pracList.pracUnderline.cloneNode(true)
        pracList.singlePractitioner.remove()
        pracList.pracUnderline.remove()
        pracHolder.appendChild(clonedPrac);
        pracHolder.appendChild(clonedUnderline)
    //     output += `
    // <div class = "singlePractitioner">
    // <img width = '45' height = '45' src = "${item.img}">
    //  <div class = "pracDef">
    //    <p class = 'pracName'>${item.name}</p>
    //    <p class = "pracRole">${item.role}</p>
    //  </div>
    // </div>     
    // <div class = "pracUnderline">
    // </div>
    // `;
    
    // pracHolder.innerHTML=output;
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
function onPractitionerClick(){
 pracList.singlePractitioner.style.background='red'
}
