class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :trackable, :validatable
    has_many :posts, dependent: :destroy
    validates :name, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
    validates :name, length: { maximum: 12 }
end
