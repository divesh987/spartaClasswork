class Post < ApplicationRecord
	validates :title, format: { with: /\A[a-zA-Z]+\z/,
    message: "only allows letters" }
	belongs_to :user
end
