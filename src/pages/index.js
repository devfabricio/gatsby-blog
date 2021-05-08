import * as React from "react"
import { Link } from 'gatsby'
import { StaticImage } from "gatsby-plugin-image"
import Index from "../components/Layout"
import Seo from "../components/seo"

const IndexPage = () => (
  <Index>
    <Seo title="Home" />
    <h1>Home</h1>
    <ul>
      <li>
        <Link to={'/'} activeStyle={{color: 'red'}}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About (Gatsby Link)</Link>
      </li>
    </ul>
  </Index>
)

export default IndexPage
