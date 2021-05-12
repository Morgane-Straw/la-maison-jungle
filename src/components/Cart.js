function Cart(){
    var pmonstera=8
    var plierre=10
    var pbouquet=15
    return(<div>
        <li>
            <ul>1 Monstera {pmonstera}€</ul>
            <ul>1 Lierre {plierre}€</ul>
            <ul>1 Bouquet {pbouquet}€</ul>
        </li>
        <p>Total : {pmonstera+plierre+pbouquet}</p>
        </div>
        )
}
export default Cart