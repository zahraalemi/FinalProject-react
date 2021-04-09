import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard } from '../wallet';
import {Link} from 'react-router-dom';
import Card from '../card/card';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWindowClose } from "@fortawesome/free-solid-svg-icons";


const NewCard = () => {
     const [ number, setNumber] = useState();
     const [ name, setName] = useState();
     const [ date, setDate] = useState();
     const [ cvv, setCvv] = useState();
     const [ vendor, setVendor] = useState();
     const listCard = useSelector((state) => state.cardWallet.listCard);
    console.log(listCard.length)
    const isActive = false;
    /* listCard.length === 4 ? !isActive : null */


    const dispatch = useDispatch();
    const handleChangeNumber = (e) => {
        if(e.target.value.length <= 19)
        {
         const cardNumber = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
            setNumber(cardNumber)
        }
     }

     const handleChangeName = (e) =>{
        setName(e.target.value)
     }
     
     const handleChangeDate = (e) =>{
        if(e.target.value.length <= 5)
        {
         e.target.value=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{1})/, "$1/$2")
         setDate(e.target.value)
         
        } 
        
     }
     
     const handleChangeCvv = (e) =>{
        if(e.target.value.length <= 3)
        {
         e.target.value=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})/, "$1")
         setCvv(e.target.value)
        }
        
     }
     const handleChangeVendor = (e) => {
        setVendor(e.target.value);
        console.log(vendor)
     }
     const handleAddCard =() =>{
        dispatch(addNewCard({cardno:number, name:name, date:date, cvv:cvv, type : vendor}))
        setNumber('');
        setName('');
        setDate('');
        setCvv('');
     }

  return(
      <div>
          <div><Link to="/">
                    <button className="close-btn">
                        <FontAwesomeIcon  icon={faWindowClose} />
                    </button>
                </Link></div>
          <Card cardno={number} name={name} date={date} cvv={cvv} type={vendor}/>
          {/* <div className="card">
                        <div className={"card-front card-part" + (vendor === 1 ? " visa" : vendor === 2 ? " masterCard" : vendor === 3 ? " americanCard" : " other")}>
                            <img src="" className="card-front-square card-square" alt="pic1"/>
                            <img src={(vendor === 1 ? visaCard : vendor === 2 ? masterCard : vendor === 3 ? americanCard : " other")} className="card-front-logo card-logo" alt="pic2"/>                            <p className="card-number">{number} </p>
                            <div className="card-space-75">
                                <span className="card-label">Cardholder Name</span>
                                <p className="card-info">{name}</p>
                            </div>
                            <div className="card-space-25">
                                <span className="card-label">Expires</span>
                                <p className="card-info">{date}</p>
                            </div>
                        </div>
                    
                        <div className={"card-back card-part" + (vendor === 1 ? " visa" : vendor === 2 ? " masterCard" : vendor === 3 ? " americanCard" : " other")}>
                            <div className="card-back-line"></div>
                            <div className="card-back-content">
                                <div className="card-secret">
                                    <p className="card-secret-last">{cvv}</p>
                                </div>
                                <img className="card-back-square card-square" src="" alt="back1"/>
                                <img className="card-back-logo card-logo" src="" alt="asds"/>
                            </div>
                        </div>
                    </div> */}
          <input type="text" placeholder="Enter Your Card Number" value={number} onChange={handleChangeNumber}/>
          <br/>
          <input type="text" placeholder="Enter Your Name" value={name} onChange={handleChangeName}/>
          <br/>
          <input type="text" placeholder="Enter Expire Date" value={date} onChange={handleChangeDate}/>
          <input type="text" placeholder="Enter Cvv" value={cvv} onChange={handleChangeCvv}/>
          <br/>
          <label for="vendor">Vendor</label>
            <select name="vendor" id="vendor" value={vendor} onChange={handleChangeVendor}>
                <option>choose vendor</option>
                <option value="1">Visa</option>
                <option value="2">Mastercard</option>
                <option value="3">AmericanExpress</option>
                <option value="4">Other</option>
            </select>
          <div>
              <button disabled={isActive} onClick={handleAddCard}>Add card</button>
          </div>
      </div>
  );
}
export default NewCard;