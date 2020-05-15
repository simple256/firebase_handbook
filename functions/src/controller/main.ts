/**
 * Библиотека котроллеров
 */
require('../models/actions');
require('../models/actors');
require('../models/objects');
require('../models/operations');
require('../models/projects');
require('../models/stages');

import {default as actions} from './actions';
import {default as actors} from './actors';
import {default as objects} from './objects';
import {default as projects} from './projects';
import {default as operations} from './operations';
import {default as stages} from './stages';

export {
    actions,
    actors,
    objects,
    operations,
    projects,
    stages
}