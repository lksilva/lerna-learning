import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { storiesOf } from '@storybook/react';

import FlatButton from '../../src/components/Button/FlatButton';

storiesOf('Buttons', module).add('FlatButtom', () => (
  <FlatButton onClick={action('clicked')}>React Button RX</FlatButton>
));
