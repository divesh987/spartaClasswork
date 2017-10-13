class Person < ApplicationRecord

	# validates :email, :confirmation => true
	validates :name, length: {in: 0..20}
end
