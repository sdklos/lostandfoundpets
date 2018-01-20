class RemoveLostFromPets < ActiveRecord::Migration[5.1]
  def change
    remove_column :pets, :lost, :boolean
  end
end
