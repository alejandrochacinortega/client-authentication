import { Field, reduxForm } from 'redux-form'

import React from 'react';

class SignIn extends React.Component {

    test({ email, password }) {
        console.log(' email & password ', email, password);
    }

    render() {
        const { handleSubmit} = this.props;

        return (
            <form onSubmit={handleSubmit(this.test.bind(this))}>
                <div>
                    <label>Username</label>
                    <div>
                        <Field name="email" component="input" type="text" placeholder="Email"/>
                    </div>
                </div>
                <div>
                    <label>Password</label>
                    <div>
                        <Field name="password" component="input" type="text" placeholder="Password"/>
                    </div>
                </div>
                <div>
                    <button type="submit">Submit</button>
                </div>
            </form>
        )
    }

}

export default reduxForm({
    form: 'signin'  // a unique identifier for this form
})(SignIn)