class Comment < ApplicationRecord 

  validates :body, presence: true

  belongs_to :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :User
  
  belongs_to :post,
  foreign_key: :post_id,
  primary_key: :id,
  class_name: :Post
end
