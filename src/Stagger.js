import React from 'react';

const propTypes = {
  delay: React.PropTypes.number.isRequired,
  initialDelay: React.PropTypes.number,
  transition: React.PropTypes.string.isRequired,
  className: React.PropTypes.string,
};

const defaultProps = {
  initialDelay: 1,
};

export default class Stagger extends React.Component {
  constructor() {
    super();
    this.state = { childrenAdded : [], animationDone: false };

    this.addItem = this.addItem.bind(this);
  }

  componentWillMount() {
    this.itemsAdded = 0;
    this.timeout = setTimeout(this.addItem, this.props.initialDelay);
  }

  addItem() {
    if (this.itemsAdded < this.props.children.length) {
      this.setState({
        childrenAdded: [...this.state.childrenAdded, this.props.children[this.itemsAdded]]
      });
      this.itemsAdded++;

      // Queue up the next addition
      this.timeout = setTimeout(this.addItem, this.props.delay);
    }
    else {
      this.setState({ animationDone: true });
    }
  }

  render() {
    return (
      <div className={this.props.className}>
        { this.state.animationDone
            ? this.props.children
            : this.props.children.map((child, index) => {

              const transitionClassName = index >= this.state.childrenAdded.length
                ? `${this.props.transition}-enter`
                : `${this.props.transition}-enter ${this.props.transition}-enter-active`;

              const className = child.props.className
                ? [child.props.className, transitionClassName].join(' ')
                : transitionClassName;

              return React.cloneElement(child, { className });
            })
        }
      </div>
    );
  }
}

Stagger.propTypes = propTypes;
Stagger.defaultProps = defaultProps;
