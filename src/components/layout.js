/**
 * Layout component that queries for data
 * with Gatsby's StaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/static-query/
 */

import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import { Link } from "gatsby";
import '../static/css/bootstrap/bootstrap.min.css';
import '../static/font-awesome/css/font-awesome.min.css';
import '../static/css/devicons/css/devicons.min.css';
import '../static/css/simple-line-icons/css/simple-line-icons.css';
import '../static/css/style.css';
import Header from "./header";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <>
        <Header siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </>
    )}
  />
)

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout