import { FC, useState, useEffect } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import './Portfolio.css';
import {
    JSONResponseType,
    EducationType,
    LanguagesAndToolsType,
    SoftSkillsType,
    SoftEngHardSkillsType,
    PentestHardSkillsType,
    WorkXPType,
    IdiomType,
} from '../../shared/Types';
import { REMOTE_URL } from '../../shared/constants';

export const PortfolioPage: FC = () => {
    const [education, updateEducation] = useState<Array<EducationType>>();
    const [languageTools, updateLanguageTools] =
        useState<Array<LanguagesAndToolsType>>();
    const [softSkillsData, updateSoftSkills] =
        useState<Array<SoftSkillsType>>();
    const [softEngHardSkills, updateSoftEngHardSkills] =
        useState<Array<SoftEngHardSkillsType>>();
    const [pentestHardSkills, updatePentestHardSkills] =
        useState<Array<PentestHardSkillsType>>();
    const [workXP, updateWorkXP] = useState<Array<WorkXPType>>();
    const [idiom, updateIdiom] = useState<Array<IdiomType>>();

    useEffect(() => {
        (async () => {
            try {
                // GET /education
                const educationRequest = (await (
                    await fetch(REMOTE_URL + '/education')
                ).json()) as JSONResponseType;

                if (Number(educationRequest.statusCode) !== 200) {
                    console.error(educationRequest.statusCode);
                } else {
                    updateEducation([...educationRequest.data]);
                }

                // GET /languagestools
                const languageToolsRequest = (await (
                    await fetch(REMOTE_URL + '/languagestools')
                ).json()) as JSONResponseType;

                if (Number(languageToolsRequest.statusCode) !== 200) {
                    console.error(languageToolsRequest.statusCode);
                } else {
                    updateLanguageTools([...educationRequest.data]);
                }

                // GET /softskills
                const softSkillsRequest = (await (
                    await fetch(REMOTE_URL + '/softskills')
                ).json()) as JSONResponseType;

                if (Number(softSkillsRequest.statusCode) !== 200) {
                    console.error(softSkillsRequest.statusCode);
                } else {
                    updateSoftSkills([...softSkillsRequest.data]);
                }

                // GET /softenghardskills
                const softEngHardSkillsRequest = (await (
                    await fetch(REMOTE_URL + '/softenghardskills')
                ).json()) as JSONResponseType;

                if (Number(softEngHardSkillsRequest.statusCode) !== 200) {
                    console.error(softEngHardSkillsRequest.statusCode);
                } else {
                    updateSoftEngHardSkills([...softEngHardSkillsRequest.data]);
                }

                // GET /pentesthardskills
                const pentestHardSkillsRequest = (await (
                    await fetch(REMOTE_URL + '/pentesthardskills')
                ).json()) as JSONResponseType;

                if (Number(pentestHardSkillsRequest.statusCode) !== 200) {
                    console.error(pentestHardSkillsRequest.statusCode);
                } else {
                    updatePentestHardSkills([...pentestHardSkillsRequest.data]);
                }

                // GET /workxp
                const workXPRequest = (await (
                    await fetch(REMOTE_URL + '/workxp')
                ).json()) as JSONResponseType;

                if (Number(workXPRequest.statusCode) !== 200) {
                    console.error(workXPRequest.statusCode);
                } else {
                    updateWorkXP([...workXPRequest.data]);
                }

                // GET /idiom
                const idiomRequest = (await (
                    await fetch(REMOTE_URL + '/idiom')
                ).json()) as JSONResponseType;

                if (Number(idiomRequest.statusCode) !== 200) {
                    console.error(idiomRequest.statusCode);
                } else {
                    updateIdiom([...idiomRequest.data]);
                }
            } catch (error) {
                console.log(error);
            }
        })();
    }, []);
    return (
        <>
            <Menu />
            <div className="container-fluid py-5">
                <div className="informations">
                    <section className="education mb-5">
                        <h5 className="title fw-bolder">Education</h5>
                        <hr />
                        {education?.map((value, index) => (
                            <p className="text-normal" key={index}>
                                {value.graduated
                                    ? `Estudou ${value.course} na ${value.school}`
                                    : `Estudante do ${value.currentemester} de ${value.course} na ${value.school}`}
                            </p>
                        ))}
                    </section>
                    <section className="language-tools mb-5">
                        <h5 className="title fw-bolder">Languages and tools</h5>
                        <hr />
                        <ul>
                            {languageTools?.map((value, index) => (
                                <li className="m-2" key={index}>
                                    <img
                                        className="m-2"
                                        src={value.toolImage}
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
                            {softSkillsData?.map((value, index) => (
                                <li key={index}>
                                    <p>{value.softSkill}</p>
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
                            {softEngHardSkills?.map((value, index) => (
                                <li key={index}>
                                    <p>{value.hardSkill}</p>
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
                            {pentestHardSkills?.map((value, index) => (
                                <li key={index}>
                                    <p>{value.hardSkill}</p>
                                </li>
                            ))}
                        </ul>
                    </section>
                    <section className="work-exp mb-5">
                        <h5 className="title fw-bolder">Work Experience</h5>
                        <hr />
                        <ul>
                            {workXP?.map((value, index) => (
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
                                    <section className="d-flex justify-content-start">
                                        <p className="fw-bolder titulo-portfolio">
                                            Start Date:&#160;
                                        </p>

                                        <p className="fw-normal">
                                            {' '}
                                            {new Date(value.startDate).getDay()}
                                            /
                                            {new Date(
                                                value.startDate
                                            ).getMonth()}
                                            /
                                            {new Date(
                                                value.startDate
                                            ).getFullYear()}
                                        </p>
                                    </section>
                                    <section className="d-flex justify-content-start">
                                        <p className="fw-bolder titulo-portfolio">
                                            End Date:&#160;
                                        </p>

                                        <p className="fw-normal">
                                            {' '}
                                            {new Date(value.endDate).getDay()}/
                                            {new Date(value.endDate).getMonth()}
                                            /
                                            {new Date(
                                                value.endDate
                                            ).getFullYear()}
                                        </p>
                                    </section>
                                    <hr />
                                </article>
                            ))}
                        </ul>
                    </section>

                    <section className="idiom mb-5">
                        <h5 className="title fw-bolder">Idioms</h5>
                        <hr />
                        <ul>
                            {idiom?.map((value, index) => (
                                <article key={index}>
                                    <p className="fw-bolder titulo-portfolio">
                                        Idiom :{' '}
                                        <span className="fst-italic">
                                            {value.language}.{' '}
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
