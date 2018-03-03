import { connect } from 'react-redux';

import { inputValueSet } from '../../actions';
import { getValue } from '../../selectors';

import { TextareaRender } from './TextareaRender';

const mapState = (state, ownProps) => {

  const { form, name } = ownProps;
  const value = getValue(state, form, name, '');
  console.log({ form, name, value });
  return {
    value,
  };

};

const mapDispatch = (dispatch, ownProps) => {
  const { form, name } = ownProps;
  return {
    handleChange: (value) => dispatch(inputValueSet.actionCreator(form, name, value)),
  };
};

export const Textarea = connect(mapState, mapDispatch)(TextareaRender);
