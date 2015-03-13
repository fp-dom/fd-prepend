import {curry2} from 'fj-curry';

let _prepend = (parent, child) =>
  parent.insertBefore(child, parent.firstChild);

export default curry2(_prepend);