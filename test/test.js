/* (c) 2016 Ari Porad (@ariporad) <http://ariporad.com>. License: ariporad.mit-license.org */
import test from 'ava';
import doSomething from '../src';

test(t => {
  t.truthy(true);
  doSomething();
});
