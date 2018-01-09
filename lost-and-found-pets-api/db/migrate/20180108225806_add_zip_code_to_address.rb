class AddZipCodeToAddress < ActiveRecord::Migration[5.1]
  def change
    add_column :addresses, :zip_code, :string
  end
end
