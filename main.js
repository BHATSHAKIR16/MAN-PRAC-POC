let pracHolder = document.querySelector('.practitioner')
let searchBox = document.getElementById('pracSearch')
let pracHeader = document.getElementById('pracHeader')
function enablePracSearch(){

    if(searchBox.style.display=='none'){
        searchBox.style.display='flex'
        pracHeader.style.display='none'
    }
    else{
        searchBox.style.display='none'
        pracHeader.style.display='flex'
    }
 
}
searchBox.addEventListener('input',(event)=>{
   let searchData = event.target.value;
   filterSearchData(searchData);
})

let practitionerData = function () {
    pracData = []
    fetch('practitionerInfo.json').then(Response =>
        Response.json()).then(data => {
            pracData = data
            printPracData(pracData,false);
        })
        
}
function filterSearchData(searchData){
  let resultData=[];
 resultData=pracData.filter((e)=>e.name.toLowerCase().includes(searchData.toLowerCase())
 )
 printPracData(resultData,false)
}
let courses = {
    coursesHolder : document.querySelector('.courses'),
    courseContainer : document.querySelector('.courseHolder'),
    courseSource : document.getElementById('courseSource'),
    datePosted : document.getElementById('datePosted'),
    courseTitle : document.getElementById('courseTitle'),
    courseDesc : document.getElementById('courseDesc'),
    courseLang : document.getElementById('courseLang'),
    CPE        : document.getElementById('CPE'),
    duration   : document.getElementById('duration'),
    courseImage : document.getElementById('courseImg'),
    courseID : document.getElementById('courseID'),

    // coursesHolderProposed : document.querySelector('.coursesProposed'),
    // courseContainerProposed : document.querySelector('.courseHolderProposed'),
    // courseSourceProposed : document.getElementById('courseSourceProposed'),
    // datePostedProposed : document.getElementById('datePostedProposed'),
    // courseTitleProposed : document.getElementById('courseTitleProposed'),
    // courseDescProposed : document.getElementById('courseDescProposed'),
    // courseLangProposed : document.getElementById('courseLangProposed'),
    // CPEProposed        : document.getElementById('CPEProposed'),
    // durationProposed   : document.getElementById('durationProposed'),
    getCourseData : function(){
        courseData=[]
        fetch('courseList.json').then(resposne=>
            resposne.json()).then(data=>{
                courseData=data.courseList
                addCourses(courseData);
            })
    }

}
let pracList = {
    singlePractitioner : document.querySelector('.singlePractitioner'),
    pracImage : document.getElementById('pracImg'),
    pracName : document.querySelector('.pracName'),
    pracRole : document.querySelector('.pracRole'),
    pracID : document.getElementById('pracID'),
    pracUnderline : document.querySelector('.pracUnderline')
}

function printPracData(arbData,screenAction){
    const selectemTempPracs=[];
    let selectedPracsDup = JSON.parse(JSON.stringify(selectedPracs))
    
    if(screenAction==true){
        selectedPracsDup=[]
    }
        console.log(selectedPracsDup)
        pracHolder.innerHTML=""
        // let output = ''
        for (let item of arbData) {
            pracList.pracImage.src= item.img
            pracList.pracName.innerHTML=item.name; 
            pracList.pracRole.innerHTML=item.role;
            pracList.pracID.innerHTML=item.ID;
            let clonedPrac = pracList.singlePractitioner.cloneNode(true)
            pracList.singlePractitioner.remove()
            pracHolder.appendChild(clonedPrac);
            if(selectedPracsDup.length>0){
            addSelectedPracs(selectedPracsDup,item,selectemTempPracs,clonedPrac,pracHolder);
        }
   
        // pracHolder.appendChild(clonedUnderline)
       
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
}
    function addSelectedPracs(selectedPracsDup,item,selectemTempPracs,clonedPrac,pracHolder){
        for(let pracId of selectedPracsDup){
            if(item.ID==pracId){
               const tempPrac=item;
               selectemTempPracs.push(tempPrac);
            }    
           }
           console.log(selectemTempPracs)
           for(let tempPrac of selectemTempPracs){
               if(tempPrac.ID==item.ID){
                   console.log(clonedPrac.childNodes)
                   clonedPrac.childNodes[5].style.display='block'
                   clonedPrac.style.backgroundColor='#ffffff1f'
                   pracHolder.prepend(clonedPrac);
               }
    }
}
 function addCourses(updatedCourseData,searchFunction){
    courses.courseContainer.innerHTML=''
    if(updatedCourseData.length==0){
        document.getElementById('noResults').style.display='block'
       }
       else{
        document.getElementById('noResults').style.display='none'
        for(let item of updatedCourseData){
            courses.courseSource.innerHTML=item.courseSource;
            courses.datePosted.innerHTML=item.datePosted
            courses.courseTitle.innerHTML=item.courseTitle
            courses.courseDesc.innerHTML=item.courseDesc
            courses.courseLang.innerHTML=item.courseLang
            courses.CPE.innerHTML=item.CPEcredits
            courses.duration.innerHTML=item.duration
            courses.courseImage.src=item.courseImage
            courses.courseID.innerText=item.courseID
            let cloned=courses.coursesHolder.cloneNode(true)
            courses.coursesHolder.remove()
            courses.courseContainer.appendChild(cloned)
  
       }
       }
    }
practitionerData();
courses.getCourseData();
function displayUtil(empProfile,courseContainer,performanceScreen,manageLearningScreen,screenHeading){
    printPracData(pracData,true);
    document.querySelector('.emp-profile').style.display = empProfile
    document.querySelector('.courseContainer').style.display = courseContainer
    document.querySelector('.performanceScreen').style.display = performanceScreen
    document.querySelector('.manageLearningScreen').style.display = manageLearningScreen
    document.getElementById('screenHeading').innerHTML = screenHeading
}
    let filteredCourse = []
        document.getElementById('courseField').addEventListener('input',(e)=>{
           let searchedCourse= e.target.value;
           updatedSearch=searchedCourse.split(' ').join("")
           filteredCourse=courseData.filter((e)=>{
            spacesRemoved= e.courseTitle.split(' ').join('')
             return spacesRemoved.toLowerCase().includes(updatedSearch.toLowerCase())
           })
           addCourses(filteredCourse);
        })

  //event delegation      
let selectedPractitioners=[]
function pinSelectedPracMaster (){
onePrac = document.getElementById('onePrac');
pinBtn = document.querySelector('.pin-button')
pinnedPracList = []
onePrac.addEventListener('click',(event)=>{ 

    selectedPractitioners=pinSelectedPrac(event,event.target.tagName);
    // if(!!pinnedPrac){
    //  pinnedPracID=pinnedPrac.childNodes[3].childNodes[5].innerText
    // }
   console.log(selectedPractitioners)
})
}
let selectedPracs=[]
function pinSelectedPrac(event,tagname){
    let pinButton ;
    let backgroundChange;
    if(tagname=='P'){
        pinButton=event.target.parentNode.parentNode.childNodes[5]
        backgroundChange = event.target.parentNode.parentNode;
    }
    else if(tagname == 'IMG'){
        pinButton=event.target.parentNode.childNodes[5];
        backgroundChange = event.target.parentNode
    }
    else if(event.target.className=='singlePractitioner'){
        pinButton=event.target.childNodes[5];
        backgroundChange=event.target
    }
    // else if(tagname=='Butto'){
    //     console.log(event.target)
    //     pinButton=event.target;
    // }
    else{
        pinButton=event.target.parentNode.childNodes[5];
        backgroundChange=event.target.parentNode
    }
    console.log(pinButton)
        if(pinButton.style.display=='block'){
            pinButton.style.display='none';
            backgroundChange.style.backgroundColor='#1f1f1f'
            onePrac.appendChild(backgroundChange)
            selectedPracs.pop(backgroundChange.childNodes[3].childNodes[5].innerText)
            return selectedPracs
        }
        else {
            pinButton.style.display='block';
            backgroundChange.childNodes[3].childNodes[5].style.display='none'
            backgroundChange.style.backgroundColor='#ffffff1f'
            onePrac.prepend(backgroundChange)
            selectedPracs.push(backgroundChange.childNodes[3].childNodes[5].innerText)
            return selectedPracs
        }
}

let MapCourses = {
    savedCourses : [],
    selectedCourses : [],
    mappedobj : {},
    assignButton : document.getElementById('assignbutton'),
    selectCourses : function(){
        this.selectedCourses = []
        courses.courseContainer.addEventListener('change',(event)=>{
            toggleCourse= event.target.id=='toggleCourses'
            if(toggleCourse){
                const selectedCourse=event.target.parentNode.parentNode.childNodes[1].innerText
                if(event.target.checked){
                    this.selectedCourses.push(selectedCourse)
                    console.log(this.selectedCourses)
                } 
                else{
                    this.selectedCourses.pop(selectedCourse)
                }
            }
        })
    },
    assignCourses : function(){
        let warningText=document.getElementById('warningText')
        let modalWarning=document.querySelector('.modal-warning')
        var myModal2 = new bootstrap.Modal(document.getElementById('AssignCoursesModal2'), {
            keyboard: false
          })
        this.assignButton.addEventListener('click',()=>{
            if(this.selectedCourses.length==0){
                modalWarning.style.display='block'
               warningText.innerHTML='Please select a Course first!'
               myModal2.hide()
            }
            else if(selectedPractitioners.length==0){
                modalWarning.style.display='block'
                warningText.innerHTML='Please select a Practitioner first!'
                myModal2.hide()
            }
            else{
                myModal2.show()
       
           this.mappedobj= mapPracCourses(this.selectedCourses,selectedPractitioners)
           console.log(this.mappedobj)
            }
            setTimeout(() => {
                modalWarning.style.display='none'
            }, 2000);
        })
    }

}
function filterDuplicates(arr){
    return arr.filter((el,index)=>
        arr.indexOf(el)===index)
}
let savedCourses = []
function saveCourses() {
    courses.courseContainer.addEventListener('click',(event)=>{
        courseButton= event.target.id=='courseSaveBtn'
      if(courseButton){
        singleCourseID=event.target.parentNode.parentNode.parentNode.childNodes[1].innerText
        if(event.target.src=="http://127.0.0.1:5500/assets/unsavedCourse.svg"){
            event.target.src = "assets/saveCourse.svg"
            savedCourses.pop(singleCourseID)
          
        }
        else{
            event.target.src = "assets/unsavedCourse.svg"
            savedCourses.push(singleCourseID)
           
        }
        console.log(event)
       
        console.log(savedCourses)
        return savedCourses
      }
      
    })
}
function mapPracCourses(pracs,courses){
    const courses2 = JSON.parse(JSON.stringify(courses))
    mappedObj = {}
    for(let course of courses2){
            mappedObj[course]=pracs
        }
    return mappedObj
}
// function savedCourses(){
//     let savedCourses = []
//     courses.courseContainer.addEventListener('click',(event)=>{
//         courseButton= event.target.id=='courseSaveBtn'
//       if(courseButton){
//         singleCourseID=event.target.parentNode.parentNode.parentNode.childNodes[1].innerText
//         savedCourses.push(singleCourseID)
//         console.log(savedCourses)
//       }
//     })
// }
//     function selectCourses(){
//         let selectedCourses = []
//         courses.courseContainer.addEventListener('change',(event)=>{
//             toggleCourse= event.target.id=='toggleCourses'
//             if(toggleCourse){
//                const selectedCourse=event.target.parentNode.parentNode.childNodes[1].innerText
//                 selectedCourses.push(selectedCourse)
//                 console.log(selectedCourses)
//             }
//         })
//     }
function AssignCoursesPost2(){
    ("courses assigned");
    document.getElementById('assignSpan2').innerHTML = '<span class="spinner-border spinner-border-sm" role="status" aria-hidden="true"></span>';   
    document.getElementById('submitButton1').disabled = true;
    let tableDataHolder = document.getElementById('tableDataHolder')
    let tableTr = document.getElementById('tableTr');
    let mappedCourses = JSON.parse(JSON.stringify(MapCourses.mappedobj))
   
    let pracKeys= Object.keys(mappedCourses).map(Number)
    let courseKeys = Object.values(mappedCourses)
    const firstCourseKey = courseKeys[0].map(Number)
    const filteredPracIDs=pracData.filter((item,index)=>
        item.ID==pracKeys[index])
    const filteredCourseIDs = courseData.filter((item,index)=>item.courseID==firstCourseKey[index])  
    let filteredPracNames=filteredPracIDs.map(el=>el.name)
    let filteredCourseNames = filteredCourseIDs.map(el=>el.courseTitle) 
    console.log(courseKeys)
    console.log(filteredCourseIDs)
    console.log(filteredPracNames)
    console.log(filteredCourseNames)
    for(let pracName of filteredPracNames){
        // const courseIDs = mappedCourses[pracIDs]
        let tdPrac = document.createElement('td')
        tdPrac.innerHTML=pracName
       let clonedPracTd=tdPrac.cloneNode(true)
       let clonedTr=tableTr.cloneNode(true)   
       clonedTr.appendChild(clonedPracTd)
        for(let course of filteredCourseNames){
            let tdCourse = document.createElement('td')
            tdCourse.innerHTML=course
            const clonedTd=tdCourse.cloneNode(true)
            // tableTr.appendChild(clonedTd)
            clonedTr.appendChild(clonedTd)
            tableDataHolder.appendChild(clonedTr)
            
        }     
    }
    
    //Code for post call with selectedItemsList goes here
    
    setTimeout(function() {
        document.getElementById('assignSpan2').innerHTML = "Assigned";
    }, 500);

    setTimeout(function() {
        var myModalEl = document.getElementById('AssignCoursesModal2');
        var modal = bootstrap.Modal.getInstance(myModalEl);
        modal.hide();
        document.getElementById('submitButton1').disabled = false;
        document.getElementById('assignSpan2').innerHTML = "Assign";
    }, 1500);
    setTimeout(() => {
        document.querySelector('.disp-assigned-courses').style.display='block'
        document.querySelector('.backdrop').style.display='block'
    },2000);
}
function toggleTable(){
    document.querySelector('.disp-assigned-courses').style.display='none'
    document.querySelector('.backdrop').style.display='none'
}
//filter courses on save checkbox
 document.getElementById('checkSaved').addEventListener('change',(event)=>{
    if(event.target.checked){
        console.log(savedCourses)
       let filteredCourses= filterCourses()
       console.log(filteredCourses)
       addCourses(filteredCourses);
    }
    else{
        addCourses(courseData)
    }
 })
 function filterCourses(){
    console.log(courseData)
    let tempCourses 
    const newfilteredCourses = []
    for(let course of savedCourses){
       tempCourses= courseData.filter((e)=> e.courseID==course)
       newfilteredCourses.push(tempCourses[0])
    }
  return newfilteredCourses
 }
 function toggleFilDropdown(elem){
document.querySelector('.filter-dropdown').style.display="block"
  elem.style.backgroundColor='#515151'
  elem.style.border='1px solid transparent'
 }
 function closeDropdown(){
const dropdownButton=document.querySelector('.filter-dropdown')
dropdownButton.style.display='none'
const parentDropdown= dropdownButton.parentNode.childNodes[1]
parentDropdown.style.backgroundColor='transparent'
parentDropdown.style.border='1px solid white'
//add hover event listener
    
 }

   MapCourses.assignCourses()
   MapCourses.selectCourses();
    pinSelectedPracMaster();
     saveCourses();
  
