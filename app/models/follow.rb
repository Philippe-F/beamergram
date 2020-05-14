class Follow < ApplicationRecord
  validates :user_id, uniqueness: {scope: :followed_user_id}

  belongs_to :follower, 
  foreign_key: :user_id,
  class_name: :User

  belongs_to :followed,
  foreign_key: :followed_user_id,
  class_name: :User
end