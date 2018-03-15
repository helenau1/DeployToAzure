const dataset1 = function(req, res){
    res.render('trails',{
        trails:
            [
                {name:'Uutela', type:'Forest and sea'},
                {name:'Kivinokka', type:'Forest and birds'},
                {name:'Maunula', type:'Forest'},
                {name:'Viikki', type:'Forest, birds and sea'},
                {name:'Haltiala', type:'Forest'},
                {name:'Pihlajasaari', type:'Island'},
                {name:'Luukkaa', type:'Forest and lake'}
            ]});
};
module.exports = {
    dataset1
};