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
      <p style={{color:'green', fontSize:'20px', textAlign: 'justify'}}>
      <MDXRenderer >
        {data.mdx.body}
      </MDXRenderer>
      </p>
      <div style ={{display:'flex', flexDirection: 'column'}}>
        <input style={{height: '30px', borderRadius: '4px', padding: "1px 10px", color:'black', fontWeight: 600, marginBottom: '12px'}} onChange={inputAnwser} type="text"/>
        <button style={{height: '40px', borderRadius: '4px', padding: "1px 10px", color:'#fff', fontWeight: 600, marginBottom: '12px', backgroundColor: '#333'}} onClick = {handleButton}> Enviar </button>
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