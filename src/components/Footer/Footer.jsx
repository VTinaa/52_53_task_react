import './footer.css'
import FooterItem from '../FooterItem';

const Footer = () => {
    return (

        <footer>
            <FooterItem text='footer' isLowercaseText={true} />
            <div className='common-footer'>
                <FooterItem text='First elem' isLowercaseText={true} />
                <FooterItem text='Second elem' isLowercaseText={true} />
                <FooterItem text='Third elem' isLowercaseText={false} />
                <FooterItem text='Fourth elem' isLowercaseText={false} />
            </div>
        </footer>
        
    );
}

export default Footer;