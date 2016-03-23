# Linux Shell
Here are some good information about Linux Shell

## .bashrc setup
***.bashrc*** file is basic script file which is executed at booting time.
#### color prompt
For coloring prompt, refer to the following line.
```
#force_color_prompt=yes  // #(comment out) should be removed
```
For line feed, refer to the following code.
```
if [ "$color_prompt" = yes ]; then
    PS1='${debian_chroot:+($debian_chroot)}\[\033[01;32m\]\u@\h\[\033[00m\]:\[\033[01;34m\]\w\[\033[00m\]\n\$ '
else
    PS1='${debian_chroot:+($debian_chroot)}\u@\h:\w\n\$ '
fi
```
#### SSH Agent
```
if [ -z "$SSH_AUTH_SOCK" ] ; then
    eval `ssh-agent`
fi
```
#### Path check for Java/Chrome/Android(if needed)
```
# Java Path Support
export JAVA_HOME=/usr/lib/jvm/java-8-oracle
export CHROME_BIN=/usr/bin/chromium-browser

# Android Path Support
export ANDROID_HOME="$HOME/Android/Sdk"
export ANDROID_PLATFORM_TOOLS="$HOME/Android/Sdk/platform-tools"
export PATH=$PATH:$ANDROID_HOME/tools:$ANDROID_PLATFORM_TOOLS:
```
#### source command
To activate modified .sh file, following command needed.
```
$ source xxxx.sh
```

## .bash_aliases
This file include extra aliases for various usage.
#### My aliases
This is my useful aliases
```
alias sshadd="ssh-add ~/.ssh/main-key"
alias ee="ssh ubuntu"
alias at='cd ~/Documents/AllTest'
alias www='cd /var/www/html'
alias p2='cd ~/Git/prog270-song-2016'
alias scpt='cd ~/Git/prog270-song-2016/scripts'
alias cgibin='cd /usr/lib/cgi-bin'
alias schtm='cd ~/Source/MakeHtml'
alias scimg='cd ~/Source/ElvenImages'
```
#### adding to .bashrc
To read .bash_aliases at booting time, we need to add following code in *.bashrc* file.
```
if [ -f ~/.bash_aliases ]; then
    . ~/.bash_aliases
fi
```
[Reference]
http://www.ccalvert.net/books/CloudNotes/Assignments/BashSetup.html
