import Stagger from './Stagger';
import React from 'react';
import ReactDOM from 'react-dom';
import TestUtils from 'react-addons-test-utils';

describe('Stagger component', function() {
  beforeEach(function() {
    spyOn(window, 'setTimeout');
    const children = [<div>One</div>, <div>Two</div>];
    this.testProps = {
      transition: 'zoom',
      delay: 100,
      initialDelay: 10,
      className: 'testContainer',
      children
    };
    this.component = TestUtils.renderIntoDocument(<Stagger {...this.testProps} />);
    this.node = ReactDOM.findDOMNode(this.component);
  });

  describe('initial state', function() {
    it('sets childrenAdded to empty array and animationDone to false', function() {
      expect(this.component.state.childrenAdded).toEqual([]);
      expect(this.component.state.animationDone).toBe(false);
    });
  });

  describe('componentWillMount', function() {
    beforeEach(function() {
      this.component.componentWillMount();
    });

    it('sets itemsAdded to 0', function() {
      expect(this.component.itemsAdded).toBe(0);
    });

    it('queues up the first animation', function() {
      expect(window.setTimeout).toHaveBeenCalledWith(this.component.addItem, 10);
    });
  });

  describe('addItem', function() {
    describe('when there are still items left', function() {
      beforeEach(function() {
        this.component.addItem();
      });

      it('adds the next item to childrenAdded', function() {
        expect(this.component.state.childrenAdded).toEqual([<div>One</div>]);
      });

      it('increments itemsAdded', function() {
        expect(this.component.itemsAdded).toBe(1);
      });

      it('sets the timer', function() {
        expect(window.setTimeout).toHaveBeenCalledWith(this.component.addItem, 100);
      });
    });

    describe('when there are no items left', function() {
      it('sets animationDone to true', function() {
        this.component.itemsAdded = 2;
        this.component.addItem();
        expect(this.component.state.animationDone).toBe(true);
      });
    });
  });

  describe('render', function() {
    it('renders the container', function() {
      expect(this.node.className).toBe('testContainer');
    });

    describe('when none of the children have been added', function() {
      it('adds the enter class to all the children', function() {
        expect(this.node.children[0].className).toBe('zoom-enter');
        expect(this.node.children[1].className).toBe('zoom-enter');
      });
    });

    describe('when one of the children has been added', function() {
      it('adds the enter and active classes', function() {
        this.component.addItem();
        expect(this.node.children[0].className).toBe('zoom-enter zoom-enter-active');
        expect(this.node.children[1].className).toBe('zoom-enter');
      });
    });
  });
});

