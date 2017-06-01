import candela from 'candela';
import 'candela-upset';

import { simpsons } from '../datasets';
import showComponent from '../util/showComponent';

window.onload = () => {
  const vis = showComponent(candela.components.UpSet, {
    data: simpsons,
    id: 'Name',
    sets: [
      'Male',
      'Power Plant',
      'Evil',
      'Blue Hair',
      'Duff Fan',
      'School'
    ],
    fields: ['School'],
    metadata: ['Age']
  });
  vis.render();
};