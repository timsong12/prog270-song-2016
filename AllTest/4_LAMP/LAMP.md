# LAMP
```
L: Linux
A: Apache
M: MySQL
P: PHP/Python/Perl
```

### LAMP installation
```
sudo apt-get update
sudo apt-get install tasksel
sudo tasksel install lamp-server

```

### Overview
Apache directory : **/var/www/html**
We need to change the owner of this folder to bcuser to use freely
> sudo chown -R bcuser:bcuser html/

/var/www/html/index.html : is the main web page

[Reference]
http://www.elvenware.com/charlie/development/database/mysql/MySql.html
