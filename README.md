# Sane-scanner-web

While setting up my Canon E410 printer as a print/scan server on my Raspberry Pi 1, I couldn't find any good/up-to-date SANE client which will allow easy access (no login required) to the server for scanning from the Windows clients.

So, I decided to write a web interface that could be installed on the Raspberry Pi 1 that will enable access to the scanner from Windows client (via browser) without requiring the user to login to the Raspberry Pi.

Other considerations include that (the) server software must be lightweight since I'm running this on a Raspberry Pi 1, minimal writing to the SD card as much as possible, and, the server and software needed to be easily available and easy to configure.

As such, I decided to use Node JS which can be installed via Raspbian and Express 4 for the server. The client used during development is Firefox and the latest Chromium based MS Edge. So, it should work with both these browsers. 

Currently, the web interface works quite well for my personal use, but, there may be some hidden errors that may not have been detected.

Developed and tested on RPi 1 Model B and Canon E410. So, should work even better on newer Raspberry Pi models.


NOTE: In order to use this web server, install NodeJS and copy all the files in Github into a directory called "Sane-scanner-web" (/home/pi/Sane-scanner-web). From the directory run, "npm install --production". Then, manually create another directory named "ScanDocuments" which will store all scan documents (/home/pi/ScanDocuments). You can manually start the server, or, use systemd to run the app as a service on boot. The systemd file is "scanner.service" (included). To access (systemd) server: http://(Your Server IP Adress):3000/  Scanner.service uses "forever" (npm install forever -g) to restart the web server on failure. 
  
That's it! Enjoy.
