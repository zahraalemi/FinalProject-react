import { useSelector,useDispatch } from 'react-redux';
const Wallet = () => {
    const listCard = useSelector((state) => state.cardWallet.listCard);
    console.log(listCard)
    return (
        <div> 
            <h1>Wallet</h1> 
            {listCard && listCard.map((card,i)=>{
                return(
                    <div className="card" key={i}>
                        <div className="card-front card-part">
                            <img src="" className="card-front-square card-square" alt="pic1"/>
                            <img src="" className="card-front-logo card-logo" alt="pic2"/>
                            <p className="card-number">{card.cardno}</p>
                            <div className="card-space-75">
                                <span className="card-label">Card holder</span>
                                <p className="card-info">{card.name}</p>
                            </div>
                            <div className="card-space-25">
                                <span className="card-label">Expires</span>
                                <p className="card-info">{card.date}</p>
                            </div>
                        </div>
                    
                        <div className="card-back card-part">
                            <div className="card-back-line"></div>
                            <div className="card-back-content">
                                <div className="card-secret">
                                    <p className="card-secret-last">{card.cvv}</p>
                                </div>
                                <img className="card-back-square card-square" src="" alt="back1"/>
                                <img className="card-back-logo card-logo" src="" alt="asds"/>
                            </div>
                        </div>
                    </div>
                );
            })}

        </div>
    )
}

export default Wallet;