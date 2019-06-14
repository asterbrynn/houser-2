create table houses (
    id serial primary key,
    name varchar(30),
    address varchar(100),
    city varchar(100),
    state varchar(2),
    zip int
);

insert into houses (name, address, city, state, zip)
values ('Slytherin', '69 Stealthy Way', 'Atlanta', 'GA', 30303),
('Ravenclaw', '1337 Wisdom Street', 'Atlanta', 'GA', 30303),
('Hufflepuff', '4311 Determination Drive', 'Atlanta', 'GA', 30303),
('Gryffindor', '420 Blazing Court', 'Atlanta', 'GA', 30303);

alter table houses
add column image varchar,
add column mortgage float,
add column rent float;


update houses 
set image = 'https://vignette.wikia.nocookie.net/harrypotter/images/0/00/Slytherin_ClearBG.png/revision/latest?cb=20161020182557',
mortgage = 1340,
rent = 1600
where id=1;

update houses 
set image = 'https://vignette.wikia.nocookie.net/harrypotter/images/4/4e/RavenclawCrest.png/revision/latest?cb=20161020182442',
mortgage = 1342,
rent = 1600
where id=2;

update houses 
set image = 'https://vignette.wikia.nocookie.net/harrypotter/images/0/06/Hufflepuff_ClearBG.png/revision/latest?cb=20161020182518',
mortgage = 1341,
rent = 1600
where id=3;

update houses 
set image = 'https://vignette.wikia.nocookie.net/harrypotter/images/b/b1/Gryffindor_ClearBG.png/revision/latest?cb=20190222162949',
mortgage = 1489,
rent = 1700
where id=4;