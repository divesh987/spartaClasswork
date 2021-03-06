class SchoolController < Sinatra::Base
	set :root, File.join(File.dirname(__FILE__),'..')

	set :views, Proc.new {File.join(root, "views")}

	configure :development do 
		register Sinatra::Reloader
	end

	get "/" do 

		@students = Student.all
		erb :"students/index"
	end 
	get "/trainers" do
		@trainers = Trainer.all
		erb :"trainers/index"
	end
	get "/trainers/new" do 
		@trainer = Trainer.new
		@trainer.trainer_id =""
		@trainer.first_name = ""
		@trainer.last_name = ""
		@trainer.gender = ""
		@trainer.course = ""
		erb :"trainers/new"
	end 
	get "/trainers/:id" do 
		id = params[:id].to_i
		@trainer = Trainer.find id
		erb :"trainers/show"
	end 
	get "/new" do
		@student = Student.new
		@student.student_id =""
		@student.first_name = ""
		@student.last_name = ""
		@student.age = ""
		@student.gender = ""
		@student.email = ""
		@student.num = ""
		erb :"students/new"
	end

	get "/trainers/:id/edit" do
		id = params[:id].to_i
	    @trainer = Trainer.find id
		erb :"trainers/edit"
	end 
	post "/trainers/" do 
		@trainer = Trainer.new
		@trainer.first_name = params[:first_name]
		@trainer.last_name = params[:last_name]
		@trainer.gender= params[:gender]
		@trainer.course = params[:course]

		@trainer.save
		redirect "/trainers"

	end 
	put "/trainers/:id" do 
		id = params[:id].to_i
	    trainer = Trainer.find id
	    trainer.first_name = params[:first_name]
		trainer.last_name = params[:last_name]
		trainer.gender = params[:gender]
		trainer.course = params[:course]
	    trainer.save

	    redirect "/trainers"
	end
	delete "/trainers/:id" do
		id = params[:id].to_i
    	Trainer.destroy id
    	redirect "/trainers"
	end
	get "/:id" do 
		id = params[:id].to_i
		@student = Student.find id
		erb :"students/show"
	end 

	get "/:id/edit" do
		id = params[:id].to_i
	    @student = Student.find id
		erb :"students/edit"
	end

	post "/" do
		@student = Student.new
		@student.first_name = params[:first_name]
		@student.last_name = params[:last_name]
		@student.age = params[:age]
		@student.gender = params[:gender]
		@student.email = params[:email]
		@student.num = params[:num]

		@student.save

		redirect "/"

	end
	put '/:id'  do
	    id = params[:id].to_i
	    student = Student.find id
	    student.first_name = params[:first_name]
		student.last_name = params[:last_name]
		student.age = params[:age]
		student.gender = params[:gender]
		student.email = params[:email]
		student.num = params[:num]
	    student.save

	    redirect "/"
    
	end
    

	delete "/:id" do
		id = params[:id].to_i
    	Student.destroy id
    	redirect "/"
	end

end