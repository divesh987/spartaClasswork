require "sinatra"
require "sinatra/reloader" if development?
require "pg"
require_relative "./schools/student.rb"
require_relative "./controllers/students_controller.rb"



use Rack::MethodOverride

