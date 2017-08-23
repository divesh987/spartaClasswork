class PostsController < Sinatra::Base

	set :root, File.join(File.File.dirname(__FILE__),"..")
	set :view, Proc.new { File.join(root, "views") }

	configure :development do 
		register Sinatra::Reloader
	end 

	get "/" do 
		"Hello"
	end
end 

