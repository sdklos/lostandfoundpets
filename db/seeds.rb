require 'faker'
require 'pry'
require 'random-location'

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

dog_and_cat_colors = ["Brown", "Red", "Yellow", "White", "Black", "Blue", "Grey", "Cream", "Tan", "Orange"]

other_colors = ["Red", "Orange", "Yellow", "Green", "Blue", "Purple", "Black", "White", "Grey", "Pink", "Brown"]

sex = ["Male", "Female"]

age = ["Baby", "Young", "Adult", "Senior"]

status = ["Lost", "Found"]

10.times do
  Pet.create!([status: status.sample, pet_type: "Dog", primary_breed: dog_breeds.sample, primary_color: dog_and_cat_colors.sample, name: Faker::Name.first_name, contact_phone: Faker::PhoneNumber.phone_number, address: Address.all.sample, age: age.sample])
end

10.times do
  Pet.create!([status: status.sample, pet_type: "Cat", primary_breed: cat_breeds.sample,  primary_color: dog_and_cat_colors.sample, name: Faker::Name.first_name, contact_phone: Faker::PhoneNumber.phone_number, address: Address.all.sample, age: age.sample])
end

10.times do
  Pet.create!([status: status.sample, pet_type: "Bird", primary_breed: bird_breeds.sample, primary_color: other_colors.sample, name: Faker::Name.first_name, contact_phone: Faker::PhoneNumber.phone_number, address: Address.all.sample, age: age.sample])
end
