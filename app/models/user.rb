# == Schema Information
#
# Table name: users
#
#  id              :integer(8)      not null, primary key
#  email           :string          not null
#  username        :string          not null
#  password_digest :string          not null
#  session_token   :string          not null
#  created_at      :datetime        not null
#  updated_at      :datetime        not null
#  full_name       :string          not null
#

class User < ApplicationRecord

    validates :email, :username, presence: true, uniqueness: true
    validates :full_name, :session_token, :password_digest, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }  
    after_initialize :ensure_session_token!
    attr_reader :password 

    has_one_attached :photo,
    dependent: :destroy

    has_many :posts,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Post

    has_many :active_follows,  
    foreign_key: :user_id,
    class_name: :Follow,
    dependent: :destroy

    has_many :passive_follows, 
    foreign_key: :followed_user_id,
    class_name: :Follow,
    dependent: :destroy

    has_many :followings, 
    through: :active_follows,
    source: :following,
    dependent: :destroy

    has_many :followers, 
    through: :passive_follows,
    source: :follower,
    dependent: :destroy

    has_many :comments,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Comment,
    dependent: :destroy

    has_many :likes,
    foreign_key: :user_id,
    primary_key: :id,
    class_name: :Like,
    dependent: :destroy


    def self.find_by_credentials(username, password)
        user = User.find_by(username: username) 
        user && user.valid_password?(password) ? user : nil 
    end 
    
    def password=(password)
        @password = password
        self.password_digest = BCrypt::Password.create(password) 
    end 

    def valid_password?(password)
        BCrypt::Password.new(password_digest).is_password?(password) 
    end 

    def reset_session_token!
        self.session_token = SecureRandom.urlsafe_base64 
        self.save
        self.session_token
    end 

    private 
    def ensure_session_token!
        self.session_token ||= SecureRandom.urlsafe_base64 
    end 
end

