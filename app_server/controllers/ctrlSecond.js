const dataset2 = function(req, res){
    res.render('second',{
        species:
            [
                {type:'Plants', amount:'1100'},
                {type:'Birds', amount:'120'},
                {type:'Mammals', amount:'46'},
                {type:'Reptiles and amphibians', amount:'4'}

            ]});
};

module.exports = {
    dataset2
};