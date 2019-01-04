import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';

import ButtomMD from './README.md';

import FlatButton from '../../src/components/Button/FlatButton';

storiesOf('Buttons', module)
  .addDecorator(withDocs(ButtomMD))
  .add('FlatButton', () => (
    <FlatButton onClick={action('clicked')}>FlatButtom</FlatButton>
  ));
