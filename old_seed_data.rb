40.times do
  Address.create!([latitude: RandomLocation.near_by(38.0293, -78.4767, 804672)[0], longitude: RandomLocation.near_by(38.0293, -78.4767, 804672)[1]])
end

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
  Pet.create!([status: status.sample, pet_type: "Dog", primary_breed: dog_breeds.sample, secondary_breed: dog_breeds.sample, primary_color: dog_and_cat_colors.sample, secondary_color: dog_and_cat_colors.sample, weight: [1..150].sample, sex: sex.sample, neutered: Faker::Boolean.boolean, name: Faker::Name.first_name, posted_by: Faker::Number.number(5), owner_name: Faker::Name.name, contact_phone: Faker::PhoneNumber.phone_number, contact_email: "this@this.com", age: age.sample])
end

10.times do
  Pet.create!([status: status.sample, pet_type: "Cat", primary_breed: cat_breeds.sample, secondary_breed: cat_breeds.sample, primary_color: dog_and_cat_colors.sample, secondary_color: dog_and_cat_colors.sample, weight: [1..50].sample, sex: sex.sample, neutered: Faker::Boolean.boolean, name: Faker::Name.first_name, posted_by: Faker::Number.number(5), owner_name: Faker::Name.name, contact_phone: Faker::PhoneNumber.phone_number, contact_email: "this@this.com"])
end

10.times do
  Pet.create!([status: status.sample, pet_type: "Bird", primary_breed: bird_breeds.sample, secondary_breed: bird_breeds.sample, primary_color: other_colors.sample, secondary_color: other_colors.sample, weight: [1..50].sample, sex: sex.sample, name: Faker::Name.first_name, posted_by: Faker::Number.number(5), owner_name: Faker::Name.name, contact_phone: Faker::PhoneNumber.phone_number, contact_email: "this@this.com"])
end

10.times do
  Pet.create!([status: status.sample, pet_type: "Other", primary_breed: Faker::LordOfTheRings.character, secondary_breed: Faker::LordOfTheRings.character, primary_color: other_colors.sample, secondary_color: other_colors.sample, weight: [20..200].sample, sex: sex.sample, name: Faker::Name.first_name, posted_by: Faker::Number.number(5), owner_name: Faker::Name.name, contact_phone: Faker::PhoneNumber.phone_number, contact_email: "this@this.com"])
end
