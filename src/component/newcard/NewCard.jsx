import { useState } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard } from '../wallet';
import {useHistory} from 'react-router-dom';
import ActiveCard from '../card/ActiveCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from 'nanoid';


const NewCard = () => {
     const [ number, setNumber] = useState();
     const [ name, setName] = useState();
     const [ date, setDate] = useState();
     const [ cvv, setCvv] = useState();
     const [ vendor, setVendor] = useState();
     const [isActive, setisActive] =useState(false);
     
     const listCard = useSelector((state) => state.cardWallet.listCard);
  
    const history = useHistory();
    
    
     /*{name === "" || number === "" ? isActive = true : isActive= false} */
     

    const dispatch = useDispatch();
    const handleChangeNumber = (e) => {
        if(e.target.value.length <= 19)
        {
         const cardNumber = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
            setNumber(cardNumber);
            
        }
     }

     const handleChangeName = (e) =>{
         e.target.value = e.target.value.replace(/[^a-z ]/, "")
        setName(e.target.value)
     }
     
     const handleChangeDate = (e) =>{
        if(e.target.value.length <= 5)
        {
         let datavalue=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{1})/, "$1/$2")
            
         setDate(datavalue)
         
        } 
        
     }

     
     const handleChangeCvv = (e) =>{
        if(e.target.value.length <= 3)
        {
         e.target.value=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})/, "$1")
         if(e.target.value.length < 3) {
             setisActive(true)
             e.target.className = 'inputError'
             console.log("dcdfvdfv")
             
             console.log(cvv)
         }else{
            setisActive(false)
             console.log("ok")
             
            setCvv(e.target.value)}
            console.log(cvv)
        }
        
     }
     const handleChangeVendor = (e) => {
        setVendor(parseInt(e.target.value) );
        /* setCardId(cardId + 1);
        console.log(listCard.length)
        console.log(cardId) */
         
     }
     const handleAddCard =() =>{
        if(number.length <19 ){
            setisActive(true)
            
        }else{
        dispatch(addNewCard({cardno:number, name:name, date:date, cvv:cvv, type : vendor , active : false, id: nanoid()}))
        setNumber('');
        setName('');
        setDate('');
        setCvv('');
        setVendor('')
        }
     }

     const validat = () => {

     }

     const checkInputVariable = (e) =>{
        e.target.value !== "" ? e.target.className = 'inputOK' : e.target.className = 'inputError'
        /*isActive=true;
        message = "choose your Bank"
          if(e.target.value !== "" ){
            e.target.className = 'inputOK'
         }else{
            e.target.className = 'inputError';
            isActive=true;
            message = "choose your Bank"
         } */
         
     }
     

  return(
    <div>        
        <ActiveCard cardno={number} name={name} date={date} cvv={cvv} type={vendor}/>

        <div>
            {isActive ? <p className="inputError">Please make sure all fields are filled</p> : null}
            <div>
                <input type="text" placeholder="Enter Your Card Number" value={number} maxLength={19} onBlur={checkInputVariable} onChange={handleChangeNumber} />
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name" value={name} onChange={handleChangeName} onBlur={checkInputVariable} />
            </div>
            <div className="dateandcvv-box">
                <input type="text" placeholder="Enter Expire Date" value={date} onChange={handleChangeDate} onBlur={checkInputVariable} />
                <input type="text" placeholder="Enter Cvv" value={cvv} onChange={handleChangeCvv} onBlur={checkInputVariable} />
            </div>
            <div>
               
                <select name="vendor" id="vendor" value={vendor} onChange={handleChangeVendor} onBlur={checkInputVariable} >
                    <option></option>
                    <option value="1">Visa</option>
                    <option value="2">Mastercard</option>
                    <option value="3">AmericanExpress</option>
                    <option value="4">Other</option>
                </select>
            </div>
            <div className="dateandcvv-box">
            
                <button 
                className="addandback-btn" 
                onClick={() => {
                    history.push("./");
                }}>
                <FontAwesomeIcon  icon={faChevronLeft} />  Back
                
                </button>
            
                <button className="addandback-btn" disabled={!number + !name + !date + !vendor + !cvv + (listCard.length === 4 ? true : false)} onClick={handleAddCard}>Add Card <FontAwesomeIcon  icon={faPlus} /></button>
            </div>
        </div>
    </div>
  );
}
export default NewCard;