import React from 'react';
import cart from '../../src/assets/images/icon-cart.svg';

class CardPreview extends React.Component {
    render() {
        return (
            <div className="main">
                <div className="img-container"></div>
                <div className="text-container">
                    <div className="logo">
                        P E R F U M E
                    </div>
                    <div className="heading">
                        <h1>
                            Gabrielle Essence Eau
                            De Perfum
                        </h1>
                    </div>
                    <div className="text-description">
                        <span className="text">
                            A floral, solar and voluptuous interpretation composed by Olivier Polge,
                            Perfumer-Creator for the House of CHANEL.
                        </span>
                    </div>
                    <div className="price-container">
                        <div className="discount">
                            $149.99
                        </div>
                        <div className="prev-price">
                            $169.99
                        </div>
                    </div>
                    <div className="btn-container">
                        <input 
                            type="button"
                            value="Add to Cart"
                            className="btn"
                        />
                        <img 
                            src={cart}
                            alt="icon-cart"
                            className="icon-cart"
                        />
                    </div>
                </div>
            </div>
        );
    }
}

export default CardPreview;