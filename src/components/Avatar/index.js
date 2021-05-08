import React from 'react'
import { graphql, useStaticQuery } from "gatsby"
import { StaticImage } from 'gatsby-plugin-image'

const Avatar = () => {
  const { avatarImage } = useStaticQuery(
    graphql`
      query {
        avatarImage: file(relativePath: { eq: "profile-photo.jpeg" }) {
          childImageSharp {
            gatsbyImageData(layout: FIXED)
          }
        }
      }
    `
  )

  return <StaticImage src={'../../images/profile-photo.jpeg'} alt={'Fabrício Augusto'} placeholder={'blurred'} />
}

export default Avatar