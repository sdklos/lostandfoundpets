class ChangeColumnName < ActiveRecord::Migration[5.1]
  def change
    rename_column :pets, :type, :pet_type
  end
end
