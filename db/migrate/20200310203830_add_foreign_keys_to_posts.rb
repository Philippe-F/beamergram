class AddForeignKeysToPosts < ActiveRecord::Migration[5.2]
  def change
    add_column :posts, :user_id, :integer, null: false
    add_column :posts, :like_id, :integer, null: false
    add_column :posts, :comment_id, :integer, null: false
  end
end
