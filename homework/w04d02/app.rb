require "sinatra"
require "sinatra/reloader" if development?

# Route - INDEX
get "/games" do 
	"GAMES INDEX"
end

# Route - NEW
get "/games/new" do 
	"NEW GAME"
end 