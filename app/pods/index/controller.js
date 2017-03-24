import Ember from 'ember';

export default Ember.Controller.extend({
  userLocation: null,
  actions: {
    search() {
      console.log(this.get('searchValue'));
    },
  }
});
