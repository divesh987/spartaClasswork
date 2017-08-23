class PostsController < Sinatra::Base

	set :root, File.join(File.dirname(__FILE__),"..")
	set :view, Proc.new { File.join(root, "views") }

	configure :development do 
		register Sinatra::Reloader
	end 

	get "/" do 

	end
end 


