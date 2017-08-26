class StudentsController < Sinatra::Base
	set :root, File.join(File.dirname(__FILE__),'..')

	set :views, Proc.new {File.join(root, "views")}

	configure :development do 
		register Sinatra::Reloader
	end

	get "/" do 

		@students = Student.all
		erb :"students/index"
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

	delete "/:id" do
		id = params[:id].to_i
    	Student.destroy id
    	redirect "/"
	end


	
end