import Link from 'next/link';
import Head from "next/head";


export function MainLayout({children, title = "FLOORBALL-APP"}) {
    return(
        <>
            <Head>
                <title>{title} | ZP-FLOORBALL</title>
                <meta name charSet="utf-8"/>
            </Head>

            <header className="header-content">
                <div className="logo">
                    <Link href={'/'}>
                        <a className="logo-brand" itemScope itemType="http://schema.org/ImageObject">
                            <img src="images/logo-white-site.png" itemProp="contentUrl" alt="logo" />
                        </a>
                    </Link>
                </div>
                <nav className="menu-box">
                    <ul className="menu">
                        <li className="menu__item">
                            <Link href={"#about-section"}>
                                <a  className="menu__link">О нас</a>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link href={"#statistic-section"}>
                                <a className="menu__link">Статистика</a>
                            </Link>

                        </li>
                        <li className="menu__item">
                            <Link href={"#schedule"}>
                                <a className="menu__link">Расписание</a>
                            </Link>

                        </li>
                        <li className="menu__item">
                            <Link href={"#team"}>
                                <a className="menu__link">Команда</a>
                            </Link>
                        </li>
                        <li className="menu__item">
                            <Link href={"#contact"}>
                                <a className="menu__link">Контакты</a>
                            </Link>
                        </li>
                    </ul>
                    <div className="menu-icon-box">
                        <div className="menu-icon"></div>
                    </div>
                </nav>
            </header>

            <main className={"main"}>
                {children}
            </main>

            <footer className="footer">
                <div className="footer__top">
                    <div className="container">
                        <div className="row">
                            <div className="col-sm-2">
                                <div className="logo-bottom">
                                    <a href="./"><img src="images/logo-white-site.png" alt="logo" /></a>
                                </div>
                            </div>
                            <div className="col-sm-10 text-right">
                                <div className="footer__title">
                                    Social
                                </div>
                                <ul className="social">
                                    <li className="social-block">
                                        <a href="https://www.facebook.com/zp.floorball/" target="_blank"
                                           className="social__link fb no-before">
                                            <span className="icon fab fa-facebook-f"></span>
                                        </a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="footer__bottom">
                    <div className="container">
                        <div className="col-sm-12">
                            <div className="copyright">
                                Copyright © 2021
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </>
    )
}