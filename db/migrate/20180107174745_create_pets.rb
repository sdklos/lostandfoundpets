class CreatePets < ActiveRecord::Migration[5.1]
  def change
    create_table :pets do |t|
      t.boolean :lost
      t.boolean :found
      t.string :type
      t.string :primary_breed
      t.string :secondary_breed
      t.string :primary_color
      t.string :secondary_color
      t.integer :weight
      t.string :sex
      t.boolean :neutered
      t.string :name
      t.integer :posted_by
      t.string :owner_name
      t.string :contact_phone
      t.string :contact_email

      t.timestamps
    end
  end
end
