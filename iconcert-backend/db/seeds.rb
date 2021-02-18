# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

5.times do
    Venue.create(name: Faker::WorldCup.stadium, city: Faker::WorldCup.city)
end 

5.times do
    Artist.create(image: "https://images.unsplash.com/photo-1557787163-1635e2efb160?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8Y29uY2VydHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&w=1000&q=80", name: Faker::Music.band, years_active: Faker::Number.decimal_part(digits: 2), genre: Faker::Music.genre)
end 

5.times do
    ConcertDate.create(date: Faker::Date.forward(days: 23), artist: Artist.all.sample, venue: Venue.all.sample)
end 

puts "seeded!"