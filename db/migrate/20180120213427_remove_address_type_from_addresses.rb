class RemoveAddressTypeFromAddresses < ActiveRecord::Migration[5.1]
  def change
    remove_column :addresses, :address_type, :string
  end
end
