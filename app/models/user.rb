# == Schema Information
#
# Table name: users
#
#  id              :integer(8)      not null, primary key
#  email           :string          not null
#  first_name      :string          not null
#  last_name       :string          not null
#  username        :string          not null
#  password_digest :string          not null
#  session_token   :string          not null
#  created_at      :datetime        not null
#  updated_at      :datetime        not null
#

class User < ApplicationRecord
  validates :email, :password_digest, presence: true, uniqueness: true
    validates :session_token, presence: true 
    validates :password, length: { minimum: 6, allow_nil: true }  
    after_initialize :ensure_session_token!
    attr_reader :password 

    def self.find_by_credentials(email, password)
        user = User.find_by(email: email) 
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



