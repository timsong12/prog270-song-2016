# Linux Commands
Here are some essential Linux commands

### Basic Linux commands
```
ls -al : show file list with all/list option, d:dir, l:link
pwd : print working directory
cd + enter : to home directory
mv a b : rename a to b
which clear : find ‘clear’
more .bashrc : display this file, for escape: q
less .bashrc : display this file, for escape: q
chown -R bcuser:bcuser html : owner:group
sudo chown -R ubuntu:ubuntu html : 'super user do' option
chmod 400 foo.txt : [rwx rwx rwx]-[owner/group/others] -> only I can do
free -h : how much memory?
history : shows all commands that I issued
zip a.zip a.txt b.txt
unzip a.zip
```
### For installed program update
To be updated always is good, once a week at least
When you met option during installation, you can Enter for to go to the default option(the Capital thing)
```
sudo apt-get update
sudo apt-get upgrade
```

### Linux Basic program installation
```
sudo apt-get install build-essential
sudo apt-get install git
sudo apt-get install ssh
sudo apt-get install geany
sudo apt-get install meld
sudo apt-get install chromium-
sudo apt-get isntall openjdk-8-jdk
```
#### Atom editor
```
sudo add-apt-repository ppa:webupd8team/atom
sudo apt-get update
sudo apt-get install atom
or
sudo dpkg -i <DEB_PACKAGE>  after download a dev package from https://atom.io/
```

[Reference]
http://www.elvenware.com/charlie/os/linux/ConfigureLinux.html
