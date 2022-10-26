import { FC } from 'react';
import './Login.css';
import { Menu } from '../../../components/Menu/Menu';
import { Footer } from '../../../components/Footer/Footer';
import { handleLogin } from '../../../components/shared/login';

export const Login: FC = () => {
    return (
        <>
            <Menu />
            <div className="container-fluid py-5">
                <form className="form my-5" method="POST" action="#">
                    <div className="mb-3">
                        <label htmlFor="username" className="form-label">
                            Username
                        </label>
                        <input
                            type="text"
                            className="form-control"
                            id="username"
                            placeholder="username"
                            required
                        />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">
                            Password
                        </label>
                        <input
                            type="password"
                            className="form-control"
                            id="password"
                            placeholder="*************************"
                            required
                        />
                    </div>
                    <button
                        className="btn btn-primary"
                        type="submit"
                        onClick={handleLogin}
                    >
                        Login
                    </button>
                </form>
            </div>
            <Footer />
        </>
    );
};
