const republic =  document.querySelector('#republic')
const osagoResident = document.querySelector('#osagoResident')
const nonResident = document.querySelector('.nonResident')
const republicOff = document.querySelector('.republic')
const nonResidentButton = document.querySelector('.nonResidentButton')
const nonResidentText = document.querySelector('.nonResidentText')
const individuals = document.querySelector('.individuals')
const osagoChick = document.querySelector('#osagoChick')
const osagoChekNone = document.querySelector('.osagoChekNone')
const osagoChekbutton = document.querySelector('.osagoChekbutton')
const osagoChekbuttonNone = document.querySelector('.osagoChekbuttonNone')
const osagoModelMax = document.querySelector('.osagoModelMax')
const osagoAdd = document.querySelector('.osagoAdd')
const osagoAddItem = document.querySelector('.osagoAddItem')
const osagoAddDileti = document.querySelector('.osagoAddDileti')
nonResident.style.display = 'none'
republicOff.style.display = 'block'
nonResidentButton.style.display = 'block'
nonResidentText.style.display = 'block'
individuals.style.display = 'none'
osagoChekNone.style.display = 'none'
osagoModelMax.style.display = 'none'
osagoChekbutton.style.display = 'none'
osagoAddItem.style.display = 'none'


if(republic){
    const republicinput = republic.querySelectorAll('input')
    for(let i = 0; i <  republicinput.length;i++){
        republicinput[i].onclick = () => {
            if(republicinput[i].value == 'off'){
                nonResident.style.display = 'block'
                republicOff.style.display = 'none'
                individuals.style.display = 'none'
                nonResidentButton.style.display = 'none'
                nonResidentText.style.display = 'none'
            }else if(republicinput[i].value == 'on'){
                republicOff.style.display = 'block'
                nonResident.style.display = 'none'
                nonResidentButton.style.display = 'block'
                nonResidentText.style.display = 'block'
            }else{
                 console.log('Not funt')
            }
        }
    }
}

if(osagoResident){
    const inputMax = document.querySelectorAll('#osagoResident label input')
    const inputTextNotFunt = document.querySelectorAll('#osagoResident label h4')
    nonResidentButton.willValidate = false

    nonResidentButton.onclick = () => {
        for(let i = 0; i < inputMax.length; i++){
            if(inputMax[0].value.length >= inputMax[0].maxLength && inputMax[1].value.length >= inputMax[1].maxLength && inputMax[2].value.length >= inputMax[2].maxLength){
                inputTextNotFunt[i].className = 'osago__passport__title__none'
                nonResidentButton.willValidate = true
                nonResidentButton.style.display = 'none'
                nonResidentText.style.display = 'none'
                individuals.style.display = 'block'
            }else if(inputMax[i].value.length > 1){
                inputTextNotFunt[i].className = 'osago__passport__title__h4'
                individuals.style.display = 'none'
                nonResidentButton.style.display = 'block'
                nonResidentText.style.display = 'block'
            }
            
            else{
                inputTextNotFunt[i].className = 'osago__passport__title__h4'
                individuals.style.display = 'none'
                nonResidentButton.style.display = 'block'
                nonResidentText.style.display = 'block'
            }
        }
    }
}

osagoChick.onclick = () => {
    if(osagoChick.checked == true){
        osagoChekNone.style.display = 'block'
        osagoChekbuttonNone.style.display = 'none'
        osagoChekbutton.style.display = 'block'
    }else if (osagoChick.checked == false){
        osagoChekNone.style.display = 'none'
        osagoChekbuttonNone.style.display = 'flex'
        osagoChekbutton.style.display = 'none'
    }
}

osagoAdd.onclick = () => {
    osagoAddItem.style.display = 'block'
}

osagoAddDileti.onclick = () => {
    osagoAddItem.style.display = 'none'
}

if(osagoChekNone){
    const osagoChekNoneinputLabael = document.querySelectorAll('.osagoChekNone label input')
    const osagoChekNoneNotFunt = document.querySelectorAll('.osagoChekNone label h4')
    osagoChekbutton.onclick = () =>{
        for(let i = 0; i < osagoChekNoneinputLabael.length;i++){
            if(osagoChekNoneinputLabael[0].value.length >= osagoChekNoneinputLabael[0].maxLength && osagoChekNoneinputLabael[1].value.length >= osagoChekNoneinputLabael[1].maxLength && osagoChekNoneinputLabael[2].value.length >= osagoChekNoneinputLabael[2].maxLength){
                osagoChekNoneNotFunt[i].className = 'osago__passport__title__none'
                osagoChekbuttonNone.style.display = 'flex'
                osagoModelMax.style.display = 'block'
                osagoChekbutton.style.display = 'none'
            }else if(osagoChekNoneinputLabael[i].value.length >= 0){
                osagoChekNoneNotFunt[i].className = 'osago__passport__title__h4'
                osagoModelMax.style.display = 'none'
                osagoChekbuttonNone.style.display = 'none'
                osagoChekbutton.style.display = 'block'
            }else{
                console.log('Not funt')
            }
        }
    }
}