import React from 'react';

import { action } from '@storybook/addon-actions';
import { text } from '@storybook/addon-knobs';
import { linkTo } from '@storybook/addon-links';
import { storiesOf } from '@storybook/react';

import Hello from 'src/components/Hello';

storiesOf('Hello', module).add('通常パターン', () => <Hello />);
