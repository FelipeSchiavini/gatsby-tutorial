import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby';

const BlogPost = ({ data }) => {
  const [anwser, setAnwser] = React.useState("")
  
  const image = getImage(data.mdx.frontmatter.hero_image)

  const inputAnwser = (event) => {
    setAnwser(event.target.value)
  }

  const handleButton = () => {
    console.log(data.mdx.frontmatter)
    if(data.mdx.frontmatter.resposta.includes(anwser.toLowerCase())){
      navigate(`/${data.mdx.frontmatter.next_quiz}/`)
      console.log(data.mdx.frontmatter)
    }
    
  }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />  
      <p style={{color:'red', fontSize:'20px'}}>
      <MDXRenderer >
        {data.mdx.body}
      </MDXRenderer>
      </p>
      <div style ={{display:'flex', flexDirection: 'column'}}>
        <input onChange={inputAnwser} type="text"/>
        <button onClick = {handleButton}> Enviar </button>
      </div>
    </Layout>
  )
}
export const query = graphql`
  query($id: String) {
    mdx(id: {eq: $id}) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        hero_image_credit_link
        hero_image_credit_text
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        resposta
        next_quiz

      }
  }
}`

export default BlogPost