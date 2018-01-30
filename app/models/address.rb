require 'pry'

class Address < ApplicationRecord
  validates :address, presence: true
  has_many :pets

  geocoded_by :address
  after_validation :geocode, :if => :address_changed?

  reverse_geocoded_by :latitude, :longitude
  after_validation :reverse_geocode


  def is_near(address, radius)
    if self.latitude && self.longitude
      if self.distance_from(address) <= radius.to_i
        return true
      else
        return false
      end
    end
  end

end
