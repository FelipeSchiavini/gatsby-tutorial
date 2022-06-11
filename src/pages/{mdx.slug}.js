import * as React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import Layout from '../components/layout'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import { navigate } from 'gatsby';
import Alert from '@mui/material/Alert';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

const sucess = ['Boa Neno por isso que você é a melhor', 'Booooooooouuuuaaaaa Baby !!!!! s2', 'Nada mal para uma Schiavini ;D', "Mi Neno eres uno Genio !!!!!", "Top !!!!!!!"]
const errorList = ["Poxa Neno !! Você pode fazer muiiiito melhor do que isso", "....quem sabe na próxima", 'Neno eu to com fomee!! Acerta logo!', "Qualé Neno??? essa era fácil", "se me der uns 10 beijos posso te dar uma dica"]
const BlogPost = ({ data }) => {
  const [anwser, setAnwser] = React.useState("")
  const [sucessMsg, SetSucessMsg] = React.useState(sucess[0])
  const [errorMsg, SetErrorMsg] = React.useState(errorList[0])
  const [showSucess, setShowSucess] = React.useState(false)
  const [showError, setShowError] = React.useState(false)

  
  const image = getImage(data.mdx.frontmatter.hero_image)
  const inputAnwser = (event) => {
    setAnwser(event.target.value)
  }

  const handleButton = () => {
      const index = Math.floor(Math.random()*sucess.length)
      SetSucessMsg(sucess[index])
      SetErrorMsg(errorList[index])
      if(data.mdx.frontmatter.resposta.includes(anwser.toLowerCase())){
          setShowSucess(true)
          setTimeout(()=> navigate(`/${data.mdx.frontmatter.next_quiz}/`), 2500)
          return
    }
        setShowError(true)
        setTimeout(()=> setShowError(false), 2500)
  }

  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
    
    {showSucess && <Alert style = {{position: 'fixed', top: 0,left:0, right:0, width:'100%', zIndex: 3}} severity="success">{sucessMsg}</Alert>}
    {showError && <Alert style = {{position: 'fixed', top: 0,left:0, top: 0, width:'100%', zIndex: 3}} severity="error">{errorMsg}</Alert>}

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
        <Button style={{backgroundColor: 'rebeccapurple'}} onClick = {handleButton} variant="contained" endIcon={<SendIcon />}>
        Enviar Resposta
      </Button>
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
        hero_image_alt
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