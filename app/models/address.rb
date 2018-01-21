class Address < ApplicationRecord
  has_many :pets

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

end
