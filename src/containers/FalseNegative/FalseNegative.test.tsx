import React from 'react';
import { mount } from 'enzyme';

// Components
import { FalseNegative } from '.';

test('should increade, decrease, reset and check the counter value - by class', () => {
  const wrapper = mount(<FalseNegative />);
  console.log(wrapper.debug());

  expect(wrapper.find('.counter--counter').text()).toEqual('0');

  wrapper.find('.counter--button').at(1).simulate('click');
  wrapper.find('.counter--button').at(1).simulate('click');
  expect(wrapper.find('.counter--counter').text()).toEqual('-2');

  wrapper.find('.counter--button').at(2).simulate('click');
  expect(wrapper.find('.counter--counter').text()).toEqual('-1');

  wrapper.find('.counter--button').at(2).simulate('click');
  expect(wrapper.find('.counter--counter').text()).toEqual('0');
});

test('should increade, decrease, reset and check the counter value - by tagname', () => {
  const wrapper = mount(<FalseNegative />);
  console.log(wrapper.debug());

  expect(wrapper.find('span').text()).toEqual('0');

  wrapper.find('button').at(1).simulate('click');
  wrapper.find('button').at(1).simulate('click');
  expect(wrapper.find('span').text()).toEqual('-2');

  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.find('span').text()).toEqual('-1');

  wrapper.find('button').at(2).simulate('click');
  expect(wrapper.find('span').text()).toEqual('0');
});

test('should increade, decrease, reset and check the counter value - by aria label', () => {
  const wrapper = mount(<FalseNegative />);
  console.log(wrapper.debug());

  expect(wrapper.find('[aria-label="Counter"]').text()).toEqual('0');

  wrapper.find('[aria-label="Decrease"]').simulate('click');
  wrapper.find('[aria-label="Decrease"]').simulate('click');
  expect(wrapper.find('[aria-label="Counter"]').text()).toEqual('-2');

  wrapper.find('[aria-label="Increase"]').simulate('click');
  expect(wrapper.find('[aria-label="Counter"]').text()).toEqual('-1');

  wrapper.find('[aria-label="Reset"]').simulate('click');
  expect(wrapper.find('[aria-label="Counter"]').text()).toEqual('0');
});
