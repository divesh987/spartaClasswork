class Person 

    def name
        # create a name variable
        name = "Steve"
    end 

    def age
        # create age variable here
        age = 21

    end

    def children
        # create children array here
        children = ["Dave","Jon","Paul","Terry"]


    end

    def address

        # create address hash here
        address ={
            house_number: 12,
            street: "Richmond Road",
            town: "Richmond",
            county: "London",
            postcode: "HA8 4TG",
            email_addresses: ["djfhjd@gmail.com","dynodiv@gmail.com"]

        }

    end

    def password


        # do not change these variables
        favourite_things = ["motorbike" , "cat" , "travel"]
        memorable_stuff = {
          birth_year: 1983,
          mothers_name: "Eve",
          birth_town: "Richmond"
        }

        password = "#{favourite_things[1]} #{memorable_stuff[:birth_town]}"


    end

end