require "sinatra"
require "sinatra/reloader" if development?
require "pg"
require_relative "./models/student.rb"
require_relative "./models/trainer.rb"
require_relative "./controllers/school_controller.rb"



use Rack::MethodOverride

run SchoolController


