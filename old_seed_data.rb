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
