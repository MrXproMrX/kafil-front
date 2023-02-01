const osago = document.querySelector('.osago__cart__osago6')
const republic =  document.querySelector('#republic')
const osagoResident = document.querySelector('#osagoResident')
const nonResident = document.querySelector('.nonResident')
const republicOff = document.querySelector('.republic')
const nonResidentButton = document.querySelector('.nonResidentButton')
const nonResidentText = document.querySelector('.nonResidentText')
const individuals = document.querySelector('.individuals')
const osagoChekNone = document.querySelector('.osagoChekNone')
const osagoChekbutton = document.querySelector('.osagoChekbutton')

if(osago){
    nonResident.style.display = 'none'
    republicOff.style.display = 'block'
    nonResidentButton.style.display = 'block'
    nonResidentText.style.display = 'block'
    individuals.style.display = 'none'
}

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

if(osagoChekNone){
    const osagoChekNoneinputLabael = document.querySelectorAll('.osagoChekNone label input')
    const osagoChekNoneNotFunt = document.querySelectorAll('.osagoChekNone label h4')
    osagoChekbutton.onclick = () =>{
        for(let i = 0; i < osagoChekNoneinputLabael.length;i++){
            if(osagoChekNoneinputLabael[0].value.length >= osagoChekNoneinputLabael[0].maxLength && osagoChekNoneinputLabael[1].value.length >= osagoChekNoneinputLabael[1].maxLength && osagoChekNoneinputLabael[2].value.length >= osagoChekNoneinputLabael[2].maxLength){
                osagoChekNoneNotFunt[i].className = 'osago__passport__title__none'
                osagoChekbutton.style.display = 'none'
            }else if(osagoChekNoneinputLabael[i].value.length >= 0){
                osagoChekNoneNotFunt[i].className = 'osago__passport__title__h4'
                osagoChekbutton.style.display = 'block'
            }else{
                console.log('Not funt')
            }
        }
    }
}

// --------------

const modalsInput = document.querySelector(".modalsInput");
const modalsButton = document.querySelector(".modalsButton");
const modaLcountry = document.querySelector('.modaLcountry');
const osagoModalsCart = document.querySelector('.osago__modals__cart');

if(modalsInput){
    const modalsInputClich = modalsInput.querySelectorAll('input')

    modalsButton.onclick = () => {
        osagoModalsCart.className = 'osago__modals__cart'
        for(let i = 0; i <  modalsInputClich.length;i++){
            modalsInputClich[i].value = ""
            modaLcountry.value = modaLcountry[0].value
        }
    }
}


const checkboxNone = document.querySelector('.checkboxNone');
const buttonDisabled = document.querySelector('.buttonDisabled');

if(checkboxNone){
  buttonDisabled.disabled = !checkboxNone.checked
  if( buttonDisabled.disabled){
    buttonDisabled.style.backgroundColor = '#d6292dd6'
    buttonDisabled.style.cursor = 'not-allowed'
  }

  checkboxNone.onclick = () => {

    if(checkboxNone.checked == true){
      buttonDisabled.disabled = !checkboxNone.checked
      buttonDisabled.style.backgroundColor = '#D6292D'
      buttonDisabled.style.cursor = 'pointer'
    }

    if(checkboxNone.checked == false){
      buttonDisabled.disabled = !checkboxNone.checked
      buttonDisabled.style.backgroundColor = '#d6292dd6'
      buttonDisabled.style.cursor = 'not-allowed'
    }

  }
}