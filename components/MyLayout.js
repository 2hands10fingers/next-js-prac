import Sidebar from './Sidebar'
import Head from 'next/head'
// import bgImg from '../static/images/bg.jpg'
import '../styles/index.sass'
import '../styles/misc.css'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    <Head>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
    </Head>
    <style jsx global>{`
    body {
      background: url('http://i.imgur.com/F0gBD6c.png') no-repeat;
    }
    
  `}
  </style>
    <Sidebar menu={props.menu}/>
    {props.children}
  </div>
)

export default Layout