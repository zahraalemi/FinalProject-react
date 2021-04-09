import NewCard from "../newcard/NewCard";
import Wallet from '../wallet/Wallet';
import {Switch, Route} from 'react-router-dom';

const Menu = () => {
    return (
        <div> 
            
            <Switch>
                <Route exact path="/" component={Wallet} />
                <Route path="/newcard" component={NewCard} />

            </Switch>

            {/* <div> 
                <Link to="/">
                    <button>Wallet</button>
                </Link>
                <Link to="/newcard">
                    <button>Add A New Card</button>
                </Link>
            </div> */}
        </div>
    );
}

export default Menu;