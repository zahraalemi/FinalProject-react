import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";

import {Link} from 'react-router-dom';
import {removeCard } from '../wallet';
import Card from '../card/card';
import ActiveCard from '../card/ActiveCard';

const Wallet = () => {
    const listCard = useSelector((state) => state.cardWallet.listCard);
    console.log(listCard)
    const dispatch = useDispatch();
    
    const handleRemove = (id) =>{
        dispatch(removeCard(id));
    }
    
    return (
        <div className="wallet-container">
            <div className="wallet-box"> 
                {listCard && listCard.map((card)=>{
                    return(
                        <>
                        {card.active ? (
                            <div className="activecard-box">
                                <ActiveCard {...card} />
                            </div>
                            
                        ):(
                            
                            <div className="deactive-box" >
                                <Card {...card} />
                                <button className="remove-btn" onClick={() => handleRemove({id : card.id})}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        )
                        }
                        
                        
                        </>
                    );
                })}
                
            </div>
            <div className="addNew-btn">
                <Link to="/newcard">
                    <button className="addNewCard-btn">Add A New Card</button>
                </Link>
            </div>
            
        </div>
    )
}

export default Wallet;