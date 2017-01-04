import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './listItem.html';

Template.listItem.events({
  'click .toggle-checked'() {

    Tasks.update(this._id, {
      $set: { checked: !this.checked }
    });
  },
  'click .delete'() {
    Tasks.remove(this._id);
  }
});