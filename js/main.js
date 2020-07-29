
/*
var btn = document.querySelector ('#btn-calcular');



btn.addEventListener ('click', function (evt) {
    evt.preventDefault ();  

        
    const dataInicio = document.querySelector ('#termo-inicial-input').value;
    const dataFim = document.querySelector ('#termo-final-input').value;
    
    const suspInicio = document.querySelector ('#input-susp-1').value;
    const suspFinal = document.querySelector ('#input-susp-2').value;
    
    function dateSplit (date) {
        var dateSplit = date.split ('-', 3);
        var dateToNumber = Number (dateSplit)
        return dateToNumber

            
    }

    function dateConsole (date) {
        let dataSplit = date.split ('-', 3);
        let dataOrdem = dataSplit.reverse ();
        let dataJoin = dataOrdem.join ('/')
        return dataJoin
    }

    function campoVazio () {
        let b = dataInicio;
        let c = dataFim;
        let d = suspInicio;
        let e = suspFinal;
        
       b === ''? console.log ('preencha o campo data Inicio') : c === ''? console.log ('preencha o campo data final') : 'nothing';
        }

        

    campoVazio ()

    
        let a = moment(dateSplit (dataInicio))
        let b = moment(dateSplit (dataFim))
        
        var c = moment (dateSplit (suspInicio));
        var d = moment (dateSplit (suspFinal));

        var diffAnos = b.diff(a, 'years')
        var diffMeses = b.diff(a, 'months');
        var diffDias = b.diff(a, 'days')

        var diffAnosSusp = d.diff(c, 'years');
        var diffMesesSusp = d.diff(c, 'months');
        var diffDiasSusp = d.diff(c, 'days');
        
        const resultadoAnos = diffAnos - diffAnosSusp;
        const resultadoMeses = diffMeses - diffMesesSusp;
        const resultadoDias = diffDias - diffDiasSusp; 


        function functionResultado () {
            if (diffAnos > 1) {
                 return diffAnos + ' anos' + ' | ' + diffMeses + ' meses' + ' | ' + diffDias + ' dias'}
            if (diffAnos === 0 && diffMeses > 1) {
                 return diffMeses + ' meses' + ' | ' + diffDias + ' dias'}
            if (diffAnos === 0 && diffMeses === 0 && diffDias > 1) {
                return diffDias + ' dias'}
            if (diffAnos === 1) {
                return diffAnos + ' ano' + ' | ' + diffMeses + ' meses' + ' | ' + diffDias + ' dias'}
            if (diffAnos === 0 && diffMeses === 1) {
                return diffMeses + ' mês' + ' | ' + diffDias + ' dias'}
            if (diffAnos === 0 && diffMeses === 0 && diffDias === 1) {
                return diffDias + ' dia'}
            } 

        function functionResultadoSusp () {
            if (diffAnosSusp > 1) {
                 return diffAnosSusp + ' anos' + ' | ' + diffMesesSusp + ' meses' + ' | ' + diffDiasSusp + ' dias'}
            if (diffAnosSusp === 0 && diffMesesSusp > 1) {
                 return diffMesesSusp + ' meses' + ' | ' + diffDiasSusp + ' dias'}
            if (diffAnosSusp === 0 && diffMesesSusp === 0 && diffDiasSusp > 1) {
                return diffDiasSusp + ' dias'}
            if (diffAnosSusp === 1) {
                return diffAnosSusp + ' ano' + ' | ' + diffMesesSusp + ' meses' + ' | ' + diffDiasSusp + ' dias'}
            if (diffAnosSusp === 0 && diffMesesSusp === 1) {
                return diffMesesSusp + ' mês' + ' | ' + diffDiasSusp + ' dias'}
            if (diffAnosSusp === 0 && diffMesesSusp === 0 && diffDiasSusp === 1) {
                return diffDiasSusp + ' dia'}
            }

        function diffPeriodoSusp () {
                if (resultadoDias === 1) {
                    return resultadoDias + ' dia'}
                if (resultadoDias > 1) {
                    return resultadoDias + ' dias'}
                if (resultadoDias === 0)
                    return 'O prazo não correu'
                }

        var resultadoFinal = functionResultado ()
        var resultadoFinalSusp = functionResultadoSusp ()
        var diffPeriodoSusp = diffPeriodoSusp ();
       
       
        
    

    document.querySelector('#td-termo-inicial').textContent = dateConsole (dataInicio);
    document.querySelector('#td-termo-final').textContent = dateConsole (dataFim);
    document.querySelector('#td-periodo').textContent = resultadoFinal;

    document.querySelector('#td-termo-inicial-susp').textContent = dateConsole (suspInicio);
    document.querySelector('#td-termo-final-susp').textContent = dateConsole (suspFinal);
    document.querySelector('#td-periodo-susp').textContent = resultadoFinalSusp;

    document.querySelector('#td-periodo-susp-diff').textContent = diffPeriodoSusp + '*';

})
*/
