import * as React from 'react'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const AboutPage = () => {
  return (
    <Layout pageTitle="♥♥♥♥ Ela disse SIM ♥♥♥♥">
        <iframe src="https://giphy.com/embed/gaJPlAdO21ns6Z2M3e" width='500px' frameBorder="0"></iframe>
        <iframe src="https://giphy.com/embed/ge2Ww4gBDZNhaUyJg5" width='500px' frameBorder="0"></iframe>
          <ReactPlayer style={{maxWidth: '500px'}} url='https://www.youtube.com/watch?v=rkWwDN-ZHR4' playing={true} />
        <iframe src="https://giphy.com/embed/MXXnurORT4D6Hk0lu6" width='500px' frameBorder="0"></iframe>    
        <iframe src="https://giphy.com/embed/lOsZiZtBywjwmqt4Qb" width='500px' frameBorder="0"></iframe>
    </Layout>
  )
}
export default AboutPage