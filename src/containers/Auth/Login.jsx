import React, { Component } from 'react';
import { connect } from 'react-redux';
import { push } from "connected-react-router";


// import * as actions from "../../store/actions";
import * as actions from "../../store/actions";
import './Login.scss';
import '../../styles/styles.scss';


class Login extends Component {
    constructor(props) {
        super(props);
        this.btnLogin = React.createRef();
        this.state = {
            isShowingPaswword: false,
            userName: '',
            password: '',


        }
    }
    handleOnChangeInput = (event, type) => {
        this.setState({
            [type]: event.target.value
        })
        console.log(event.target.value);
    }
    handelLogin = () => {
        console.log(`userName: ${this.state.userName} , password ${this.state.password}`);
        return false;
    }
    handelHideShowPassword = () => {
        this.setState({
            isShowingPaswword: !this.state.isShowingPaswword
        })
    }

    render() {
        return (
            <div className="login-background">

                <div className="login-container container">
                    <div className="login-frame row">

                        <div className="login-content col">
                            <div className="login-title">
                                <div className="login-h">
                                    <h1>LOGIN</h1>
                                </div>
                                <div className="login-h small-logan">
                                    <h5>Welcome to the hikkywannafly heath care</h5>
                                </div>

                            </div>
                            {/* <form> */}
                            <div className="login-area">
                                <div className="login-form">
                                    <input type="text" className="input-style"
                                        value={this.state.userName}
                                        onChange={(event) => this.handleOnChangeInput(event, 'userName')}></input>
                                    <span className="span-style"></span>
                                    <label className="label-style">Username</label>
                                </div>
                                <br></br>
                                <div className="login-form ">
                                    <input type={!this.state.isShowingPaswword ? 'password' : 'text'} className="input-style"
                                        value={this.state.password}
                                        onChange={(event) => { this.handleOnChangeInput(event, 'password') }}></input>
                                    <span className="span-style"></span>
                                    <label className="label-style" >Password</label>
                                    <div className='control-password'
                                        onClick={(event) => this.handelHideShowPassword()} >
                                        <span clasName="show-hide">{!this.state.isShowingPaswword ? 'Show' : 'Hide'}</span></div>

                                </div>
                            </div>



                            <div className="input-control row">
                                <div className="col forgot">
                                    <span className="d"> Forgot Password?</span>
                                </div>
                                <div className="col">
                                    <div className="wrapper">
                                        <button
                                            onClick={(event) => this.handelLogin(event)}>
                                            <span >Login</span>
                                        </button>
                                    </div>
                                </div>
                            </div>

                            <div className="striped">
                                <span className="striped-line"></span>
                                <span className="striped-text">Or</span>
                                <span className="striped-line"></span>
                            </div>
                            <div className="wrapper">
                                <button> <span>Register</span></button>
                            </div>
                            <div className="striped">
                                <span className="striped-line"></span>
                                <span className="striped-text">Login with social</span>
                                <span className="striped-line"></span>
                            </div>
                            <div className="login-social">
                                <div className="wrapper google">
                                    <button className="className"> <span><img src="https://accounts.fullstack.edu.vn/assets/images/signin/google-18px.svg"></img> Continue with Google</span></button>

                                </div>
                                <div className="wrapper fb">
                                    <button className=" button-google"> <span><i className="fab fa-facebook-f"></i> Continue with Facebook</span></button>
                                </div>
                            </div>

                            {/* </form> */}

                        </div>
                        {/* <div className="login-image col">
                            <img src="https://static.vecteezy.com/system/resources/previews/002/003/810/non_2x/doctor-character-vector.jpg"></img>
                        </div> */}

                    </div>
                </div >
            </div >



        );
    }
}



const mapStateToProps = state => {
    return {
        lang: state.app.language
    };
};

const mapDispatchToProps = dispatch => {
    return {
        navigate: (path) => dispatch(push(path)),
        adminLoginSuccess: (adminInfo) => dispatch(actions.adminLoginSuccess(adminInfo)),
        adminLoginFail: () => dispatch(actions.adminLoginFail()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Login);
