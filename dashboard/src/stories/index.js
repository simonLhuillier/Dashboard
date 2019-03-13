import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import Pie from '../stories/components/Pie';
import Line from '../stories/components/Line';
import Radar from '../stories/components/Radar';
import Checklist from '../stories/components/Checklist';
import Calendar from '../stories/components/Calendar';
import Worldmap from '../stories/components/Worldmap';

  storiesOf('Pie', module).add('default', () => <Pie />);

  storiesOf('Line', module).add('default', () => <Line />);

  storiesOf('Radar', module).add('default', () => <Radar />);

  storiesOf('Checklist', module).add('default', () => <Checklist />);

  storiesOf('Calendar', module).add('default', () => <Calendar />);

  storiesOf('Worldmap', module).add('default', () => <Worldmap />);