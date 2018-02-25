import React from 'react';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

const ComponentShell = Component => (props: {}) => (
  <div className="component">
    <ReactCSSTransitionGroup
      transitionAppear={true}
      transitionAppearTimeout={600}
      transitionEnterTimeout={600}
      transitionLeaveTimeout={200}
      transitionName="PageTransition"
    >
      <Component {...props} />
    </ReactCSSTransitionGroup>
  </div>
);

export default ComponentShell;
