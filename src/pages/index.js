import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import Img from "gatsby-image"

const Index = () => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      allFile(filter: { extension: { regex: "/(jpg)/" } }) {
        edges {
          node {
            name
            base
            childImageSharp {
              id
              fluid {
                aspectRatio
                base64
                sizes
                src
                srcSet
              }
            }
          }
        }
      }
    }
  `);

  return (
    <div className="container mx-auto px-[6rem] py-[6rem]">
      <main className="py-14 px-4 mx-auto max-w-7xl">
        <div className="lg:columns-4 md:columns-3 columns-1 gap-3 mx-auto space-y-3 pb-28">
          {data.allFile.edges.map(({ node }) => (
            <div className="break-inside-avoid" key={node.childImageSharp.id}>
              <Img fluid={node.childImageSharp.fluid} alt={node.name} />
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default Index;
