## Requirements

Congratulations and welcome to the S.P.A.C.E¹ Institute, good to have you aboard!

Our big focus for the year is to develop a rover that can navigate the surface of Mars!

While the engineers are working on the design and building of the rover, we can focus on building the navigation module and start iterating on its design.

With that in mind, here are a couple of assumptions we’re going to make for this version.

1. The rover will be traveling on a two-dimensional plane that should be modeled as a coordinate (X, Y).

1. The rover is guaranteed to be able to travel in a chosen direction (no worries about obstacles or other landmarks)

Given the above assumptions, here are the business rules that the emulation will need to follow

- When the emulation starts, the rover will always be at (0, 0) and facing North

- There are a series of commands that the rover can receive that can change its location or direction
    - When the rover is told to move forward, then it will move one rover unit in the direction it’s facing
    - When the rover is told to move backward, then it will move rover unit away from the direction it’s facing
    - When the rover is told to turn left, it will rotate 90 degrees to the left, but not change its location
    - When the rover is told to turn right, it will rotate 90 degrees to the right, but not change its location
    - When the emulation is told to quit, the rover will stop receiving commands

- For the emulation, valid directions include North, East, South, and West

- In order to help troubleshoot failures with the emulation, every time a command is received, both the command received, the rover’s location, and the rover’s orientation should be logged.

¹ Simple Programming Application Checks Expertise