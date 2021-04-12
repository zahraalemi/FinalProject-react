import visaCard from '../img/visaCard.png';
import americanCard from '../img/americanCard.png';
import masterCard from '../img/masterCard.png';
import otherCard from '../img/otherCard.png';
import cheapset from '../img/cheapset.png';
import {useDispatch } from 'react-redux';
import { changeActiveCard} from '../wallet';



const Card = (props) =>{
    const dispatch = useDispatch();
    const handleChangeActive = () =>{
        
        dispatch(changeActiveCard(props.id));
        
    }
    
    return(
        <div className="card" onClick={handleChangeActive}>
            <div className={"card-part padding-box" +(props.active ? " card-front" : "") + (props.type === 1 ? " visa" : props.type === 2 ? " masterCard" : props.type === 3 ? " americanCard" : " other")}>
                <div className="flex-card">
                    <img src={cheapset} className="card-front-square card-square" alt="pic1"/>
                    <img src={(props.type === 1 ? visaCard : props.type === 2 ? masterCard : props.type === 3 ? americanCard : otherCard)} className="card-front-logo card-logo" alt="pic2"/>
                </div>
                <p className="card-number">{props.cardno === '' ? "**** **** **** ****" : props.cardno}</p>
                <div className="flex-card">
                    <div className="card-space-75">
                        <span className="card-label">Card holder</span>
                        <p className="card-info">{props.name == null ? "Your Name" : props.name}</p>
                    </div>
                    <div className="card-space-25">
                        <span className="card-label">Expires</span>
                        <p className="card-info">{props.date == null ? "MM/YY" : props.date}</p>
                    </div>
                </div>
            </div>
            
        </div>
    )
}
export default Card;