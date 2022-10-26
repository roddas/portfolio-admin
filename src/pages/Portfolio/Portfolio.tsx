import { FC } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import './Portfolio.css';
import { portfolioData } from '../../mocks/portfolio';

export const PortfolioPage: FC = () => {
    const {
        education,
        languageToolsIcons,
        hardSkillsProgramming,
        hardSkillsCyberSec,
        softSkills,
        workExperience,
        idioms,
    } = portfolioData;

    return (
        <>
            <Menu />
            <div className="container-fluid py-5">
                <div className="informations">
                    <section className="education mb-5">
                        <h5 className="title fw-bolder">Education</h5>
                        <hr />
                        {education.map((value, index) => (
                            <p className="text-normal" key={index}>
                                {value}
                            </p>
                        ))}
                    </section>
                    <section className="language-tools mb-5">
                        <h5 className="title fw-bolder">Languages and tools</h5>
                        <hr />
                        <ul>
                            {languageToolsIcons.map((value, index) => (
                                <li className="m-2" key={index}>
                                    <img
                                        className="m-2"
                                        src={value}
                                        alt=""
                                        width={96}
                                        height={96}
                                    />
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="softskills mb-5">
                        <h5 className="title fw-bolder">Softskills</h5>
                        <hr />
                        <ul>
                            {softSkills.map((value, index) => (
                                <li key={index}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="hardskills mb-5">
                        <h5 className="title fw-bolder">
                            HardSkills in Software Engineering field
                        </h5>
                        <hr />
                        <ul>
                            {hardSkillsProgramming.map((value, index) => (
                                <li key={index}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="hardskills mb-5">
                        <h5 className="title fw-bolder">
                            HardSkills in Penetration Test field
                        </h5>
                        <hr />
                        <ul>
                            {hardSkillsCyberSec.map((value, index) => (
                                <li key={index}>
                                    <p>{value}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="work-exp mb-5">
                        <h5 className="title fw-bolder">Work Experience</h5>
                        <hr />
                        <ul>
                            {workExperience.map((value, index) => (
                                <article key={index}>
                                    <p className="fw-bolder titulo-portfolio">
                                        Company :{' '}
                                        <span className="fst-italic">
                                            {value.company}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        Role :{' '}
                                        <span className="fst-italic">
                                            {value.role}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        Description :{' '}
                                        <span className="fst-italic">
                                            {value.description}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        Start Date :{' '}
                                        <span className="fst-italic">
                                            {value.startDate}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        End Date :{' '}
                                        <span className="fst-italic">
                                            {value.endDate}.{' '}
                                        </span>
                                    </p>
                                    <hr />
                                </article>
                            ))}
                        </ul>
                    </section>

                    <section className="idiom mb-5">
                        <h5 className="title fw-bolder">Idioms</h5>
                        <hr />
                        <ul>
                            {idioms.map((value, index) => (
                                <article key={index}>
                                    <p className="fw-bolder titulo-portfolio">
                                        Idiom :{' '}
                                        <span className="fst-italic">
                                            {value.idiom}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        Written :{' '}
                                        <span className="fst-italic">
                                            {value.written}.{' '}
                                        </span>
                                    </p>
                                    <p className="fw-bolder titulo-portfolio">
                                        Spoken :{' '}
                                        <span className="fst-italic">
                                            {value.spoken}.{' '}
                                        </span>
                                    </p>
                                    <hr />
                                </article>
                            ))}
                        </ul>
                    </section>
                </div>
            </div>
            <Footer />
        </>
    );
};
