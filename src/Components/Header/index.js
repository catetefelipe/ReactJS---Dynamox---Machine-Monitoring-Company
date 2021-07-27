import React, {useState} from "react";
import "./styles.css";

// MOVE O USUÁRIO ATÉ A SECTION CLICADA NA NAVABAR
import { Link } from "react-scroll";

// COMPONENTE ROUTE
// componentes do tipo <Route /> que direcionam para outras páginas da SPA
import DynaPredictLi from "../../RouteComponents/DinaPredictLi/index"; // primeiro link da nav
import LogoHeader from "../../RouteComponents/LogoHeader/index"; // route do logo para a home

// REACT-ICONS
import { AiOutlineMenu } from "react-icons/ai";
import { AiFillCloseSquare } from "react-icons/ai";



function Header() {

    /* BARRA LATERAL || sidebar: valor | setSidebar: função que altera o estado | 3º: valor atual (false) */
    const [sidebar, setSidebar] = useState(false);

    /* showSidebar: função ser ativada no clique | setSidebar(!sidebar): vai alterar o valor atual de false para true ou vice-versa (false-true / true-false) */
    const showSidebar = () => setSidebar(!sidebar);

    return (
        <>
            <div className="navbar">
                <div className="logo_and_hambmenu">
                    <div className="nav_logo_div">
                        <LogoHeader />               {/* logo */}
                    </div>
                        <Link to="#" className="menu_symbol menu_symbol_1">
                            <span onClick={showSidebar}>
                                <AiOutlineMenu />
                            </span>
                        </Link>
                </div>


                <nav className={sidebar ? "nav-menu active" : "nav-menu"}>
                    <ul className="nav-menu-items">
                        <li className="navbar-toggle">
                            <Link onClick={showSidebar} to="#" className="menu_symbol menu_symbol_2">
                                <AiFillCloseSquare />
                            </Link>
                        </li>
                        <li>
                            <DynaPredictLi name="DynaPredict" />
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="home_section2"
                            spy={true}
                            smooth={true}
                            offset={60}
                            duration={1500}
                                >
                                Sensores
                            </Link>
                        </li>
                        <li>
                            <Link
                            activeClass="active"
                            to="home_section3"
                            spy={true}
                            smooth={true}
                            offset={0}
                            duration={1500}
                                >
                                Contato
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
}

export default Header

