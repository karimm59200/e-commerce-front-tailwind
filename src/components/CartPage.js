import React from 'react';

const CardPage = (props) => {


    const [panier, setPanier] = React.useState([]);
    const [total, setTotal] = React.useState(0);

    React.useEffect(() => {
        let total = 0;
        panier.forEach((item) => {
            total += item.price * item.quantity;
        });
        setTotal(total);

    }
    , [panier]);

    const addPanier = (product) => {
        const exist = panier.find((item) => item.id === product.id);
        if (exist) {
            setPanier(
                panier.map((item) =>
                    item.id === product.id ? {...exist, quantity: exist.quantity + 1} : item
                )
            );
        } else if (!exist) {
            setPanier([...panier, {...product, quantity: 1}]);
        } else {
            throw new Error("il y a un problème lors de l'ajout de l'article");
        }
    }

    return (
        <div>
            <h1>Panier</h1>
            <div className="flex flex-row justify-around">
                <div className="flex flex-col">
                    {panier.map((product, index) => (
                        <div key={index}>
                            <h3>{product.name}</h3>
                            {/*<h3>{product.price}</h3>*/}
                            <h3>{product.quantity}</h3>
                            <button onClick={() => addPanier(product)}>+</button>
                            <button>-</button>

                        </div>
                    ))}
                </div>
                <div>
                    <h2>Total : {total}</h2>
                </div>
            </div>
        </div>
    );

};

export default CardPage;