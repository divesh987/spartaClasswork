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

	get "/:id" do 
		id = params[:id]
		
	end 
end