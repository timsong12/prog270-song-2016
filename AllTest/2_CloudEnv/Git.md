# Git Overview
An open source SW. version control system.
Nested repository is bad.
Every repository has to have README file.
Almost all Web development are done with Git.

## basic Git Commands
```
git init : initialize empty Git repository
git add xxx.file : stage all changes in xxx.file for next commit
git add . : dot(.) means add all changes, including folder
git commit -m "bbb" : adding "bbb" comment. update to local repo.
git push : update to remote repo.
git pull : make recent for our repo.

git diff
git diff HEAD~1 HEAD README.md (TBD)
git diff 753503:README.md xxxxx:README.md

git reset <file> : undo for git add
git reset : when there are too many file to undo.

git status : check current status

git config --global user.name "Tim at N252"
git config --global user.email "timsong12@gmail.com"
git config --global push.default simple

git log : can see all the check-in history

git remote add origin https://github.com/timsong12/prog270-song-2016.git
git remote add origin git@github.com:timsong12/prog270-song-2016.git

git push -u origin master : Do just once for the first time, next, just git push

git clone git@github.com:timsong12/prog270-song-2016.git : issue at the ~/Git/.

```

## Check Git Config file
cat ~/.gitconfig
cat .git/config
> url = git@github.com:timsong12/prog270-song-2016.git

### Troubleshoot
git branch --set-upstream-to=origin/master master : First, This error is weird. When there is no tracking information for the current branch, try with this.

[Link]
http://www.ccalvert.net/books/CloudNotes/Assignments/GitNewRepo.html#build-repository
Cmd: https://confluence.atlassian.com/bitbucketserver/basic-git-commands-776639767.html
Tutorial: https://www.atlassian.com/git/tutorials/saving-changes/git-commit
ETC:
http://stackoverflow.com/
https://git-scm.com/book/en/v2/Git-Basics-Getting-a-Git-Repository
