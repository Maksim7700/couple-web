import {useState} from 'react';
import './loginpage.css';
import {userLogin} from '../api/authenticationService';
import {Alert} from 'react-bootstrap';

const LoginPage=({...props})=>{

    const [values, setValues] = useState({
        userName: '',
        password: ''
        });
    const [error, setError] = useState("");

    const handleSubmit=(evt)=>{
        evt.preventDefault();

        userLogin(values).then((response)=>{

            console.log("response",response);
            if(response.status===200){
                localStorage.setItem('USER_KEY',response.data.token);
                props.history.push('/user');
            }
            else{
                setError("Error not 200 status");
            }
        }).catch((err)=>{

            if(err && err.response){
            
            switch(err.response.status){
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

    return (
        <div className="login-page">
        <section className="h-100">
        <div className="container h-100">
            <div className="row justify-content-md-center h-100">
                <div className="card-wrapper">
                    <div className="card fat">
                        <div className="card-body">
                            <h4 className="card-title">Login</h4>
                            <form className="my-login-validation" onSubmit={handleSubmit} noValidate={false}>
                                <div className="form-group">
                                    <label htmlFor="email">User Name</label>
                                    <input id="username" type="text" className="form-control" minLength={5} value={values.userName} onChange={handleChange} name="userName" required />
                                </div>
                                <div className="form-group">
                                    <label>Password
                                        <a href="forgot.html" className="float-right">
                                            Forgot Password?
                                        </a>
                                    </label>
                                    <input id="password" type="password" className="form-control" minLength={5} value={values.password} onChange={handleChange} name="password" required/>

                                </div>

                                <div className="form-group">
                                    <div className="custom-control custom-checkbox">
                                        <input type="checkbox" className="custom-control-input" id="customCheck1" />
                                        <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                                     </div>
                                </div>


                                <div className="form-group m-0">
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                    </button>
                                </div>
                            </form>
                            { error.length !== 0 &&
                            <Alert style={{marginTop:'20px'}} variant="danger">
                                    {error}
                                </Alert>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
        </div>
    )
}

export default LoginPage;
