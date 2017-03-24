import Ember from 'ember';

export default Ember.Route.extend({
  geolocation: Ember.inject.service(),
  actions: {
    getUserLocation: function() {
      console.log(this.get('searchValue'));
      // this.get('geolocation')
      //   .getLocation()
      //   .then(function(geoObject) {
      //     console.log(geoObject.coords.latitude);
      //     console.log(geoObject.coords.longitude);
      //   });
    }
  }
});
