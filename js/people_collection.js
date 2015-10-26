import Backbone from 'backbone';
import PersonModel from './person_model';

// Collection fetches ALL data
let PeopleCollection = Backbone.Collection.extend({
  url: 'https://api.parse.com/1/classes/people',

  model: PersonModel,
  // gets url data from parse
  parse: function(data) {
    return data.results;
  }


});

export default PeopleCollection;