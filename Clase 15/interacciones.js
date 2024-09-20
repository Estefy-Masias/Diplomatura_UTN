/*
1) imprime los numeros del 1 al 10
2) imprime los numeros pares del 2 al 20
3) imprime los numeros impares del 1 al 20
4) imprimero los numeros del 10 al 1 en orden inverso
5) imprime los numeros del 1 al 10, pero se dentiene al llegar al 5 BREAK
6) imprime los numeros del 1 al 10, pero salta el 5 CONTINUO
*/

//1
for(let i=1;
    i<=10;
    i++){
        console.log(i)
    }

//2
for (let iterador=2;
    iterador<=20;
    iterador=iterador+2
){
    console.log(iterador)
}
//3
for(let iterador=1;
    iterador<=19;
    iterador=iterador+2
){
    console.log(iterador)
}

//4 
for(let iterador=10;
    iterador>=1;
    iterador=iterador-1
){
    console.log(iterador)
}

//5
for(let iterador = 1;
    iterador<=10;
    iterador=iterador+1
){
    if(iterador==5){
        break
    }
    console.log(iterador)
}

//6
for(let iterador=1;
    iterador<=10;
    iterador=iterador+1
){
    if(iterador==5){
        continue
    }
    console.log(iterador)
}
