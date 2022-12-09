import {Fragment} from 'react';
import classes from './Header.module.css';
import HeaderCartButton from './HeaderCartButton';
const Header=(props)=>{
    return(
        <Fragment>
            <headr className={classes.header}>
                <h1>ReactMeals</h1>
                <HeaderCartButton onClick={props.onShowCart}/>
            </headr>
            <div className={classes['main-image']}>
                <img src="https://raw.githubusercontent.com/academind/react-complete-guide-code/11-practice-food-order-app/extra-files/meals.jpg"
                 alt='A table full of delicious food!!'/>
            </div>
        </Fragment>
    )
}

export default Header;