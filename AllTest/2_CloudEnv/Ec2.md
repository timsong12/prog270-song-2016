# AWS Ec2
We can use this one year free tier

### Setup Ec2
http://bit.ly/ec2-aws  (PPT)
http://aws.amazon.com/free/

### Data Center
* Google data center : https://youtu.be/zRwPSFpLX8I

### AWS login
```
ssh (-v) ubuntu@52.35.186.135
or
ssh ubuntu : following config file setup needed
```

### my config file for Ec2 login (~/.ssh/config)
```
Host ubuntu
    HostName 52.35.186.135
    Port 22
    User ubuntu
    IdentityFile ~/.ssh/Prog270Ec2-Song-2016.pem

Host bitbucket.org
    IdentityFile ~/.ssh/prog270key

Host github.com
    IdentityFile ~/.ssh/prog270key
```

[Reference]
http://www.elvenware.com/charlie/books/CloudNotes/Assignments/AwsEc2Expert.html
