import Stagger from './Stagger';
import React from 'react';
import {mount} from 'enzyme';

describe('Stagger component', () => {
  let testProps;
  let wrapper;

  beforeEach(() => {
    spyOn(window, 'setTimeout');
    const children = [<div>One</div>, <div>Two</div>];
    testProps = {
      transition: 'zoom',
      delay: 100,
      initialDelay: 10,
      className: 'testContainer',
      children,
    };

    wrapper = mount(<Stagger {...testProps} />);
  });

  describe('initial state', () => {
    it('sets childrenAdded to empty array and animationDone to false', () => {
      expect(wrapper.state('childrenAdded')).toEqual([]);
      expect(wrapper.state('animationDone')).toBe(false);
    });
  });

  describe('componentWillMount', () => {
    beforeEach(() => {
      wrapper.instance().componentWillMount();
    });

    it('sets itemsAdded to 0', () => {
      expect(wrapper.instance().itemsAdded).toBe(0);
    });

    it('queues up the first animation', () => {
      expect(window.setTimeout).toHaveBeenCalledWith(wrapper.instance().addItem, 10);
    });
  });

  describe('addItem', () => {
    describe('when there are still items left', () => {
      beforeEach(() => {
        wrapper.instance().addItem();
      });

      it('adds the next item to childrenAdded', () => {
        expect(wrapper.state('childrenAdded')).toEqual([<div>One</div>]);
      });

      it('increments itemsAdded', () => {
        expect(wrapper.instance().itemsAdded).toBe(1);
      });

      it('sets the timer', () => {
        expect(window.setTimeout).toHaveBeenCalledWith(wrapper.instance().addItem, 100);
      });
    });

    describe('when there are no items left', () => {
      it('sets animationDone to true', () => {
        wrapper.instance().itemsAdded = 2;
        wrapper.instance().addItem();
        expect(wrapper.state('animationDone')).toBe(true);
      });
    });
  });

  describe('render', () => {
    it('renders the container', () => {
      expect(wrapper.hasClass('testContainer')).toBe(true);
    });

    describe('when none of the children have been added', () => {
      it('adds the enter class to all the children', () => {
        expect(
          wrapper
            .find('div.testContainer')
            .children()
            .every('.zoom-enter'),
        ).toBe(true);
      });
    });

    describe('when one of the children has been added', () => {
      it('adds the enter and active classes', () => {
        wrapper.instance().addItem();
        wrapper.update();
        expect(
          wrapper
            .find('div.testContainer')
            .children()
            .at(0)
            .prop('className'),
        ).toBe('zoom-enter zoom-enter-active');
        expect(
          wrapper
            .find('div.testContainer')
            .children()
            .at(1)
            .prop('className'),
        ).toBe('zoom-enter');
      });
    });
  });
});
