
// src/pages/index.js

import React from "react"
import { graphql } from "gatsby"
import Header from '../components/Header/Header';
import Sidenav from "../components/Sidenav/Sidenav";

const IndexPage = ({data}) => {
  const { markdownRemark } = data // data.markdownRemark holds your post data
  const { frontmatter, html } = markdownRemark
  return (
    <div className="d-flex flex-column">
      <Header />
      <div className="d-flex">
        <Sidenav />
        <div className="markdown-body p-5">
          <h1 className="h1">{frontmatter.title}</h1>
          <div
            className="blog-post-content"
            dangerouslySetInnerHTML={{ __html: html }}
          />
        </div>
      </div>
    </div>
)}

export default IndexPage

export const pageQuery = graphql`
  query IndexPageQuery {
    markdownRemark(fileAbsolutePath: { regex: "/index.md/" }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        path
        title
      }
    }
  }
`
