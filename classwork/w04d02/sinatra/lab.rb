require "sinatra"
require "sinatra/reloader" if development?

get "/books" do 
	"INDEX"
end 

get "/books/new" do
	"NEW"
end 

post "/books" do 
	"CREATE"
end 


get "/books/:id" do
	"SHOW"
end 


get "/books/:id/edit" do
	"EDIT"
end 


put "/books/:id" do
	"UPDATE"
end


delete "/books/:id" do
	"DELETE"
end 
