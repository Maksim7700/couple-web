import {useState} from 'react';
import './loginpage.css';
import {userLogin} from '../api/authenticationService';
import {Alert} from 'react-bootstrap';
import {useHistory} from "react-router-dom";

const LoginPage = ({...props}) => {

    const [values, setValues] = useState({
        userName: '',
        password: ''
    });
    const [error, setError] = useState("");

    const handleSubmit = (evt) => {
        evt.preventDefault();

        userLogin(values).then((response) => {

            console.log("response", response);
            if (response.status === 200) {
                localStorage.setItem('USER_KEY', response.data.token);
                props.history.push('/user');
            } else {
                setError("Error not 200 status");
            }
        }).catch((err) => {

            if (err && err.response) {

                switch (err.response.status) {
                    case 401:
                        setError("Wrong username or password!");
                        break;
                    case 500:
                        setError("Server error");
                        break;
                    default:
                        setError("Unknown error")
                }
            } else {
                setError("Something went wrong!")
            }
        });

    }

    const handleChange = (e) => {
        e.persist();
        onChangeHandle();
        setValues(prevValues => ({
            ...prevValues,
            [e.target.name]: e.target.value
        }));
    };

    const onChangeHandle = () => {
        setError("");
    }
    const history = useHistory();
    const routeRegistration = () => {
        history.push("/registration")
    }

    return (
        <div className="login-page">
            <div className="page">
                <h4 className="card-title">~ СOM X ZONE ~</h4>
                <div className="form-div">
                    <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                        <div className="form-gr">
                            <input id="username" placeholder="E-mail" type="text" className="form-input-c" minLength={5}
                                   value={values.userName}
                                   onChange={handleChange} name="userName" required/>
                        </div>

                        <div className="form-gr">
                            <input id="password" placeholder="Password" type="password" className="form-input-c"
                                   minLength={5}
                                   value={values.password} onChange={handleChange} name="password" required/>
                        </div>
                        <div className="form-gr">
                            <div className="roundedOne">
                                <input type="checkbox" value="None" id="roundedOne" name="check"/>
                                <label htmlFor="roundedOne"></label>
                            </div>
                            <div className="rm-me">Remember me</div>
                            <div className="fg-password"><a id="forget-password" href="/">Forget password?</a></div>
                        </div>
                        <div className="buttons_2">
                            <button type="submit" className="button_login">Log in</button>
                            <button className="button_registration" onClick={routeRegistration}>Registration</button>
                        </div>
                    </form>
                </div>
                {error.length !== 0 &&
                <Alert style={{marginTop: '20px'}} variant="danger">
                    {error}
                </Alert>
                }
            </div>
        </div>
    )
}

export default LoginPage;
