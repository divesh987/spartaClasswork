require_relative "hero.rb"
class Heroes < Sinatra::Base
	$heroes =[]	
	$heroes.push Hero.new(0,"Batman","Caped Crusader")
	$heroes.push Hero.new(1,"Spiderman","Web Slinger")
	$heroes.push Hero.new(2,"Superman","Super")
	#sets root as the parent 
	set :root, File.join(File.dirname(__FILE__),"..")

	#sets the view directory correctly 
	set :view, Proc.new { File.join(root, "views") }

	configure :development do
		register Sinatra::Reloader
	end

	get "/" do
		@heroes = $heroes 
		erb :"heroes/index"

	end 
	get "/new" do
		@hero  = {
			id: "",
			title: "",
			description: ""
		} 
		erb :"heroes/new"
	end
	post "/" do
		id = $heroes.length
		# new_hero={
		# 	id: id,
		# 	title: params[:title],
		# 	description: params[:description]
		# }
		# $heroes.push Hero.new (new_hero)

		$heroes.push Hero.new(id,params[:title],params[:description])
		redirect "/"

	end 

	get "/:id" do
		id = params[:id].to_i
		@hero = $heroes[id]
		erb :"heroes/show"
	end 

	put "/:id" do 
		id= params[:id].to_i
		hero = $heroes[id]
		hero.title = params[:title]
		hero.description = params[:description]
		$heroes[id]=hero
		redirect "/"
	end

	get	"/:id/edit" do
		id= params[:id].to_i	
		@hero = $heroes[id]
		erb :"heroes/edit"
	end

	delete "/:id" do
		id = params[:id].to_i
		$heroes.delete_at(id)
		redirect "/"

	end



end