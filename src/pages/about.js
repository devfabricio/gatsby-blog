import React from 'react'
import { Link } from "gatsby"
import Index from "../components/Layout"
import Seo from "../components/seo"

const AboutPage = () => (
  <Index>
    <Seo title={'About'} />
    <h1>About Page</h1>
    <ul>
      <li>
        <Link to={'/'} activeStyle={{color: 'red'}}>Home</Link>
      </li>
      <li>
        <Link to={'/about'} activeStyle={{color: 'red'}}>About (Gatsby Link)</Link>
      </li>
    </ul>
  </Index>
)

export default AboutPage