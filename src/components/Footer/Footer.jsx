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
                <FooterItem text='Feedback' isLowercaseText={true} />
                <FooterItem text='about Us' isLowercaseText={true} />
                <FooterItem text='Contacts' isLowercaseText={false} />
                <FooterItem text='Privacy Policy' isLowercaseText={false} />
                {/* <div>Total User Count: {data}</div> */}
                <div>Max. Characters: {data}</div>
            </div>
        </footer>
        
    );
}

export default Footer;