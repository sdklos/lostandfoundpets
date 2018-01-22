class AddressSerializer < ActiveModel::Serializer
  attributes :address
  has_many :pets


end
