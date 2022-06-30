//* 1.3. funzione per creare una celle
function getNewCell(num){
    const cell = document.createElement('div');
    cell.className = 'cell'
    cell.innerText = num
    cell.addEventListener('click',colorizeCell)
    return cell   
}

// 2. funzione per colorare la cella al click
function colorizeCell(e){
    const cell = e.target
    cell.classList.toggle('azure')
    console.log('cella:',cell.innerText)
}


//* 1. mi metto in ascolto sul btn per la creazione della griglia
document.getElementById('start').addEventListener('click', function(){
    //* 1.1. prendo l'elemento griglia
    const grid = document.getElementById('grid');
    //* rimuovo eventuali celle preesistenti
    while (grid.firstChild) {
        grid.removeChild(grid.lastChild)
    }
    //* 1.2. devo creare una griglia di 100 celle divisa in 10 colonne e 10 righe 
    const rows = 10;
    const cols = 10;
    const total = rows * cols;
    
    //* 1.4. creo 100 celle
    for(let i = 1; i <= total; i++ ){
        // 1.4.1 aggancio la cella alla griglia
        grid.appendChild(getNewCell(i))
    }
})

