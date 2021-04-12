import { useState, useEffect } from "react";
import { useDispatch, useSelector } from 'react-redux';
import { addNewCard,getUsers } from '../wallet';
import {useHistory} from 'react-router-dom';
import ActiveCard from '../card/ActiveCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft, faPlus } from "@fortawesome/free-solid-svg-icons";
import { nanoid } from 'nanoid';


const NewCard = () => {


     const [ number, setNumber] = useState();
     const [ name, setName] = useState();
     const [ deActive, setDeActive ] =useState(false)
     const [ date, setDate] = useState();
     const [ cvv, setCvv] = useState();
     const [ vendor, setVendor] = useState();
     const [ isActive, setisActive ] =useState(true);
     const [ messageError, setMessageError ] = useState('');
     
     const listCard = useSelector((state) => state.cardWallet.listCard);
     const listUser = useSelector((state) => state.cardWallet.listUser);
     

    const history = useHistory();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getUsers());
      }, [dispatch]); 

    const handleChangeNumber = (e) => {
        if(e.target.value.length <= 19)
        {
         const cardNumber = e.target.value.replace(/[^0-9]/g, "").replace(/(\d{4})/g, "$1 ").trim();
            setNumber(cardNumber);
            
        }
     }

     /* const handleChangeName = (e) =>{
         e.target.value = e.target.value.replace(/[^a-z ]/, "")
        setName(e.target.value)
     } */
     
     const handleChangeDate = (e) =>{
        
         if(e.target.value.length <= 5){
            let datavalue=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})(\d{1})/, "$1/$2")

            let firstNumberMonth = datavalue.slice(0, 1) 
            let month = datavalue.slice(0, 2) 
            firstNumberMonth > 1 && firstNumberMonth <10 ? datavalue  = "0"+ firstNumberMonth : month > 12 ? datavalue = 12 : console.log(datavalue);

            setDate(datavalue)
        }  
        
     }

     
     const handleChangeCvv = (e) =>{
        if(e.target.value.length <= 3)
        {
            e.target.value=e.target.value.replace(/[^0-9]/g, "").replace(/(\d{2})/, "$1")
            setCvv(e.target.value)}
            
     }
     const handleChangeVendor = (e) => {
        setVendor(parseInt(e.target.value) );
        
         
     }
     const handleAddCard =() =>{
        dispatch(addNewCard({cardno:number, name:name, date:date, cvv:cvv, type : vendor , active : false, id: nanoid()}))
        history.push("./");
        
        
     }

     

     const checkCvvVariable = (e) =>{
        e.target.value === "" || e.target.value.length <3 ? e.target.className = 'inputError' : e.target.className = 'inputOK'; 
        e.target.value === "" || e.target.value.length <3 ? setisActive(true) : setisActive(false); 
        e.target.value === "" || e.target.value.length <3 ? setMessageError(messageError + "CVV format is less then 3 digits / ") : setMessageError("") ; 
     }

     const checkNumberVarible =(e) =>{
        e.target.value === "" || e.target.value.length <19 ? e.target.className = 'inputError' : e.target.className = 'inputOK'; 
        e.target.value === "" || e.target.value.length <19 ? setisActive(true) : setisActive(false); 
        e.target.value === "" || e.target.value.length <19 ? setMessageError(messageError + "Card Number is less then 16 digits / ") : setMessageError(messageError) ;

     }
     /* const checkNameVarible =(e) =>{
        e.target.value === "" ? e.target.className = 'inputError' : e.target.className = 'inputOK'; 
        e.target.value === "" ? setisActive(true) : setisActive(false); 
        e.target.value === "" ? setMessageError(messageError + "Name is empty / ") : setMessageError("") ;
     } */
    const checkExpireVariable =(e) =>{
        e.target.value === "" || e.target.value.length <5 ? e.target.className = 'inputError' : e.target.className = 'inputOK'; 
        e.target.value === "" || e.target.value.length <5 ? setisActive(true) : setisActive(false); 
        e.target.value === "" || e.target.value.length <5 ? setMessageError(messageError + "Expire Date format MM/YY / ") : setMessageError("") ;
    }

    const checkDropDownVariable = (e) =>{
        e.target.value === "" ? e.target.className = 'inputError' : e.target.className = 'inputOK'; 
        e.target.value === "" ? setisActive(true) : setisActive(false);  
        e.target.value === "" ? setMessageError(messageError + "Please Choose your Bank / ") : setMessageError("") ;  
     }

    const handleAutoName = () =>{
        setDeActive(true)
        setName (listUser.first +" " + listUser.last)
    }
     

  return(
    <div>        
        <ActiveCard cardno={number} name={name} date={date} cvv={cvv} type={vendor}/>

        <div>
            <p className={!messageError ? null : "redcolor"}>{messageError}</p>
            <div>
                <input type="text" placeholder="Enter Your Card Number" value={number} maxLength={19}  onBlur={checkNumberVarible} onChange={handleChangeNumber} />
            </div>
            <div>
                <input type="text" placeholder="Enter Your Name" onFocus={handleAutoName} value={name} disabled={deActive} /* onChange={handleChangeName} onBlur={checkNameVarible} */ />
            </div>
            <div className="dateandcvv-box">
                <input type="text" placeholder="Enter Expire Date" value={date} onChange={handleChangeDate} onBlur={checkExpireVariable} />
                <input type="text" placeholder="Enter Cvv" value={cvv} onChange={handleChangeCvv} onBlur={checkCvvVariable} />
            </div>
            <div>
               
                <select name="vendor" id="vendor" value={vendor} onChange={handleChangeVendor} onBlur={checkDropDownVariable} >
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
            
                <button className="addandback-btn" disabled={isActive + (listCard.length === 4 ? true : false)} onClick={handleAddCard}>Add Card <FontAwesomeIcon  icon={faPlus} /></button>
            </div>
        </div>
    </div>
  );
}
export default NewCard;