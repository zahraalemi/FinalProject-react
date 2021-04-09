import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';
import {removeCard} from '../wallet';
import Card from '../card/card'

const Wallet = () => {
    const listCard = useSelector((state) => state.cardWallet.listCard);
    console.log(listCard)
    const dispatch = useDispatch();
    const handleRemove =(e) =>{
        console.log(e.target.parentElement.parentElement.parentElement)
        dispatch(removeCard(e.target.parentElement.parentElement.parentElement))
    }
    return (
        <>
            <div className="wallet-box"> 
                {listCard && listCard.map((card)=>{
                
                    return(
                        <>
                        <Card {...card}/>
                        <button onClick={handleRemove}>
                            <FontAwesomeIcon icon={faTrashAlt} />
                        </button>
                        </>
                    );
                })}
                <div>
                <Link to="/newcard">
                    <button>Add A New Card</button>
                </Link>
                </div>
            </div>
            
        </>
    )
}

export default Wallet;