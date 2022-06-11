import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import {
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const Layout = ({ pageTitle, children }) => {

  const data = useStaticQuery(graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
  `)


  return (
      <div className={container}>
        <title >{pageTitle}</title>
        <header className={siteTitle}>Neno <span>&</span> Nena</header>
          <ul className={navLinks}>
            <li className={navLinkItem}><Link to="/" className={navLinkText}>Home</Link></li>
            <li className={navLinkItem}>
              <Link to={'/pergunta-1c'} className={navLinkText}>
                Quiz
              </Link>
            </li>
          </ul>
        <main>
          <h1 className={heading}>{pageTitle}</h1>
          {children}
         
        </main>
      </div>
    )
  }
  export default Layout