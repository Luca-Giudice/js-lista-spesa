// Data una lista della spesa (inventatela), stampare in pagina gli elementi della lista individualmente con un ciclo while.  (anche brutalmente, basta che si vedano)
// Bonus:
// Provare a stampare sia con i template literals che con i nodi, manipolando il DOM.
// Consigli:
// - Ricordiamoci di inizializzare le variabili  che servono alla condizione FUORI dal ciclo while, altrimenti verranno azzerate ad ogni ciclo
// - Ricordiamoci di incrementare il contatore, o comunque di inserire una condizione di uscita, all'interno ciclo while
// Buon lavoro e buon appetito!



const shoppinglist = ['schiuma da barba', 'evidenziatori', 'francobolli', 'pandoro', 'panettone'];
const listElement = document.getElementById('shopping-list');

let items = '';
let i = 0;
while(i < shoppinglist.length){
    items += `<li>${shoppinglist[i]}</li>`;
    i++;
}
listElement.innerHTML = items;



