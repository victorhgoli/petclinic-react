import React from 'react';
import { Card } from 'react-bootstrap';

// import { Container } from './styles';

function SignUp() {
    return (
        <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Card style={{ width: '18em'}}>
                <Card.Body>
                    <form>
                        <h3>Register</h3>

                        <div className="form-group">
                            <label>First name</label>
                            <input type="text" className="form-control" placeholder="First name" />
                        </div>

                        <div className="form-group">
                            <label>Last name</label>
                            <input type="text" className="form-control" placeholder="Last name" />
                        </div>

                        <div className="form-group">
                            <label>Email</label>
                            <input type="email" className="form-control" placeholder="Enter email" />
                        </div>

                        <div className="form-group">
                            <label>Password</label>
                            <input type="password" className="form-control" placeholder="Enter password" />
                        </div>

                        <button type="submit" className="btn btn-dark btn-lg btn-block">Register</button>
                        <p className="forgot-password text-right">
                            Already registered <a href="#">log in?</a>
                        </p>
                    </form>
                </Card.Body>
            </Card>
        </div>
    );
}

export default SignUp;