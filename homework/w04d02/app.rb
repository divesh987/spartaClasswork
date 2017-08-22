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

# Route - SHOW
get "/games/:id" do
	"SHOW GAMES"
end 

#Route - CREATE
post "/games" do 
	"CREATE GAME"
end 

#Route - EDIT
get "/games/:id/edit" do
	"EDIT GAME"
end

#Route - UPDATE 
put "/games/:id" do
	"UPDATE GAME"
end   
