class AddUrlToPets < ActiveRecord::Migration[5.1]
  def change
    add_column :pets, :url, :string
  end
end
