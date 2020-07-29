var btn = document.querySelector ('#btn-calcular');

btn.addEventListener ('click', function (evt) {
    evt.preventDefault ();  

    const dateStart = document.querySelector ('#termo-inicial-input').value;
    const dateEnd = document.querySelector ('#termo-final-input').value;

    const suspStart = document.querySelector ('#input-susp-1').value;
    const suspEnd = document.querySelector ('#input-susp-2').value;


    var a = moment(dateStart);
    var b = moment(dateEnd);

    var c = moment(suspStart);
    var d = moment(suspEnd);

    console.log (suspStart)


    var diffYears = b.diff(a, 'years', true); 
    var diffMonths = b.diff (a,'months', true);
    var diffDays = b.diff (a,'days', true);

    var diffYearsSusp = d.diff(c, 'years', true); 
    var diffMonthsSusp = d.diff (c,'months', true);
    var diffDaysSusp = d.diff (c,'days', true);


    var decimalYears = Math.floor (diffYears);
    var decimalMonths = Math.floor (diffMonths);
    var decimalDays = Math.floor (diffDays);

    var decimalYearsSusp = Math.floor (diffYearsSusp);
    var decimalMonthsSusp = Math.floor (diffMonthsSusp);
    var decimalDaysSusp = Math.floor (diffDaysSusp);

    const yearsResult = decimalYears - decimalYearsSusp;
    const monthsResult = decimalMonths - decimalMonthsSusp;
    const DaysResult = decimalDays - decimalDaysSusp; 


    function dateDisplay (date) {
        let dataSplit = date.split ('-', 3);
        let dataOrdem = dataSplit.reverse ();
        let dataJoin = dataOrdem.join ('/')
        return dataJoin
    }



    function functionResult1 () {
        if (decimalYears > 1) {
             return decimalYears + ' anos' + ' | ' + decimalMonths + ' meses' + ' | ' + decimalDays + ' dias'}
        if (decimalYears === 0 && decimalMonths > 1) {
             return decimalMonths + ' meses' + ' | ' + decimalDays + ' dias'}
        if (decimalYears === 0 && decimalMonths === 0 && decimalDays > 1) {
            return decimalDays + ' dias'}
        if (decimalYears === 1) {
            return decimalYears + ' ano' + ' | ' + decimalMonths + ' meses' + ' | ' + decimalDays + ' dias'}
        if (decimalYears === 0 && decimalMonths === 1) {
            return decimalMonths + ' mês' + ' | ' + decimalDays + ' dias'}
        if (decimalYears === 0 && decimalMonths === 0 && decimalDays === 1) {
            return decimalDays + ' dia'}
        if (decimalDays < 0) {
            return 'Termo inicial posterior ao termo final'}
        if (dateStart === '' && dateEnd === '') {
            return 'Preencha o termo inicial e final'}
        if (dateStart === '') {
            return 'Preencha o termo inicial'}
        if (dateEnd === '') {
            return 'Preencha o termo final'}
        }

         
        function functionResult2 () {
            if (decimalYearsSusp > 1) {
                 return decimalYearsSusp + ' anos' + ' | ' + decimalMonthsSusp + ' meses' + ' | ' + decimalDaysSusp + ' dias'}
            if (decimalYearsSusp === 0 && decimalMonthsSusp > 1) {
                 return decimalMonthsSusp + ' meses' + ' | ' + decimalDaysSusp + ' dias'}
            if (decimalYearsSusp === 0 && decimalMonthsSusp === 0 && decimalDaysSusp > 1) {
                return decimalDaysSusp + ' dias'}
            if (decimalYearsSusp === 1) {
                return decimalYearsSusp + ' ano' + ' | ' + decimalMonthsSusp + ' meses' + ' | ' + decimalDaysSusp + ' dias'}
            if (decimalYearsSusp === 0 && decimalMonthsSusp === 1) {
                return decimalMonthsSusp + ' mês' + ' | ' + decimalDaysSusp + ' dias'}
            if (decimalYearsSusp === 0 && decimalMonthsSusp === 0 && decimalDaysSusp === 1) {
                return decimalDaysSusp + ' dia'}
            if (decimalDaysSusp < 0) {
                return 'Termo inicial posterior ao termo final'}
            if (suspStart === '' && suspEnd === '') {
                return 'Preencha o termo inicial e final'}
            if (suspStart === '') {
                return 'Preencha o termo inicial'}
            if (suspEnd === '') {
                return 'Preencha o termo final'}
            }

            function functionResult3 () {
                
                if (yearsResult > 1) {
                     return yearsResult + ' anos' + ' | ' + monthsResult + ' meses' + ' | ' + DaysResult + ' dias'}
                if (yearsResult === 0 && monthsResult > 1) {
                     return monthsResult + ' meses' + ' | ' + DaysResult + ' dias'}
                if (yearsResult === 0 && monthsResult === 0 && DaysResult > 1) {
                    return DaysResult + ' dias'}
                if (yearsResult === 1) {
                    return yearsResult + ' ano' + ' | ' + monthsResult + ' meses' + ' | ' + DaysResult + ' dias'}
                if (yearsResult === 0 && monthsResult === 1) {
                    return monthsResult + ' mês' + ' | ' + DaysResult + ' dias'}
                if (yearsResult === 0 && monthsResult === 0 && DaysResult === 1) {
                    return DaysResult + ' dia'}
                if (dateStart === '' ||  dateEnd === '' || suspStart === '' || suspEnd === '') {
                    return 'Há campo(s) sem preencher'}
                
               /* se tiver meses e dias na primeira row e apenas dias na segunda row, incluir apenas dias no resultado*/
                }

            

    

    document.querySelector('#td-termo-inicial').textContent = dateDisplay (dateStart);
    document.querySelector('#td-termo-final').textContent = dateDisplay (dateEnd);
    document.querySelector('#td-periodo').textContent = functionResult1 ();

    document.querySelector('#td-termo-inicial-susp').textContent = dateDisplay (suspStart);
    document.querySelector('#td-termo-final-susp').textContent = dateDisplay (suspEnd);
    document.querySelector('#td-periodo-susp').textContent = functionResult2 ();

    document.querySelector('#td-periodo-susp-diff').textContent = functionResult3 ();



})


