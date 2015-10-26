import Backbone from 'backbone';

//Model fetches one piece of data
let PersonModel = Backbone.Model.extend({
  urlRoot: 'https://api.parse.com/1/classes/people',

idAttribute: 'object.id'

});

export default PersonModel;