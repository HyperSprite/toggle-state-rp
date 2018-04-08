import {
  bool,
  func,
} from 'prop-types';

export { default as dProps } from './dProps';

const types = {};
/** render as prop function */
types.render = func;
types.initialState = bool;

export default types;
