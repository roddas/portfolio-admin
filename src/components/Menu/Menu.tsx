import './Menu.css';

export const Menu = () => (
    <>
        <nav className="navbar text-center fixed-top">
            <ul className="mb-5">
                <li>
                    <a href="/">Me</a>
                </li>
                <li>
                    <a href="projects">Projects</a>
                </li>
                <li>
                    <a href="portfolio">Portfolio</a>
                </li>
                <li>
                    <a href="about">Contacts</a>
                </li>
            </ul>
        </nav>
        <div className="my-5"></div>
    </>
);
