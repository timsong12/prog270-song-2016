# MySQL and an example
## Basic commands
```
mysql -u root -p : root user로 로그인
show databases;
create database prog270;
use prog270;
show tables;
create table presidents (id int NOT NULL AUTO_INCREMENT, first varchar(128), last varchar(128), PRIMARY KEY (id));
describe presidents;
select * from presidents; : check records from presidents

insert into presidents (first, last) values ('George', 'Washington');
insert into presidents (first, last) values ('John', 'Adams');
insert into presidents (first, last) values ('Thomas', 'Jefferson');

desc presidents; :check table structure
drop table presidents; : delete table

exit; : exit
```

## Example - Presidents
This is an example of using Data Base  
When you click the button, it fetches the list of the US presidents

<div>
  <button id="idGetPresidentsBtn" type="button"> Get Presidents </button>
</div>

<div>
  <ul id='idPresidentsList'>
  </ul>
</div>

[Reference]
http://db-engines.com/en/ranking : DB Ranking, postgreSQL rising
