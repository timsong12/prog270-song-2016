# SSH (Secure Shell)

### Basic commands
```
ssh-keygen -t rsa -P '' -f ~/.ssh/id_rsa
cat ~/.ssh/id_rsa.pub >> ~/.ssh/authorized_keys
id_rsa     : private key -> change name recognizably (i.e. prog270key)
id_rsa.pub : public key -> change name recognizably
ln -s ~/.ssh/prog270key ~/.ssh/main-key
ssh-add ~/.ssh/main-key : loading private key into memory
sshadd : alias sshadd="ssh-add ~/.ssh/main-key" at .bashrc-aliases
```
[Reference]
http://www.elvenware.com/charlie/development/cloud/SshFtpsPutty.html
