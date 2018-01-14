class AddressSerializer < ActiveModel::Serializer
  attributes :id, :street, :city, :state, :zip_code, :latitude, :longitude, :missing_from, :sighting

  has_many :pets
end
