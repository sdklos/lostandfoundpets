class AddressSerializer < ActiveModel::Serializer
  attributes :address, :id, :latitude, :longitude
  has_many :pets


end
