class AddressSerializer < ActiveModel::Serializer
  attributes :address, :latitude, :longitude

  has_many :pets
end
