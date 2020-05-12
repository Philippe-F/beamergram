class AddUserFields < ActiveRecord::Migration[5.2]
  def change
    add_column :users, :name, :string
    add_column :users, :website, :string
    add_column :users, :bio, :text
  end
end
