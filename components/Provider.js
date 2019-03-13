const { Component } = React

const MyContext = React.createContext();
class MyProvider extends Component {
  
  constructor() {
    
    super()
    this.state = {
      points: 0,
      type: ""
    }
  }

  render() {
    const { points } = this.state;
    const { children } = this.props;
    return (
      <MyContext.Provider value={
        {data: this.state,
         updatePoints: basePoints => this.setState(
           { points: points + (!basePoints ? 100 : basePoints) }
           ),
         updateType: type => this.setState({type: type})  
        }}
      >
        { children }
      </MyContext.Provider>
    )
  }
}

const MahContext = MyContext.Consumer
export default MyProvider;
export { MahContext }; 
