import * as React from "react";
import styled from 'styled-components'
// import { useStaticQuery, graphql } from "gatsby";
// import parse from "html-react-parser";

const HomeStyles = styled.div`
 display: grid;
 place-items: center;
 height: 100vh;
 text-align: center;
 

`;


export default function IndexPage() {
//   const data = useStaticQuery(graphql`
//    {
//   allWpPost {
//     nodes {
//       id
//       title
//       excerpt
//       uri
//       content
//     }
//   }
// }

//   `)
  // const { allWpPost }  = data;
  return (
    <HomeStyles>
    <div>
      <h1>Jef Wright</h1>
      <h2>I'm working on it</h2>
        {/* {allWpPost.nodes.map((post) =>  (
          <div key={post.id}>
            <h1 dangerouslySetInnerHTML={{__html: post.title}} ></h1>
            <h1>{parse(post.title)}</h1>
            <p> {post.excerpt}</p>
            
            <hr />
            <p >{parse(post.content)}</p>
            </div>
            ))} */}
          
    </div>
            </HomeStyles>
  )
};


  
