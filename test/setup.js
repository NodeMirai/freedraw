import { configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import jsdom from 'jsdom'
const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html><p>Hello world</p>`);

if (typeof document === 'undefined') {
  global.document = dom.window.document;
  global.window = dom.window;
  global.navigator = dom.window.navigator;
}
