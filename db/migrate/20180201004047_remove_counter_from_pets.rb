class RemoveCounterFromPets < ActiveRecord::Migration[5.1]
  def change
    remove_column :pets, :counter, :integer
  end
end
