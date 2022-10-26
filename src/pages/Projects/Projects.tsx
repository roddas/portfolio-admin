import { FC } from 'react';
import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import './Projects.css';
import { projectsList } from '../../mocks/projects';
// import { ProjectType } from './TypeProject';

export const ProjectsPage: FC = () => {
    // const [projects,setProjects] = useState<ProjectType>();
    return (
        <>
            <Menu />
            <div className="container-fluid py-5">
                {projectsList.map((value, index) => {
                    return (
                        <div
                            key={index}
                            className="d-flex justify-content-center mb-3"
                        >
                            <section
                                className="projectImage justify-content-end"
                                key={index}
                            >
                                <img
                                    src={value.image}
                                    width={256}
                                    height={256}
                                    alt=""
                                />
                            </section>
                            <section className="projectInformations align-items-center p-3">
                                <p className="fw-bolder titulo">
                                    {value.title}
                                </p>
                                <p className="fst-normal">
                                    {value.description}
                                </p>
                                <p className="fw-bolder titulo">
                                    Estado :{' '}
                                    <span className="fst-italic">
                                        {value.state}.{' '}
                                    </span>
                                </p>
                                <span className="fw-bolder titulo">
                                    Link :{' '}
                                    <a
                                        target="_blank"
                                        href={value.link}
                                        className="fst-italic fw-lighter"
                                        rel="noreferrer"
                                    >
                                        Clique aqui{' '}
                                    </a>
                                </span>
                            </section>
                        </div>
                    );
                })}
            </div>
            <Footer />
        </>
    );
};
