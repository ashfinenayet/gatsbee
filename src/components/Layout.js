import React from "react"
import { Link } from "gatsby"
import { List } from "@material-ui/core"
const ListLink = props => (
  <li style={{ display: `inline-block`, marginRight: `5rem` }}>
    <Link to={props.to}>{props.children}</Link>
  </li>
)
export default function Layout({ children }) {
  return (
    <div style={{ margin: `3rem auto`, maxWidth: 600, padding: `0 1rem` }}>
      <header style={{ marginBottom: `1.5rem` }}>
        <Link to="/" style={{ textShadow: `none`, backgroundImage: `none` }}>
          <h2 style={{ color: '#C3073F' , display: `inline`, fontWeight: `bold`  }}>Ashfin Enayet</h2>
        </Link>
        <ul style={{  listStyle: `none`, float: `right` }}>
        
          <ListLink to="/About/">About</ListLink>
          <ListLink to="/contact/">Contact</ListLink>
    
          
        </ul>
      </header>
      {children}
    </div>
  )
}