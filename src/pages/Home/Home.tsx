import { useState, useEffect } from 'react';
import { FC } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { NoData } from '../../components/Misc/NoData';
import { Footer } from '../../components/Footer/Footer';
import homeImage from './user.svg';
import { JSONResponseType, AboutType } from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';

export const Home: FC = () => {
    const [aboutMe, setInformations] = useState<AboutType>();
    useEffect(() => {
        const getData = async () => {
            try {
                const response = await fetch(REMOTE_URL + '/aboutme');
                const jsonData = (await response.json()) as JSONResponseType;
                const { statusCode, data } = jsonData;

                if (Number(statusCode) !== 200) {
                    console.error(statusCode);
                } else {
                    setInformations(data);
                }
            } catch (err) {
                console.log(err);
            }
        };
        getData();
    }, []);

    if (aboutMe) {
        const { fullName, occupation, localOfOccupation } = aboutMe;
        return (
            <>
                <Menu />
                <div className="container-fluid py-5">
                    <div className="d-flex justify-content-center">
                        <section className="information align-self-baseline">
                            <h1 className="fw-lighter">
                                Hi there, I’m
                                <span className="fw-bolder"> {fullName}</span>
                            </h1>
                            <h3 className="fst-italic">
                                a {occupation} at {localOfOccupation}.
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
    } else {
        return (
            <>
                <Menu />
                <NoData />
                <Footer />
            </>
        );
    }
};
