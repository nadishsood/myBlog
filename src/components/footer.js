import React from "react";
import { graphql, useStaticQuery } from 'gatsby';

const Footer = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)


const siteMetadata = data.site.siteMetadata;

  return (
    <div>
      <h6></h6>
    </div>
  )
}

export default Footer
