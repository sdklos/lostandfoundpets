class PetSerializer < ActiveModel::Serializer
  attributes :id, :status, :pet_type, :primary_breed, :primary_color, :age, :weight, :sex, :name, :owner_name, :contact_phone, :url, :address_string

end
