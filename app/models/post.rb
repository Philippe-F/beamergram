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

  belongs_to :user

  has_many :comments,
  dependent: :destroy

end



