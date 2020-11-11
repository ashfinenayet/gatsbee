import React from 'react';
import { graphql } from "gatsby";

import Post from "../components/Post";
import { Helmet } from 'react-helmet';
export const AllBlogsQuery = graphql`
  query AllBlogPosts {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            date
            title
            description
            author
            path
          }
        }
      }
    }
  }
`

const Blog = ({ data }) => (
  <>
    <Helmet><title>Blog</title></Helmet>
    <h1>Blog</h1>
    { 
      data.allMarkdownRemark.edges.map(post => {
        const { title, author, date, description, path } = post.node.frontmatter;

        return (
          <Post
            title={title}
            author={author}
            date={date}
            description={description}
            key={`${date}__${title}`}
            path={path}
          />
        )
      })
    }
  </>
);

export default Blog;