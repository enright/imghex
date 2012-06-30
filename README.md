imghex
======

client and server utilities for hex-based maps using html img elements

HTML5, CSS, Nodejs, express, jade

This project uses CSS positioning to create "hex maps" for presentation in a browser supporting HTML5. 
Jade templates are used server-side OR client-side to build maps. Maps consist of inter-leaved rows of hex tiles. 
Each row is a list.
The list element contents are image elements.
CSS positioning is used to offset rows of hex tiles so that they 'nestle' together.