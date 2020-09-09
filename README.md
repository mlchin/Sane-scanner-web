# Sane-scanner-web

While setting up my Canon E410 printer as a print/scan server on my Raspberry Pi 1, I couldn't find any good/up-to-date SANE client which will allow easy access (no login required) to the scanner from my Windows clients.

So, I decided to write a web interface that could be installed on the Raspberry Pi 1 that will enable access to the scanner from Windows client (via browser) without requiring the user to login to the Raspberry Pi.

Other considerations included that (the) server-side must also be light since I'm running this on a Raspberry Pi 1. Together, both the server and software needed to be easy to configure.

As such, I decided to use Node JS which can be installed via Raspbian and Express 4 for the server. The client during development is Firefox and the latest Chrome based MS Edge. So, it should work with both these browsers. 

Currently, the web interface works quite well for my personal use, but, there may be some hidden errors that may not have been detected.

Developed and tested on RPi 1 Model B. So, should still work on other models.

NOTE: In order to use this web server, you will need to copy all the files in Github into a directory called "Sane-scanner-web" (/home/pi/Sane-scanner-web). Then, manually create another directory named "ScanDocuments" which will store all scan documents (/home/pi/ScanDocuments). You can also use systemd to run the app as a service on boot. The systemd file is "scanner.service" (included). The service uses "forever" (npm install forever -g) to restart the web server on failure. That's it! Enjoy.
