class ChangePostColumnType < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :caption 
    add_column :posts, :caption, :textarea, null: false
  end
end
