import React from 'react';
import './GoogleAuth.css';
import { connect } from 'react-redux';
import { signIn, signOut } from '../actions';

class GoogleAuth extends React.Component{

    state = { isSignedIn: null }

    componentDidMount(){
        window.gapi.load('client:auth2', () =>{
            window.gapi.client.init({
                clientId: '18856970381-p86ce4oh2gld3lv1rlqa83snpt917nqv.apps.googleusercontent.com',
                scope: 'email'
            }).then(()=>{
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get());
                this.auth.isSignedIn.listen(this.onAuthChange);
            })
        });
    }

    onAuthChange = (isSignedIn) => {
        if(isSignedIn)
            this.props.signIn(this.auth.currentUser.get().getId());
        else   
            this.props.signOut();
    };

    onSignInClick = () =>{
        this.auth.signIn();
    }

    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton(){
        if(this.props.auth.isSignedIn === null)
            return null;
        else if(this.props.auth.isSignedIn)
            return(
                <div>
                    <button onClick={this.onSignOutClick} className="ui basic green google button outline">
                        <i className="google icon"></i>
                        <label>Sign Out</label>
                    </button>
                </div>
                
            ) 
        else 
            return (
                <div>
                    <button onClick={this.onSignInClick} className="ui basic green google button outline">
                        <i className="google icon"></i>
                        <label>Sign In</label>
                    </button>
                </div>
            )
    }

    render(){
        return (
            <div className="center-button">
                {this.renderAuthButton()}
            </div>
        )
    }
}

const mapStateToProps = (state) =>{
    return {auth: state.auth}
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);