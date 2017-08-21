require 'pp'
require 'mac/say'
puts "Hi, This is about as basic as Ruby script can be. Hope you enjoy it. Right, I'm off";
talker = Mac::Say.new(voice: :daniel, rate: 100)
talker.say string: 'Kame Hame Haaa'