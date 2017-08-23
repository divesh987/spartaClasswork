class PostsController < Sinatra::Base

	set :root, File.join(File.dirname(__FILE__),"..")
	set :view, Proc.new { File.join(root, "views") }

	$games = [{
		id: 0,
		title: "Fallout 4",
		review: "The game seemed to have a nice story line and was able to grab my 
		attention for the most part of it. It is open world so you can literally roam around
		the game map and do whatever you want which is really cool!"
	},
	{
		id: 1,
		title: "GTA 5",
		review: "This Game is awesome !! You can play as three characters "

	}]

	configure :development do 
		register Sinatra::Reloader
	end 

	get "/" do 
		@games = $games

		erb :"games/index"
	end

	get "/new" do
		@games =$games
		erb :"games/new"
	end 

	post "/" do
		redirect "/"
	end 

	get "/:id" do
		id = params[:id].to_i
		@game = $games[id]
		erb :"games/show"
	end

end 


