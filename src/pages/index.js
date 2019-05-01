import React from "react"
import Logo from '../static/img/logo-s.png';
import Layout from "../components/layout"
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Modals from '../components/Modals';
import Awards from '../components/Awards';
const IndexPage = () => (
  <Layout>
    <About/>
    <Experience/>
    <Portfolio/>
    <Skills/>
    <Awards/>
    <Modals/>
  </Layout>
)

export default IndexPage
