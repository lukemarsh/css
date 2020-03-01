import React from 'react';
import { StaticQuery, graphql, Link } from "gatsby"
import Measure from 'react-measure';
import classnames from 'classnames';
import './sidenav.scss';


const Sidenav = ({result}) => {
  const [top, setTop] = React.useState(0)

  return (
    <Measure bounds={true} onResize={rect => setTop(rect.bounds.top)}>
      {({measureRef}) => (
        <div
          ref={measureRef}
          className={classnames("position-sticky", "sidenav", "bg-gray-light")}
          style={{
            top: top,
            height: `calc(100vh - ${top}px)`
          }}
        >
          <div className="border-right height-full overflow-auto">
          <StaticQuery
            query={graphql`
              query {
                allMarkdownRemark(
                  sort: { order: DESC, fields: [frontmatter___date] }
                  limit: 1000
                ) {
                  edges {
                    node {
                      frontmatter {
                        path
                        title
                        show_in_nav
                      }
                    }
                  }
                }
              }
            `}
            render={data => {
              const { allMarkdownRemark } = data // data.markdownRemark holds your post data
              const { edges } = allMarkdownRemark
              return (
                <div className="p-4">
                  {edges.map(({ node }) => {
                    const { frontmatter } = node;
                    return <div key={frontmatter.title} className="mt-2"><Link className="pt-1 pb-1 mt-2 d-block" to={frontmatter.path}>{frontmatter.title}</Link></div>
                  })}
                </div>
              )
            }}
          />
          </div>
        </div>
      )}
    </Measure>
  )
}

export default Sidenav;
