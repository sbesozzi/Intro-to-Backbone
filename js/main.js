import $ from 'jquery';
import _ from 'underscore';
import moment from 'moment';

$.ajaxSetup({
  headers: {
    'X-Parse-Application-Id': 'rkXmk02q66CPmJ23RYSVWfsSjWsSd3DnsRXpAB7v',
    'X-Parse-REST-API-Key': 'rWK7rqWUmncYGpcOlJH497rAjJYQ3OTYwmq04T8f'
  }
});

// import PersonModel from './person_model';
import PeopleCollection from './people_collection';
import PersonTemplate from './person_template';

let people = new PeopleCollection();

// Take persom_template and pass in for each
function renderPeople() {
  // Creating an empty DOM node
  let $ul = $('<ul></ul>');


  people.each(function(person) {
      let data = person.toJSON();
      console.log('data', data);

      let templateString = PersonTemplate(data);
      console.log ('templateString');

      let $li = $( PersonTemplate(data) );
      // Append li to ul template
      $ul.append($li);
  });
  $('body').html($ul);
}

// Fetch the data and then render people
// people.fetch();
// renderPeople();
people.fetch().then(renderPeople);

// window.people = people;
// window.renderPeople = renderPeople;

console.log('Hello, World');
