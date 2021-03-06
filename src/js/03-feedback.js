import throttle from 'lodash.throttle';


const submit = document.querySelector('.feedback-form')
submit.addEventListener('input',throttle(onInput), 500)

submit.addEventListener('submit', onSend)
let obj = {}
rememberForm()
function onSend(event){
    event.preventDefault()
   
    const {email, message} = event.target.elements
    if (!email.value || !message.value) {
        alert('Заполните форму')
        return
    }
       submit.reset()
       localStorage.clear()
       console.log(obj);
       obj = {}; 
}

function onInput(event) {
 
  
    obj[event.target.name]=event.target.value

    localStorage.setItem("feedback-form-state", JSON.stringify(obj))

}


function rememberForm(){
  let storageValues = localStorage.getItem("feedback-form-state")
  if(storageValues){
    storageValues = JSON.parse(storageValues)
    

    Object.entries(storageValues).forEach(([name, value])=>{
   
    obj[name] = value
    submit.elements[name].value = value
    
  })
  }
}





