import React from 'react';
import { expect } from 'chai';
import { spy } from 'sinon';
import { mount, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import useStateWithCallback, {
  useStateWithCallbackInstant,
} from './';

const SomeComponent = () => {
  const [count, setCount] = useStateWithCallback(0, count => {
    if (count > 1) {
      document.title = 'Threshold of over 1 reached.';
    } else {
      document.title = 'No threshold reached.';
    }
  });

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

const SomeOtherComponent = () => {
  const [count, setCount] = useStateWithCallbackInstant(0, count => {
    if (count > 1) {
      document.title = 'Threshold of over 1 reached.';
    } else {
      document.title = 'No threshold reached.';
    }
  });

  return (
    <div>
      <p>{count}</p>

      <button type="button" onClick={() => setCount(count + 1)}>
        Increase
      </button>
    </div>
  );
};

describe('useStateWithCallback', () => {
  it('works the same as useState, but calls a callback function', () => {
    const wrapper = mount(<SomeComponent />);

    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).to.eql('0');

    expect(document.title).to.eql('No threshold reached.');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).to.eql('1');

    expect(document.title).to.eql('No threshold reached.');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(document.title).to.eql('Threshold of over 1 reached.');
  });
});

describe('useStateWithCallbackInstant', () => {
  it('works the same as useState, but calls a callback function', () => {
    const wrapper = mount(<SomeOtherComponent />);

    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).to.eql('0');

    expect(document.title).to.eql('No threshold reached.');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(
      wrapper
        .find('p')
        .at(0)
        .text(),
    ).to.eql('1');

    expect(document.title).to.eql('No threshold reached.');

    wrapper
      .find('button')
      .at(0)
      .simulate('click');

    expect(document.title).to.eql('Threshold of over 1 reached.');
  });
});
