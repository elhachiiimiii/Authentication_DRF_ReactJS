import React, { useContext } from 'react';
import AuthContext from '../context/AuthContext';

const LoginPage = () => {
    let { loginUser } = useContext(AuthContext);

    return (
        <div className="container">
            <div className="row justify-content-center">
                <div className="col-md-6">
                    <div className="card mt-5">
                        <div className="card-body">
                            <h3 className="card-title text-center">Login</h3>
                            <form onSubmit={loginUser}>
                                <div className="form-group">
                                    <label htmlFor="username">Username</label>
                                    <input
                                        type="text"
                                        name="username"
                                        className="form-control"
                                        placeholder="Enter Username"
                                        required
                                    />
                                </div>
                                <div className="form-group">
                                    <label htmlFor="password">Password</label>
                                    <input
                                        type="password"
                                        name="password"
                                        className="form-control"
                                        placeholder="Enter Password"
                                        required
                                    />
                                </div>
                                <button type="submit" className="btn btn-primary btn-block mt-3">
                                    submit
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LoginPage;
