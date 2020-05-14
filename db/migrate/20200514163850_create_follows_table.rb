class CreateFollowsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :follows do |t|
      t.references :user, foreign_key: true
      t.integer :followed_user_id, null: false

      t.timestamps
    end 
    add_index :follows, [:user_id, :followed_user_id], unique:true
    add_index :follows, :followed_user_id
  end
end
