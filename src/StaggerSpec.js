import Stagger from './Stagger';
import React from 'react';
import TestUtils from 'react-addons-test-utils';

describe('Stagger component', function() {
  describe('initial state', function() {
    beforeEach(function() {
      const children = [<div>One</div>, <div>Two</div>];
      const testProps = { transition: 'testTransition', delay: 100, children };
      this.component = TestUtils.renderIntoDocument(<Stagger {...testProps} />);
      //this.node = ReactDOM.findDOMNode(component);
    });

    it('sets childrenAdded to empty array and animationDone to false', function() {
      expect(this.component.state.childrenAdded).toEqual([]);
      expect(this.component.state.animationDone).toBe(false);
    });
  });
});

