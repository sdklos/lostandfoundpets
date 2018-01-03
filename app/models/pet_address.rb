class PetAddress < ApplicationRecord

  def self.pet_breeds
    petfinder = Petfinder::Client.new
    breeds = petfinder.breeds('cat')
    breeds
  end
end
