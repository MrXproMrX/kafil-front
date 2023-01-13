const App = {
    data(){
        return{
            inputSeries:'',
            inputSeriesLength:false,

            inputNumber:'',
            inputNumberLength:false,

            inputGovernment:'',
            inputGovernmentLength:false,
            
            phoneInput:'+998',
            phoneInputLength:false,

            passportSeries:'',
            passportSeriesLength:false,

            enterNumber:'',
            enterNumberLength:false,

            dateMax:'',
            dateMaxLength:false,

            validUntil:'',
            validUntilLength:false,

            republic:'on',
            OwnerOpen:false,
            formOpen:false,
            passportSeriesOpen:false,
            pushLink:false,

            AddDriver:0,
            AddDriverCheck:'maxOff',
            Iagree:false,

        }
    },

    methods: {
        addPassport(){
            if(this.inputSeries.length >= 0){
                this.inputSeriesLength = true
            }

            if(this.inputNumber.length >= 0){
                this.inputNumberLength = true
            }

            if(this.inputGovernment.length >= 0){
                this.inputGovernmentLength = true
            }

            if(this.inputSeries.length == 3 && this.inputNumber.length == 7 &&  this.inputGovernment.length  == 8){
                this.formOpen = true
            }else{
                this.formOpen = false
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Сервис Eosgouz вернул ошибку: Необходимо отправлять корректные данные\r\nНомер тех. паспорта -> должна быть цифра, \r\n',
                })
            }
        },

        individualsAdd(){
            if(this.phoneInput.length >= 0){
                this.phoneInputLength = true
            }

            if(this.passportSeries.length >= 0){
                this.passportSeriesLength = true
            }

            if(this.enterNumber.length >= 0){
                this.enterNumberLength = true
            }

            if(this.dateMax.length >= 0){
                this.dateMaxLength = true
            }

            if(this.passportSeries.length == 2 && this.enterNumber.length == 7 && this.dateMax.length == 10){
                this.passportSeriesOpen = true
            }else{
                this.passportSeriesOpen = false
                Swal.fire({
                    icon: 'error',
                    title: 'Error',
                    text: 'Сервис Eosgouz вернул ошибку: Необходимо отправлять корректные данные\r\nНомер тех. паспорта -> должна быть цифра, \r\n',
                })
            }

            if(this.passportSeries.length == 2 && this.enterNumber.length == 7 && this.dateMax.length == 10){
                this.pushLink = true
            }
        },

        legalEntityAdd(){
            if(this.phoneInput.length >= 0){
                this.phoneInputLength = true
            }

            if(this.passportSeries.length >= 0){
                this.passportSeriesLength = true
            }

            if(this.enterNumber.length >= 0){
                this.enterNumberLength = true
            }

            if(this.dateMax.length >= 0){
                this.dateMaxLength = true
            }

            if(this.passportSeries.length == 2 && this.enterNumber.length == 7 && this.dateMax.length == 10){
                this.passportSeriesOpen = true
            }else{
                this.passportSeriesOpen = false
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }
        },

        AddDriverCounter(){
            this.AddDriver ++
            
            if(this.AddDriver >= 5 && this.AddDriverCheck == 'maxOff'){
                this.AddDriver = 5
            }else if(this.AddDriverCheck == 'maxOn'){
                this.AddDriver
            }
        },

        AddDriverOff(){
            this.AddDriver --
            if(this.AddDriver < 0 ){
                this.AddDriver = 0
            }
        },

        NonResidentForm(){
            if(this.passportSeries.length >= 0){
                this.passportSeriesLength = true
            }

            if(this.enterNumber.length >= 0){
                this.enterNumberLength = true
            }

            if(this.dateMax.length >= 0){
                this.dateMaxLength = true
            }

            if(this.validUntil.length >= 0){
                this.validUntilLength = true
            }

            if(this.passportSeries.length == 2 && this.enterNumber.length == 7 && this.dateMax.length == 10 && this.validUntil.length == 10){
                this.passportSeriesOpen = true
            }else{
                this.passportSeriesOpen = false
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: 'Your work has been saved',
                    showConfirmButton: false,
                    timer: 1500
                })
            }

            if(this.passportSeries.length == 2 && this.enterNumber.length == 7 && this.dateMax.length == 10){
                this.pushLink = true
            }
        }
    },
}

Vue.createApp(App).mount('#osago')