import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <Link className="navbar-brand" to="/">The Eagle's Eye</Link>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/top-headlines">Top Headlines</Link>
                            </li>
                           <li className="nav-item">
                                <Link className="nav-link" aria-current="page" to="/everything">Everything</Link>
                            </li>
                            <li className="nav-item">
                                <Link className="nav-link" to="/about">About</Link>
                            </li><li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="navbar-brand dropdown-item" to="/technology">technology</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/sports">sports</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/science">science</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/health">health</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/general">general</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/entertainment">entertainment</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/business">business</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="navbar-brand dropdown-item" to="/world">World</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ae">United Arab Emirates</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ar">Argentina</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/at">Austria</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/au">Australia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/be">Belgium</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/bg">Bulgaria</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/br">Brazil</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ca">Canada</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ch">Switzerland</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/cn">China</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/co">Colombia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/cu">Cuba</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/cz">Czech Republic</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/de">Germany</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/fr">France</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/gb">United Kingdom</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/gr">Greece</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/hk">Hong Kong</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/hu">Hungary</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/id">Indonesia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/in">India</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ie">Ireland</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/il">Israel</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/it">Italy</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/jp">Japan</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/kr">Korea, Republic</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/lt">Lithuania</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/lv">Latvia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ma">Morocco</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/mx">Mexico</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/my">Malaysia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ng">Nigeria</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/nl">Netherlands</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/no">Norway</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/nz">New Zealand</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ph">Philippines</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/pl">Poland</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/pt">Portugal</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ro">Romania</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ru">Russian Federation</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/sa<">Saudi Arabia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/se">Sweden</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/sg">Singapore</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/si">Slovenia</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/sk">Slovakia (Slovak Republic)</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/th">Thailand</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/tr">Turkey</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/tw">Taiwan</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/ua">Ukraine</Link></li>
                                    <li><Link className="navbar-brand dropdown-item" to="/us">United States</Link></li>
                                </ul>
                            </li>
                        </ul>
                        <form className="d-flex" role="search">
                            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
                            <button className="btn btn-outline-success" type="submit">Search</button>
                        </form>
                    </div>
                </div>
            </nav></div>
        )
    }
}
