import FooterItem from '../FooterItem';

import { useContext } from 'react';
import { UsersContext } from '../../App';

import './footer.css'
const Footer = () => {
    const { data } = useContext(UsersContext);
    return (

        <footer>
            {/* <FooterItem text='footer' isLowercaseText={true} /> */}
            <div className='common-footer'>
                <FooterItem text='First elem' isLowercaseText={true} />
                <FooterItem text='Second elem' isLowercaseText={true} />
                <FooterItem text='Third elem' isLowercaseText={false} />
                <FooterItem text='Fourth elem' isLowercaseText={false} />
                {/* <div>Total User Count: {data}</div> */}
                <div>Max. Characters: {data}</div>
            </div>
        </footer>
        
    );
}

export default Footer;