import React from 'react';
// eslint-disable-next-line import/no-extraneous-dependencies
import { storiesOf } from '@storybook/react';
import { Header } from './header';

storiesOf('Header', module).add('with title', () => <Header>React Template</Header>);
