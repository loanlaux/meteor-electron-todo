import { Template } from 'meteor/templating';
import { Tasks } from '../api/tasks.js';

import './body.html';
import './listItem.js';


Template.body.helpers({
  tasks() {
    return Tasks.find({}, { sort: { 'checked': 1, 'createdAt': -1}});
  }
});

Template.body.events({
  'submit .to-do'(event) {
    event.preventDefault();

    const target = event.target;
    const text = target.text.value;

    Tasks.insert({
      text,
      createdAt: new Date()
    });

    target.text.value = '';
  }
});
