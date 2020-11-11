import React from "react";
import { graphql, Link } from "gatsby";
import "./blogTemplate.css";


export default function Template({ data }) {
    const post = data.markdownRemark;
    const { title, author, date } = post.frontmatter;
    
    return (
      
        <Link to="/Blog/">Back to blogs</Link>
        <div className="blog">
        <h1>{title}</h1>
        <p>Posted by {author} on {date}</p>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
        </div>
     
    )
  };

  export const postQuery = graphql`
  query BlogPost($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path }}) {
      frontmatter {
        author
        date
        title
        path
      }
      html
    }
  }
`;