// default theme to override https://material-ui.com/customization/default-theme/

import { createMuiTheme } from '@material-ui/core';
import overrides from './overrides';
import typography from './typography';
import palette from './palette';
const theme = createMuiTheme({
  overrides,
  typography,
  palette,
});

export default theme ;
