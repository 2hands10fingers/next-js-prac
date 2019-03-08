import React, { Component } from 'react';
import ContentBlock from './ContentBlock';

export default class CharSelect extends Component {
  constructor() {
    super()
    this.state = {
      char: undefined
    }
  }

  namer = (char) => {
    switch(char) {
      case undefined:
        return "???";
      case "meme":
        return "Antonio";
      default:
        return char;
    }
  }

  render() {
    const {side, charName} = this.props
    return (
      <div className={`char--select-container ${side}`}>
       <ContentBlock>
        <div className={`char--char-box ${charName}`}>
          <img src={`https://glotacosm.com/img/char/char-${ charName === undefined ? 'unknown' : charName }.png`} />
        </div>
       
          <div className="char--name">
            { this.namer(charName) }
          </div>
      </ContentBlock>
      </div>
    )
  }
}