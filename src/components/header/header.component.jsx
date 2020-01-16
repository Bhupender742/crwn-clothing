import React from 'react';
import { connect } from 'react-redux';

import { auth } from '../../firebase/firebase.utils';
import CartIcon from '../cart-icon/cart-icon.component';
import CartDropdown from '../cart-dropdown/cart-dropdown.component';

import { ReactComponent as Logo } from '../../assets/crown.svg';

import { HeaderContainer, LogoContainer, OptionsContainer, OptionContainer } from './header.styles';

const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to="/">
            <Logo className='logo' />
        </LogoContainer>
        <OptionsContainer>
            <OptionContainer to='/shop'>
                SHOP
        </OptionContainer>
            <OptionContainer to='/contact'>
                CONTACT
        </OptionContainer>
            {
                currentUser ?
                    (<OptionContainer as='div' onClick={() => auth.signOut()}>
                        SIGN OUT
                    </OptionContainer>)
                    :
                    (<OptionContainer to='/signin'> SIGN IN </OptionContainer>)
            }
            <CartIcon />
        </OptionsContainer>
        {hidden ? null : <CartDropdown />}
    </HeaderContainer>
);

const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
    currentUser,
    hidden
})

export default connect(mapStateToProps)(Header);