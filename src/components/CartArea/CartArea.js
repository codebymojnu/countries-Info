import React from 'react';

const CartArea = (props) => {
    const total = props.carts.reduce((total, element) => total + element.population, 0);
    return (
        <div style={{textAlign: 'center'}}>
            <h2>Added: {props.carts.length}</h2>
            <h4>Total Population: {total}</h4>
        </div>
    );
};

export default CartArea;