class AddAddressIdToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :address_id, :integer
  end
end
