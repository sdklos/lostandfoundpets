class CreateAddresses < ActiveRecord::Migration[5.1]
  def change
    create_table :addresses do |t|
      t.string :street
      t.string :city
      t.string :state
      t.float :latitude
      t.float :longitude
      t.boolean :missing_from
      t.boolean :sighting

      t.timestamps
    end
  end
end
