//creating the collection for trails to be added to the database
db.trails.save(
[
{name:'Uutela', type:'Forest and sea'},
{name:'Kivinokka', type:'Forest and birds'},
{name:'Maunula', type:'Forest'},
{name:'Viikki', type:'Forest, birds and sea'},
{name:'Haltiala', type:'Forest'},
{name:'Pihlajasaari', type:'Island'},
{name:'Luukkaa', type:'Forest and lake'}
]
);

//creating the collection for species to be added to the database

db.species.save(
[
{type:'Plants', amount:'1100'},
{type:'Birds', amount:'120'},
{type:'Mammals', amount:'46'},
{type:'Reptiles and amphibians', amount:'4'}
]
);

