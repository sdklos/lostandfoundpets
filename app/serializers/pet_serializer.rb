class PetSerializer < ActiveModel::Serializer
  attributes :id, :lost, :found, :pet_type, :primary_breed, :primary_color, :age, :weight, :sex, :name, :owner_name, :contact_phone, :url
  has_many :addresses
end
