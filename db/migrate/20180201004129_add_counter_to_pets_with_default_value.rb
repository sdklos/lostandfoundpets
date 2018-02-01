class AddCounterToPetsWithDefaultValue < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :counter, :integer, default: 0
  end
end
