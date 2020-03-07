class DropforeignKeysFromPosts < ActiveRecord::Migration[5.2]
  def change
    remove_column :posts, :user_id
    remove_column :posts, :like_id
    remove_column :posts, :comment_id
  end
end
