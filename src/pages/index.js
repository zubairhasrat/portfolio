import React from "react"
import Layout from "../components/layout"
import About from '../components/About';
import Experience from '../components/Experience';
import Portfolio from '../components/Portfolio';
import Skills from '../components/Skills';
import Modals from '../components/Modals';
import Awards from '../components/Awards';
import Contact from '../components/Contact';

const IndexPage = () => (
  <Layout>
    <About/>
    {/* <Experience/> */}
    <Portfolio/>
    <Skills/>
    <Awards/>
    <Modals/>
    <Contact/>
  </Layout>
)

export default IndexPage
