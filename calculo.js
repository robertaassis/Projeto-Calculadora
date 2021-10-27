var total=0;
var teste = '';
var numeros=[];
function montaString(valor){
   
    $('#screen').html('');
    $('#screenaux').html('');

    // teste = '';
   teste += valor;
  
     $('#screen').append(teste);

     $('#screenaux').append(valor);
}

function pegaValor(operador){

    let qtdRequerida = parseInt(document.getElementById("screenaux").innerText);
    numeros.push(qtdRequerida);
    $('#screen').html('');
    //  console.log(qtdRequerida);
    for(let i=0;i<numeros.length;i++){
        if(numeros[i]=='+') total+=parseInt(qtdRequerida);
    
        else if(numeros[i]=='-') total-=parseInt(qtdRequerida); 

        else if(numeros[i]=='/') total/=parseInt(qtdRequerida); 

        else if(operador=='*') total*=parseInt(qtdRequerida); 

    }
    

    //  console.log("esse e o total " +total);
     qtdRequerida='';

}

function resultado(){
    $('#screen').append(total);
}

function zeraValor(){
     $('#screen').html('');
     teste = '';
    $('#screen').append(teste);
}