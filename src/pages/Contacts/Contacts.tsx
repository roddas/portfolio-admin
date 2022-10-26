import { Menu } from '../../components/Menu/Menu';
import { Footer } from '../../components/Footer/Footer';
import './Contacts.css';
import githubImage from './svg/github.svg';
import gmailImage from './svg/gmail.svg';
import linkedinImage from './svg/linkedin.svg';

export const ContactsPage = () => {
    return (
        <>
            <Menu />
            <div className="container-fluid py-5">
                <div className="text-center info">
                    <h1 className="fw-lighter mb-5">
                        Get in touch with me through
                    </h1>
                    <ul>
                        <li>
                            <a
                                href="https://www.linkedin.com/in/rodolfo-neves-937324158/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={linkedinImage}
                                    width={128}
                                    height={128}
                                    alt="Linkedin"
                                />
                            </a>
                        </li>
                        <li>
                            <a href="mailto:roddas360@gmail.com">
                                <img
                                    src={gmailImage}
                                    width={128}
                                    height={128}
                                    alt="Linkedin"
                                />
                            </a>
                        </li>
                        <li>
                            <a
                                href="https://github.com/roddas/"
                                target="_blank"
                                rel="noreferrer"
                            >
                                <img
                                    src={githubImage}
                                    width={128}
                                    height={128}
                                    alt="Linkedin"
                                />
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            <Footer />
        </>
    );
};
