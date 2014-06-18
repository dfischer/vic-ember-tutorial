App.LeadEditController = Ember.ObjectController.extend({
  isEditing: false,

  actions: {
    saveChanges: function() {
      var self = this;
      this.get('model').save().then(function() {
        self.transitionToRoute('lead');
      })
    },

    cancel: function() {
      this.get('model').rollback();
      this.transitionToRoute('lead');
    }
  }
})
