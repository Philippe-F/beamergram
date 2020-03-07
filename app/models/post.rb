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

  has_one_attached :photo

  # belongs_to :user,
  # foreign_key: :user_id,
  # primary_key: :id,
  # class_name: :User

  # belongs_to :like,
  # foreign_key: :like_id,
  # primary_key: :id,
  # class_name: :Like

  # belongs_to :comment,
  # foreign_key: :comment_id,
  # primary_key: :id,
  # class_name: :Comment

end



