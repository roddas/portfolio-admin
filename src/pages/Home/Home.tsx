import { FC } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import homeImage from './user.svg';

export const Home: FC = () => (
    <>
        <Menu />
        <div className="container-fluid py-5">
            <div className="d-flex justify-content-center">
                <section className="information align-self-baseline">
                    <h1 className="fw-lighter">
                        Hi there, I’m{' '}
                        <span className="fw-bolder">Rodolfo Cabral Neves,</span>
                    </h1>
                    <h3 className="fst-italic">
                        a Software Engineering student at University of
                        Brasília.
                    </h3>
                </section>
                <section className="image align-self-baseline">
                    <img src={homeImage} alt="" />
                </section>
            </div>
        </div>
        <Footer />
    </>
);
