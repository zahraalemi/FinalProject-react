import { useSelector,useDispatch } from 'react-redux';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { useHistory } from 'react-router-dom';
import { removeCard } from '../wallet';
import Card from '../card/card';
import ActiveCard from '../card/ActiveCard';

const Wallet = () => {
    const listCard = useSelector((state) => state.cardWallet.listCard);
    console.log(listCard)
    const dispatch = useDispatch();
    const history = useHistory();

    const handleRemove = (id) =>{
        dispatch(removeCard(id));
    }
    const checkLength =() =>{
        console.log(listCard.length)
        listCard.length ===4  ? alert("You have 4 Card and can't add more") : history.push("./newcard") 
    }
   
    return (
        <>
        <div className="wallet-container">
            <div className="wallet-box"> 
                {/* {listCard && listCard.map((card ,i)=>{
                    return(
                        <>
                        {card.active ? (
                            <div className="activecard-box" key={i}>
                                <ActiveCard {...card} />
                            </div>
                            
                        ):(
                            
                            <div className="deactive-box" key={i}>
                                <Card {...card} />
                                <button className="remove-btn" onClick={() => handleRemove({id : card.id})}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        )
                        } 
                        </>
                    );
                })} */}
                {listCard &&listCard.map((card ,i)=>{
                    if(card.active){
                        return(
                            <div className="activecard-box" key={i}>
                                <ActiveCard {...card} />
                            </div>
                        )
                    }
                })}
                {listCard && listCard.map((card,i)=>{
                    if(!card.active){
                        return(
                            <div className="deactive-box" key={i}>
                                <Card {...card} />
                                <button className="remove-btn" onClick={() => handleRemove({id : card.id})}>
                                    <FontAwesomeIcon icon={faTrashAlt} />
                                </button>
                            </div>
                        )
                    }
                })}

            </div>
            <div className="addNew-btn">
                    <button className="addNewCard-btn" onClick={checkLength}>Add A New Card</button>
            </div>
            
        </div>
        {/* <div className="popup-box"></div> */}
        </>
    )
}

export default Wallet;