class AddCounterToPets < ActiveRecord::Migration[5.1]
  def change
    change_column_default(
    pets,
    counter,
    0
)
  end
end
