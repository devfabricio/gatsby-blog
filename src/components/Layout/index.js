import * as React from "react"
import PropTypes from "prop-types"
import Profile from "../Profile"
import styled from "styled-components"

const LayoutWrapper = styled.section`
  display: flex;
`

const LayoutMain = styled.main`
  background: #16202c;
  min-height: 100vh;
  padding: 0 3.75rem 0 20rem;
  width: 100%;
`

const Layout = ({ children }) => {

  return (
    <>
      <aside>
        <Profile />
      </aside>
      <main>{children}</main>
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
