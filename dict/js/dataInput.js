// Введите или выберите дату вступления в силу электронного полиса

$(document).ready(function(){
    var today, datepicker;
    today = new Date(new Date().getFullYear(), new Date().getMonth(), new Date().getDate());
    datepicker = $('.datepicker').datepicker({
      minDate: today,
      format: 'dd.mm.yyyy'
    });
});