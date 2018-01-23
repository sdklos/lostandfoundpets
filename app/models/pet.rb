class Pet < ApplicationRecord
  belongs_to :address, optional: true

  def address_attributes=(address_attributes)
      address = Address.find_or_create_by(address_attributes)
      if address.save
        self.address = address
      end
  end

  def address_string
    if self.address
      result = "#{self.address.address}"
    else
      result = ''
    end
    return result
  end
end
