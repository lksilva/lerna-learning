import React from 'react';
import { withTheme } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

import theme from '../../theme';

const FlatButton = ({ onClick, name }) => (
  <Button variant="outlined" color="secondary" onClick={onClick}>
    {name}
  </Button>
);

export default withTheme(theme)(FlatButton);
