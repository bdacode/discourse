/**
  The basic controller for a group

  @class GroupController
  @extends Discourse.ObjectController
  @namespace Discourse
  @module Discourse
**/
Discourse.GroupController = Discourse.ObjectController.extend({

  // It would be nice if bootstrap marked action lists as selected when their links
  // were 'active' not the `li` tags.
  showingIndex: Em.computed.equal('showing', 'index'),
  showingMembers: Em.computed.equal('showing', 'members'),
});

