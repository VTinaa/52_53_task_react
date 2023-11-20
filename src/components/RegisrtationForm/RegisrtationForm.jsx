import './registrationForm.css';
import Input from '../Input';

const RegistrationForm = () => {

    const onGetName = (name) => {

    };
    const onGetAge = (value) => {
        // setSurname(value)
    };

    const onGetEmail = (value) => {
        // setEmail(value)
    };
    const onGetPassword = (value) => {
        // setEmail(value)
    };

    return (
        <div className="common-form">
            <Input label="Name: " placeholder="Enter Your Name" onChangeFunction={onGetName}/>
            <Input label="Age: " placeholder="Enter Your Age" onChangeFunction={onGetAge} />
            <Input label="Email: " placeholder="Enter Your Email" onChangeFunction={onGetEmail} />
            <Input label="Password: " placeholder="Enter Your Password" type="password" onChangeFunction={onGetPassword} />
        </div>
    );
};


export default RegistrationForm;