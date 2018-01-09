class Address < ApplicationRecord
  has_many :pet_addresses
  has_many :pets, through: :pet_addresses

  geocoded_by :full_street_address
  after_validation :geocode, :if => :full_street_address_changed?

  def full_street_address
    [street, city, state, zip_code].compact.join(', ')
  end
end
