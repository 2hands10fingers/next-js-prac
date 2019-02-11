import Header from './Header'
import Sidebar from './Sidebar'
import '../styles/index.sass'
import '../styles/misc.css'
import Head from 'next/head'

const layoutStyle = {
  margin: 20,
  padding: 20,
  border: '1px solid #DDD'
}

const Layout = (props) => (
  <div>
    {/* <Header /> */}
    <Head>
      <link href="https://fonts.googleapis.com/css?family=Press+Start+2P" rel="stylesheet" />
    </Head>
    <Sidebar menu={props.menu}/>
    <style jsx>{`
      body {
        background-color: darkseagreen;
      }
    
    `}
    </style>
    {props.children}
  </div>
)

export default Layout