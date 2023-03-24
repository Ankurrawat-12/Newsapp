import React, { Component } from 'react'
import { Link } from "react-router-dom";

export default class Navbar extends Component {
    render() {
        return (
            <div><nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">The Eagle's Eye</a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/top-headlines">Top Headlines</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/everything">Everything</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="/about">About</a>
                            </li><li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Category
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="navbar-brand" to="/technology">technology</Link></li>
                                    <li><Link className="navbar-brand" to="/sports">sports</Link></li>
                                    <li><Link className="navbar-brand" to="/science">science</Link></li>
                                    <li><Link className="navbar-brand" to="/health">health</Link></li>
                                    <li><Link className="navbar-brand" to="/general">general</Link></li>
                                    <li><Link className="navbar-brand" to="/entertainment">entertainment</Link></li>
                                    <li><Link className="navbar-brand" to="/business">business</Link></li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a className="nav-link dropdown-toggle" href="/" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                                    Country
                                </a>
                                <ul className="dropdown-menu">
                                    <li><Link className="navbar-brand" to="/world">World</Link></li>
                                    <li><Link className="navbar-brand" to="/ae">United Arab Emirates</Link></li>
                                    <li><Link className="navbar-brand" to="/ar">Argentina</Link></li>
                                    <li><Link className="navbar-brand" to="/at">Austria</Link></li>
                                    <li><Link className="navbar-brand" to="/au">Australia</Link></li>
                                    <li><Link className="navbar-brand" to="/be">Belgium</Link></li>
                                    <li><Link className="navbar-brand" to="/bg">Bulgaria</Link></li>
                                    <li><Link className="navbar-brand" to="/br">Brazil</Link></li>
                                    <li><Link className="navbar-brand" to="/ca">Canada</Link></li>
                                    <li><Link className="navbar-brand" to="/ch">Switzerland</Link></li>
                                    <li><Link className="navbar-brand" to="/cn">China</Link></li>
                                    <li><Link className="navbar-brand" to="/co">Colombia</Link></li>
                                    <li><Link className="navbar-brand" to="/cu">Cuba</Link></li>
                                    <li><Link className="navbar-brand" to="/cz">Czech Republic</Link></li>
                                    <li><Link className="navbar-brand" to="/de">Germany</Link></li>
                                    <li><Link className="navbar-brand" to="/fr">France</Link></li>
                                    <li><Link className="navbar-brand" to="/gb">United Kingdom</Link></li>
                                    <li><Link className="navbar-brand" to="/gr">Greece</Link></li>
                                    <li><Link className="navbar-brand" to="/hk">Hong Kong</Link></li>
                                    <li><Link className="navbar-brand" to="/hu">Hungary</Link></li>
                                    <li><Link className="navbar-brand" to="/id">Indonesia</Link></li>
                                    <li><Link className="navbar-brand" to="/in">India</Link></li>
                                    <li><Link className="navbar-brand" to="/ie">Ireland</Link></li>
                                    <li><Link className="navbar-brand" to="/il">Israel</Link></li>
                                    <li><Link className="navbar-brand" to="/it">Italy</Link></li>
                                    <li><Link className="navbar-brand" to="/jp">Japan</Link></li>
                                    <li><Link className="navbar-brand" to="/kr">Korea, Republic</Link></li>
                                    <li><Link className="navbar-brand" to="/lt">Lithuania</Link></li>
                                    <li><Link className="navbar-brand" to="/lv">Latvia</Link></li>
                                    <li><Link className="navbar-brand" to="/ma">Morocco</Link></li>
                                    <li><Link className="navbar-brand" to="/mx">Mexico</Link></li>
                                    <li><Link className="navbar-brand" to="/my">Malaysia</Link></li>
                                    <li><Link className="navbar-brand" to="/ng">Nigeria</Link></li>
                                    <li><Link className="navbar-brand" to="/nl">Netherlands</Link></li>
                                    <li><Link className="navbar-brand" to="/no">Norway</Link></li>
                                    <li><Link className="navbar-brand" to="/nz">New Zealand</Link></li>
                                    <li><Link className="navbar-brand" to="/ph">Philippines</Link></li>
                                    <li><Link className="navbar-brand" to="/pl">Poland</Link></li>
                                    <li><Link className="navbar-brand" to="/pt">Portugal</Link></li>
                                    <li><Link className="navbar-brand" to="/ro">Romania</Link></li>
                                    <li><Link className="navbar-brand" to="/ru">Russian Federation</Link></li>
                                    <li><Link className="navbar-brand" to="/sa<">Saudi Arabia</Link></li>
                                    <li><Link className="navbar-brand" to="/se">Sweden</Link></li>
                                    <li><Link className="navbar-brand" to="/sg">Singapore</Link></li>
                                    <li><Link className="navbar-brand" to="/si">Slovenia</Link></li>
                                    <li><Link className="navbar-brand" to="/sk">Slovakia (Slovak Republic)</Link></li>
                                    <li><Link className="navbar-brand" to="/th">Thailand</Link></li>
                                    <li><Link className="navbar-brand" to="/tr">Turkey</Link></li>
                                    <li><Link className="navbar-brand" to="/tw">Taiwan</Link></li>
                                    <li><Link className="navbar-brand" to="/ua">Ukraine</Link></li>
                                    <li><Link className="navbar-brand" to="/us">United States</Link></li>
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
