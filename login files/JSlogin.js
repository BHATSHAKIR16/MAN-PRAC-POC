let userName=document.getElementById('uname');
let password=document.getElementById('upwd');
let errorModal = document.getElementById('errModal')
let errorMessage = document.getElementById('errorMessage')
let form = document.getElementById('form')

function validateUser(){
form.addEventListener('submit',(e)=>{
            if(userName.value=='TestUser' && password.value=='Iamtestuser'){
                errorModal.style.display='none';
              }
            else{
                e.preventDefault();
                errorModal.style.display='block'
                errorMessage.innerHTML='Invalid userID or Password'
                setTimeout(() => {
                    errorModal.style.display='none'
                }, 2000);
            }
          })
        }  