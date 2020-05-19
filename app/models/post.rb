# == Schema Information
#
# Table name: posts
#
#  id         :integer(8)      not null, primary key
#  user_id    :integer(4)      not null
#  like_id    :integer(4)      not null
#  comment_id :integer(4)      not null
#  created_at :datetime        not null
#  updated_at :datetime        not null
#
class Post < ApplicationRecord
  validates :caption, presence: true 

  has_one_attached :photo,
  dependent: :destroy

  belongs_to :user,
  foreign_key: :user_id,
  primary_key: :id,
  class_name: :User

  has_many :comments,
  foreign_key: :post_id,
  primary_key: :id,
  dependent: :destroy

  has_many :likes,
  foreign_key: :post_id,
  primary_key: :id,
  class_name: :Like,
  dependent: :destroy

end



