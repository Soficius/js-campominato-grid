// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed emetto un messaggio in console con il numero della cella cliccata.
// Procediamo milestone per milestone senza invertire l'ordine.
// Cerchiamo di fare almeno un commit per ogni milestone!

// function 

//* 1.3. funzione per creare una celle
function getCell(num){
    const cell = document.createElement('div');
    cell.className = 'cell'
    cell.innerText = num
    return cell   
}

//* 1. mi metto in ascolta sul btn per la creazione della griglia
document.getElementById('start').addEventListener('click', function(){
    //* 1.1. prendo l'elemento griglia
    const grid = document.getElementById('grid');
    
    //* 1.2. devo creare una griglia di 100 celle divisa in 10 colonne e 10 righe 
    const rows = 10;
    const cols = 10;
    const total = rows * cols;
    
    //* 1.4. creo 100 celle
    for(let i = 1; i <= total; i++ ){
        // 1.4.1 aggancio la cella alla griglia
        grid.appendChild(getCell(i))
    }
})

