class RemoveFoundFromPets < ActiveRecord::Migration[5.1]
  def change
    remove_column :pets, :found, :boolean
  end
end
