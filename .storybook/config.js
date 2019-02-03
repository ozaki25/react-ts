import { addDecorator, configure } from '@storybook/react';
import { withKnobs } from '@storybook/addon-knobs';

addDecorator(withKnobs);

const req = require.context('../src/stories', true, /.stories.tsx$/);

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
