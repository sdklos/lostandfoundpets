class PetAddress < ApplicationRecord
  belongs_to :address
  belongs_to :pet
end
