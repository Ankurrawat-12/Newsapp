import './App.css';
import React, { Component } from 'react'
import Navbar from './components/Navbar';
import News from './components/News';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from './components/About';

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      country: "",
      category: "",
      mode: "light"
    }
  }
  render() {
    return (
      <div>
        <Router>
          <Navbar />
          <Routes>
            <Route exact path="/about"
              element={<About mode={this.state.mode} />}
            />
            <Route exact path="/"
              element={<News headline="top-headlines" country="in" category="" query="" />}
            />
            <Route exact path="/top-headlines"
              element={<News headline="top-headlines" country="in" category="" query="" />}
            />
            <Route exact path="/everything"
              element={<News headline="everything" country="" category="" query="The World" />}
            />
            <Route exact path="/technology" element={<News headline="top-headlines" country="" category="technology" query="" />} />
            <Route exact path="/sports" element={<News headline="top-headlines" country="" category="sports" query="" />} />
            <Route exact path="/science" element={<News headline="top-headlines" country="" category="science" query="" />} />
            <Route exact path="/health" element={<News headline="top-headlines" country="" category="health" query="" />} />
            <Route exact path="/general" element={<News headline="top-headlines" country="" category="general" query="" />} />
            <Route exact path="/entertainment" element={<News headline="top-headlines" country="" category="entertainment" query="" />} />
            <Route exact path="/business" element={<News headline="top-headlines" country="" category="business" query="" />} />
            <Route exact path="/world"element={<News headline="everything" country="" category="" query="The World" />}/>
            <Route exact path="/ae" element={<News headline="top-headlines" country="ae" category="" query="" />} />
            <Route exact path="/ar" element={<News headline="top-headlines" country="ar" category="" query="" />} />
            <Route exact path="/at" element={<News headline="top-headlines" country="at" category="" query="" />} />
            <Route exact path="/au" element={<News headline="top-headlines" country="au" category="" query="" />} />
            <Route exact path="/be" element={<News headline="top-headlines" country="be" category="" query="" />} />
            <Route exact path="/bg" element={<News headline="top-headlines" country="bg" category="" query="" />} />
            <Route exact path="/br" element={<News headline="top-headlines" country="br" category="" query="" />} />
            <Route exact path="/ca" element={<News headline="top-headlines" country="ca" category="" query="" />} />
            <Route exact path="/ch" element={<News headline="top-headlines" country="ch" category="" query="" />} />
            <Route exact path="/cn" element={<News headline="top-headlines" country="cn" category="" query="" />} />
            <Route exact path="/co" element={<News headline="top-headlines" country="co" category="" query="" />} />
            <Route exact path="/cu" element={<News headline="top-headlines" country="cu" category="" query="" />} />
            <Route exact path="/cz" element={<News headline="top-headlines" country="cz" category="" query="" />} />
            <Route exact path="/de" element={<News headline="top-headlines" country="de" category="" query="" />} />
            <Route exact path="/fr" element={<News headline="top-headlines" country="fr" category="" query="" />} />
            <Route exact path="/gb" element={<News headline="top-headlines" country="gb" category="" query="" />} />
            <Route exact path="/gr" element={<News headline="top-headlines" country="gr" category="" query="" />} />
            <Route exact path="/hk" element={<News headline="top-headlines" country="hk" category="" query="" />} />
            <Route exact path="/hu" element={<News headline="top-headlines" country="hu" category="" query="" />} />
            <Route exact path="/id" element={<News headline="top-headlines" country="id" category="" query="" />} />
            <Route exact path="/ie" element={<News headline="top-headlines" country="ie" category="" query="" />} />
            <Route exact path="/il" element={<News headline="top-headlines" country="il" category="" query="" />} />
            <Route exact path="/in" element={<News headline="top-headlines" country="in" category="" query="" />} />
            <Route exact path="/it" element={<News headline="top-headlines" country="it" category="" query="" />} />
            <Route exact path="/jp" element={<News headline="top-headlines" country="jp" category="" query="" />} />
            <Route exact path="/kr" element={<News headline="top-headlines" country="kr" category="" query="" />} />
            <Route exact path="/lt" element={<News headline="top-headlines" country="lt" category="" query="" />} />
            <Route exact path="/lv" element={<News headline="top-headlines" country="lv" category="" query="" />} />
            <Route exact path="/ma" element={<News headline="top-headlines" country="ma" category="" query="" />} />
            <Route exact path="/mx" element={<News headline="top-headlines" country="mx" category="" query="" />} />
            <Route exact path="/my" element={<News headline="top-headlines" country="my" category="" query="" />} />
            <Route exact path="/ng" element={<News headline="top-headlines" country="ng" category="" query="" />} />
            <Route exact path="/nl" element={<News headline="top-headlines" country="nl" category="" query="" />} />
            <Route exact path="/no" element={<News headline="top-headlines" country="no" category="" query="" />} />
            <Route exact path="/nz" element={<News headline="top-headlines" country="nz" category="" query="" />} />
            <Route exact path="/ph" element={<News headline="top-headlines" country="ph" category="" query="" />} />
            <Route exact path="/pl" element={<News headline="top-headlines" country="pl" category="" query="" />} />
            <Route exact path="/pt" element={<News headline="top-headlines" country="pt" category="" query="" />} />
            <Route exact path="/ro" element={<News headline="top-headlines" country="ro" category="" query="" />} />
            <Route exact path="/ru" element={<News headline="top-headlines" country="ru" category="" query="" />} />
            <Route exact path="/sa" element={<News headline="top-headlines" country="sa" category="" query="" />} />
            <Route exact path="/se" element={<News headline="top-headlines" country="se" category="" query="" />} />
            <Route exact path="/sg" element={<News headline="top-headlines" country="sg" category="" query="" />} />
            <Route exact path="/si" element={<News headline="top-headlines" country="si" category="" query="" />} />
            <Route exact path="/sk" element={<News headline="top-headlines" country="sk" category="" query="" />} />
            <Route exact path="/th" element={<News headline="top-headlines" country="th" category="" query="" />} />
            <Route exact path="/tr" element={<News headline="top-headlines" country="tr" category="" query="" />} />
            <Route exact path="/tw" element={<News headline="top-headlines" country="tw" category="" query="" />} />
            <Route exact path="/ua" element={<News headline="top-headlines" country="ua" category="" query="" />} />
            <Route exact path="/us" element={<News headline="top-headlines" country="us" category="" query="" />} />
          </Routes>
        </Router>
      </div>
    )
  }
}
