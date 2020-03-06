class CreatePosts < ActiveRecord::Migration[5.2]
  def change
    create_table :posts do |t|
      t.integer :user_id, null: false 
      t.integer :like_id, null: false 
      t.integer :comment_id, null: false 

      t.timestamps
    end

    add_index :posts, :user_id, unique: true 
    add_index :posts, :like_id, unique: true 
    add_index :posts, :comment_id, unique: true 
  end
end
