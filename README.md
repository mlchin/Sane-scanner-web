# Sane-scanner-web

While setting up my Canon E410 printer as a print/scan server on my Raspberry Pi 1, I couldn't find any good/up-to-date SANE client which will allow easy access to the scanner from my Windows clients.
So, I decided to write a web interface that could be installed on the Raspberry Pi 1 that will enable access to the scanner while requiring the most minimal of access to the Raspberry Pi server, i.e. web browser.

At the same time, the server-side also needed to be light since I'm running this on a Raspberry Pi 1. Together, both the server and software needed to be easy to configure.
As such, I decided to use Node JS and Express 4 for the server side and the client has been tested with Firefox and the latest Chrome based MS Edge.

Currently, the web interface works quite well for my personal use, but, there may be some hidden errors that may not have been detected.

Developed and tested on RPi 1 Model B. So, should still work on other models.
