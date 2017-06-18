import React from 'react';
import GoogleLogin from 'react-google-login';


export default class SigninButtonGoogle extends React.Component {

    render() {
        var setUser = this.props.setUser
        const responseGoogle = (response) => {
            const user = {
                nome : response.profileObj['name'],
                email : response.profileObj['email'],
            }
            setUser(user)
            this.props.closeModal()
        }
        return (
            <div>
                <GoogleLogin
                    clientId="658977310896-knrl3gka66fldh83dao2rhgbblmd4un9.apps.googleusercontent.com"
                    buttonText="Google"
                    onSuccess={responseGoogle}
                    onFailure={responseGoogle}
                />
            </div>
        )
    }
}

