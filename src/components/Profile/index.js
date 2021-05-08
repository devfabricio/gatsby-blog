import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import Avatar from "../Avatar"

const Profile = () => {
  const data = useStaticQuery(graphql`
    query MySiteMetaData {
      site {
        siteMetadata {
          title
          description
          position
        }
      }
    } 
  `)

  return (
    <div className={'Profile-wrapper'}>
      <Avatar />
      <h1>{data.site.siteMetadata.title}</h1>
      <p>{data.site.siteMetadata.position}</p>
      <p>{data.site.siteMetadata.description}</p>
  </div>
  )
}

export default Profile