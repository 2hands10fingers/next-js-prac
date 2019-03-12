const { Component } = React

const MyContext = React.createContext();
class MyProvider extends Component {
  
  constructor() {
    
    super()
    this.state = {
      points: 0
    }
  }

  render() {
    return (
      <MyContext.Provider value={
        {data: this.state,
         updatePoints: basePoints => this.setState(
           {
             points: this.state.points + basePoints
          }) 
        }}
      >
        {this.props.children}
      </MyContext.Provider>
    )
  }
}

const MahContext = MyContext.Consumer
export default MyProvider;
export {MahContext} 
