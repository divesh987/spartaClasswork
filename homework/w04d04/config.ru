require "sinatra"
require "sinatra/reloader" if development?
require_relative "./routes_and_controllers/heroesController.rb"

use Rack::Reloader

use Rack::MethodOverride

run Heroes 