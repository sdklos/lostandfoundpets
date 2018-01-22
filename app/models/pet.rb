class Pet < ApplicationRecord
  belongs_to :address, optional: true

  has_attached_file :picture, styles: { large: "600x600>", medium: "300x300>", thumb: "100x100>" }, default_url: "/images/missing.png"
  validates_attachment_content_type :picture, content_type: /\Aimage\/.*\z/

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
