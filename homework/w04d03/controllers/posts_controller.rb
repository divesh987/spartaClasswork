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

	},
	{
		id: 2,
		title: "The Last of us",
		review:"Best game ever!"
	},
	{
		id: 3,
		title: "Hitman",
		review: "Awesome assasination game"
	},
	{
		id: 4,
		title: "Fifa 17",
		review: "Boring",
	},
	{
		id: 5,
		title: "UFC 2",
		review: "nice combat"
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
		id = $games.length
		new_review = {
			id: id,
			title: params[:title],
			review: params[:review]
		}
		$games.push new_review
		redirect "/"
	end 

	get "/:id" do
		id = params[:id].to_i
		@game = $games[id]
		erb :"games/show"
	end

	put "/:id" do
  	# data is gathered in the params object
    id = params[:id].to_i
      
    # get the post object from our data store
    post = $posts[id];
      
    # update the values of the object with data from the request
    post[:title] = params[:title];
    post[:content] = params[:content];
      
    # save the post back to our data store ( at the spot it came from this time )
    $posts[id] = post;
      
    # redirect the user to a GET route. We'll go back to the INDEX.
    redirect "/";

	end

end 


