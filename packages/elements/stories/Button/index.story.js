import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { action } from '@storybook/addon-actions';
import { withDocs } from 'storybook-readme';
import { storiesOf } from '@storybook/react';
import { withKnobs, boolean, text } from '@storybook/addon-knobs';
import { withNotes } from '@storybook/addon-notes';

import ButtonMD from './README.md';

import FlatButton from '../../src/components/Button/FlatButton';

storiesOf('Buttons', module)
  .addDecorator(withKnobs)
  .addDecorator(withDocs(ButtonMD))
  .addDecorator(withNotes('The best FlatButtom'))
  .add('FlatButton', () => (
    <FlatButton
      onClick={action('clicked')}
      disabled={boolean('Disabled', false)}
    >
      {text('Label', 'FlatButtom')}
    </FlatButton>
  ));
