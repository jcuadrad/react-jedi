### REACT STAR WARS GAME CHALLENGE
## First project created using React, React Router and Redux.

use the SWAPI (The Star Wars API). You can find all the informations at this link: https://swapi.co/documentation

The array "vehicles" in the People Api Response Json returns the complete list of vehicles that that person "owns".

For example Luke Skywalker (https://swapi.co/api/people/1/ ) owns two different vehicles: 

Snowspeeder ("max_atmosphering_speed": "650", "cargo_capacity": "10")
Imperial Speeder Bike ("max_atmosphering_speed": "360", "cargo_capacity": "4")

Each vehicle has two properties that we will use : 

max_atmosphering_speed string -- The maximum speed of this vehicle in the atmosphere. (Km/h)
cargo_capacity string -- The maximum number of kilograms that this vehicle can transport. (Kg)

The goal is to transport a total amount of gold from one place to another place in the same planet to win the match.This could be made doing one ore multiple trips.

Ex: 
50kg kg of gold (random in each match)1000 km distance (random in each match)

We will use the Imperial Speeder Bike ("max_atmosphering_speed": "360", "cargo_capacity": "4")

To move 50kg of gold we must calculate the total time that the ship needs to transport the total amount of gold to a distance of 1.000 km. This means that the vehicle will transport 4 kg for each trip at the maximum speed of 360 km/h (consider the maximum speed constant during the entire trip).


The cargo needs 1 hour to be loaded on the vehicle when starts and 1 hour to empty the ship when arrive. In this case the ships will need 20 trips to complete the mission.
