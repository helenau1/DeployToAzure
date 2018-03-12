//creating the database for trails
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

//creating the database for species

db.species.save(
[
{type:'Plants', amount:'1100'},
{type:'Birds', amount:'120'},
{type:'Mammals', amount:'46'},
{type:'Reptiles and amphibians', amount:'4'}
]
);

