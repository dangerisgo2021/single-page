import classnames from 'classnames';
import React from 'react';

import { preventDefault } from '../../preventDefault';
import '../Slideshow.scss';

export class SlideshowComponent extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      el: null,
    };
  }

  componentDidMount() {
    setTimeout(() => this.forceUpdate(), 100);
    window.addEventListener('resize', () => this.forceUpdate());
  }

  componentWillUnmount() {
    window.removeEventListener('resize', () => this.forceUpdate());
  }

  render() {
    const rect = this.el ? this.el.getBoundingClientRect() : {};
    console.log(this.props)

    return (
      <div class={classnames('slideshow', this.props.className)} ref={(ref) => this.el = ref}>
        {
          React.Children.map(this.props.children, ((child, i) => {

            const current = this.props.currentIndex === i;
            const previous = this.props.previousIndex === i;

            const show = current ||  previous;
            const { width } = rect;
            let style = { width };
            return (
              <div class={classnames('slide', { current, previous, show })} style={style}>
                {child}
              </div>
            );
          }))
        }
      </div>
    );
  }
}
