const {Component} = React
class Modal extends Component {
  constructor() {
    super()
    this.state = {
      triggered: false
    }
  }

  render() {
    const { triggered } = this.state
    return (
      <div className="modal--container">
        HELLO
        <style jsx>{`
        .modal--container {
          opacity: ${!triggered ? 0 : 1}
        }
      `}</style>
      </div>
    )
  }


}

export default Modal;