# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

Ruby v2.3
Rails v5.1
Node v5.6

React Dependencies:
  "material-ui": "^0.20.0",
  "react-places-autocomplete": "^5.4.3",
  "redux-form": "^7.2.0"

Rails Dependencies:
  gem 'geocoder'
  gem 'petfinder'
  gem 'active_model_serializers'
  gem 'foreman'
  gem 'faker'
  gem 'random-location'


To run:

In your console
clone the repository
then change into the repository's directory
change into the client directory and enter npm install
then go up to the root directory of the repository
enter bundle install
then rake db:migrate
for some fake data enter rake db:seed
then enter rake start

the app can be found on localhost:3000
you can access the api at localhost:3001


