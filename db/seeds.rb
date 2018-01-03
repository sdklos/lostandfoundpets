# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

petfinder = Petfinder::Client.new

dog_breeds = petfinder.breeds('dog')
cat_breeds = petfinder.breeds('cat')
bird_breeds = petfinder.breeds('bird')

dog_breeds.each do |breed|
  DogBreed.create(name: breed)
end

cat_breeds.each do |breed|
  CatBreed.create(name: breed)
end

bird_breeds.each do |breed|
  BirdBreed.create(name: breed)
end
