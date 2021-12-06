import './registration.css';
import {useState} from "react";
import {useHistory} from "react-router-dom";



const RegistrationPage = ({...props}) => {

    const [registrationValues, setRegistrationValues] = useState({
        firstName: '',
        lastName:  '',
        email: '',
        password: '',
        passwordRetry: ''
    });

    const [error, setError] = useState("");
    const history = useHistory();

    const onChangeHandle = () => {
        setError("");
    }

    const handleChange = (e) => {
        e.persist();
        onChangeHandle();
        setRegistrationValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const backToLogin = () => {
        history.push("/");
    }


    return (
        <div className="registration_page">
            <div className="page_form">
                <div className="logo">~ СOM X ZONE ~</div>
                <div className="registration">registration</div>
                <div className="form_div">
                    <form className="my_registration_validation" noValidate={false}>
                        <input id="first_name" placeholder="First name" type="text" className="input_first_name" minLength={5}
                               value={registrationValues.firstName}
                               onChange={handleChange} name="firstName"/>
                        <input id="last_name" placeholder="Last name" type="text" className="input_last_name" minLength={5}
                               value={registrationValues.lastName}
                               onChange={handleChange} name="lastName"/>
                        <input id="email" placeholder="E-mail" type="text" className="input_email" minLength={5}
                               value={registrationValues.email}
                               onChange={handleChange} name="email"/>
                        <input id="password" placeholder="Password" type="password" className="input_password" minLength={5}
                               value={registrationValues.password}
                               onChange={handleChange} name="password"/>
                        <input id="password_retry" placeholder="Password retry" type="password" className="input_password_retry" minLength={5}
                               value={registrationValues.passwordRetry}
                               onChange={handleChange} name="passwordRetry"/>
                        <button onClick={backToLogin}>Back</button>
                        <button type="submit">Sign up</button>
                    </form>
                </div>
            </div>
        </div>
    )

}


export default RegistrationPage;
