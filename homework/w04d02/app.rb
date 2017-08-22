require "sinatra"
require "sinatra/reloader" if development?

# Route - INDEX
get "/games" do 
	"GAMES INDEX"
end