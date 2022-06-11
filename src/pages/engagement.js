import * as React from 'react'
import Layout from '../components/layout'
import ReactPlayer from 'react-player'

const AboutPage = () => {
  return (
    <Layout pageTitle="-Ela disse SIM ♥♥♥♥">
       <div style={{display: 'flex', justifyContent: 'center', flexDirection: 'column', gap: '10px'}}>
        <iframe src="https://giphy.com/embed/gaJPlAdO21ns6Z2M3e"  frameBorder="0"></iframe>
        <iframe src="https://giphy.com/embed/ge2Ww4gBDZNhaUyJg5"  frameBorder="0"></iframe>
        <iframe src="https://giphy.com/embed/MXXnurORT4D6Hk0lu6"  frameBorder="0"></iframe>    
        <iframe src="https://giphy.com/embed/lOsZiZtBywjwmqt4Qb"  frameBorder="0"></iframe>
        </div>

        <div style={{display: 'flex', justifyContent: 'center'}}>
        <ReactPlayer height='180px' width='320px' url='https://www.youtube.com/watch?v=rkWwDN-ZHR4' playing={true} />
        </div>
    </Layout>
  )
}
export default AboutPage