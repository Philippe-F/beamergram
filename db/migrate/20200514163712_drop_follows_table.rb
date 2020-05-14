class DropFollowsTable < ActiveRecord::Migration[5.2]
  def change
    drop_table :follows
  end
end
