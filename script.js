const form= document.getElementById('form')

form.addEventListener('submit', function(call){
  if (fname.value === '' || fname.value === null) {
    call.preventDefault()
       const felement=document.getElementById('ferror').innerHTML='First name is required'
          ferror.style.color='red'
             ferror.style.margin='1px 100px'

}
else if (fname.value.length <5) {
  const felement=document.getElementById('ferror').innerHTML='First name cannot be less tha 5charcater'
    call.preventDefault()
        ferror.style.color='red'
            ferror.style.margin='1px 100px'

}

else{
    const felement=document.getElementById('ferror').innerHTML=''
}

if (lname.value === '' || lname.value === null) {
  call.preventDefault()
    const lelement=document.getElementById('lerror').innerHTML='Last name is required'
        lerror.style.color='red'
        lerror.style.margin='1px 100px'
}

else if (lname.value.length <5) {
    const lelement=document.getElementById('lerror').innerHTML='Last name cannot be less tha 5charcater'
    call.preventDefault()
        lerror.style.color='red'
            lerror.style.margin='1px 100px'
}

else{
    const lelement=document.getElementById('lerror').innerHTML=''
}
if (emailid.value === '' ||emailid.value === null) {
    call.preventDefault()
        const emailelement=document.getElementById('emailerror').innerHTML='Email id is required'
        emailerror.style.color='red'
        emailerror.style.margin='1px 100px'
}
   
else{
       const emailelement=document.getElementById('emailerror').innerHTML=''
}

if (dobnumber.value === '' || dobnumber.value === null) {
    call.preventDefault()
        const dobelement=document.getElementById('doberror').innerHTML='D o b is required'
        doberror.style.color='red'
            doberror.style.margin='1px 100px'
}
   
else{
    const dobelement=document.getElementById('doberror').innerHTML=''
}

if (mobnumber.value === '' || mobnumber.value === null) {
    call.preventDefault()
        const numelement=document.getElementById('numerror').innerHTML=' Mob no is required'
            numerror.style.color='red'
            numerror.style.margin='1px 100px'
}

else if (mobnumber.value.length <10) {
    const numelement=document.getElementById('numerror').innerHTML=' Mob no cannot be less tha  10 charcater'
        call.preventDefault()
        numerror.style.color='red'
            numerror.style.margin='1px 100px'
}

else{
    const numelement=document.getElementById('numerror').innerHTML=''
}
})



form.addEventListener('reset', function(reset){

if (fname.value.length >0) {
    reset.preventDefault()
    const fname= document.getElementById('fname').value=""
}

if (fname.value === '' || fname.value === null) {
    reset.preventDefault()
    const felement=document.getElementById('ferror').innerHTML=''
    
}
    
else{
    const felement=document.getElementById('ferror').innerHTML=''
}  

if (lname.value.length >0) {
    reset.preventDefault()
        const lname= document.getElementById('lname').value=""
} 

if (lname.value === '' || lname.value === null) {
    reset.preventDefault()
        const lelement=document.getElementById('lerror').innerHTML=''
    
}

else {
const lelement=document.getElementById('lerror').innerHTML=''
    reset.preventDefault()
}

if (emailid.value.length >0) {
    reset.preventDefault()
    const emailid= document.getElementById('emailid').value=""
}

if (emailid.value === '' ||emailid.value === null) {
    reset.preventDefault()
        const emailelement=document.getElementById('emailerror').innerHTML=''
}
   
if (dobnumber.value.length >0) {
    reset.preventDefault()
        const dobnum= document.getElementById('dobnumber').value=""
}

if (dobnumber.value === '' || dobnumber.value === null) {
    reset.preventDefault()
    const dobelement=document.getElementById('doberror').innerHTML=''
}

else{
    const dobelement=document.getElementById('doberror').innerHTML=''
}

if (mobnumber.value.length >0) {
    reset.preventDefault()
    const mobnum= document.getElementById('mobnumber').value=""
}

if (mobnumber.value === '' || mobnumber.value === null) {
    reset.preventDefault()
        const numelement=document.getElementById('numerror').innerHTML=' '
}
  
    
else{
    const numelement=document.getElementById('numerror').innerHTML=''
}
})


  
   