class CreatePetAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :pet_addresses do |t|
      t.integer :pet_id
      t.integer :address_id

      t.timestamps
    end
  end
end
