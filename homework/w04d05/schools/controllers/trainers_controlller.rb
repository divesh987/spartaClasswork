class TrainersController < Sinatra::Base
	set :root, File.join(File.dirname(__FILE__),'..')

	set :views, Proc.new {File.join(root, "views")}

	configure :development do 
		register Sinatra::Reloader
	end

	get "/" do 


	end 
	get "/new" do

	end
	get "/:id" do 

	end 

	get "/:id/edit" do

	end

	post "/" do


	end
	put '/:id'  do


	    redirect "/"
    
	end
    

	delete "/:id" do

	end


	
end