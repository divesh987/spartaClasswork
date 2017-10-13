# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
	Picture.destroy_all
	Picture.create([
		{name: "Phil Murray", description: "Solid gold.", artist: 'self.', url: "https://fillmurray.com/g/300/300"},
		{name: "Dyno", description: "Explosive", artist: 'self.', url: "https://fillmurray.com/g/300/301"},
		{name: "Divesh", description: "Dynamic", artist: 'self.', url: "https://fillmurray.com/g/300/302"},



		])
