imghex
======

client and server utilities for tile-based maps using html img elements

HTML5, CSS, Nodejs, express, jade

This project uses CSS positioning to create "hex maps" for presentation in a browser supporting HTML5. 
Jade templates are used server-side OR client-side to build maps. Maps consist of inter-leaved rows of hex tiles. 
Each row is a list.
The list element contents are image elements.
CSS positioning is used to offset rows of hex tiles so that they 'nestle' together.

Generally, the author believes that there is value in managing tile-based maps as img elements as opposed to managing graphical images in canvas elements.
The conceptual difference is simple: if the map is made of img elements, each element is accessible as part of the document structure.
This allows to take advantage of tools like jQuery when manipulating the map.