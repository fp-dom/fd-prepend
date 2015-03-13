import assert from 'assert';
import elem from 'fd-elem';
import prepend from './';

let h1 = elem('h1', "I'm first");
document.body.appendChild(h1);

it('fd-prepend', () => {
  let prependtoBody = prepend(document.body);
  let p = elem('p', 'No, I am');
  prependtoBody(p)
  assert.equal(document.body.firstChild.innerText, 'No, I am');
});
