import Layout from '../components/MyLayout.js'
import Link from 'next/link'
const {Component} = React 

function getPosts () {
  return [
    { id: 'hello-nextjs', title: 'Hello Next.js'},
    { id: 'learn-nextjs', title: 'Learn Next.js is awesome'},
    { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT'},
  ]
}

const PostLink = ({ post }) => (
  <li>
    <Link as={`/p/${post.id}`} href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
    <style jsx>{`
      h1, a {
        font-family: "Arial";
      }

      ul {
        padding: 0;
      }

      li {
        list-style: none;
        margin: 5px 0;
      }

      a {
        text-decoration: none;
        color: blue;
      }

      a:hover {
        opacity: 0.6;
      }
    `}</style>
  </li>
)

export default class extends Component {
  constructor() {
    super()
    this.state = {
      everything: ['universe', 'philosophy', 'eatthis'],
      num: 0
    }
  }

  changer = () => {
    this.state.num  <= 1 ? 
      this.setState({num: this.state.num + 1}) :
      this.setState({num: 0}) 
  }

  render() {
    return (
      <Layout>
    <h1>My Blog</h1>
    <button onClick={this.changer}>Change</button>
    <h2>{this.state.everything[this.state.num]}</h2>
    <ul>
      {getPosts().map((post) => (
        <PostLink key={post.id} post={post}/>
      ))}
    </ul>
  </Layout>
    )
  }
  
}