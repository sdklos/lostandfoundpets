class RemoveStreetFromAddresses < ActiveRecord::Migration[5.1]
  def change
    remove_column :addresses, :street, :string
    remove_column :addresses, :city, :string
    remove_column :addresses, :state, :string
    remove_column :addresses, :zip_code, :string
    remove_column :addresses, :missing_from, :string
    remove_column :addresses, :sighting, :string
  end
end
