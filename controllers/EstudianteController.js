var mongoose = require('mongoose');
var Estudiante = require("../models/Estudiante");
var estudianteController = {};
estudianteController.list = function(req, res){
    
    Estudiante.find({}).exec(function(err, estudiantes){
        if( err ){ console.log('Error: ', err); return; }
        console.log("The INDEX");
        res.render('../views/estudiante/index', {estudiantes: 
estudiantes,titulo:'INDEX'} );
        
    });
    
};
estudianteController.show = function(req, res){
    Estudiante.findOne({_id: req.params.id}).exec(function(err, 
        estudiante) {
            if( err ){ console.log('Error: ', err); return; }
        
            res.render('../views/estudiante/show', {estudiante: estudiante} );
        });
        
    };
    estudianteController.create = function(req, res){
        res.render('../views/estudiante/create');
    };
    estudianteController.save = function(req, res){
        var estudiante = new Estudiante( req.body );
        
        estudiante.save(function(err){
            if( err ){ console.log('Error: ', err); return; }
            
            console.log("Successfully created a estudiante. :)");
            res.redirect("/estudiantes/show/"+ estudiante._id);
            //res.redirect("/estudiantes");
        });
    };
    estudianteController.edit = function(req, res) {
      Estudiante.findOne({_id: req.params.id}).exec(function (err, estudiante) 
    {
        if (err) { console.log("Error:", err); return; }
        
        res.render("../views/estudiante/edit", {estudiante: estudiante});
        
      });
    };
    estudianteController.update = function(req, res){
        Estudiante.findByIdAndUpdate( req.params.id, {$set: {
            codigo: req.body.codigo,
            nombre: req.body.codigo,
            email: req.body.email,
            edad: req.body.codigo,
            pais: req.body.codigo,

        }}, { new: true },
        function( err, estudiante){
            if( err ){ 
                console.log('Error: ', err); 
                res.render('../views/estudiante/edit',  {estudiante:  req.body} 
    );
            }
            
            console.log( estudiante );
            
            res.redirect('/estudiantes/show/' + estudiante._id);
            
        });
    };
    estudianteController.delete = function(req, res){
        
        Estudiante.remove({_id: req.params.id}, function(err){
            if( err ){ console.log('Error: ', err); return; }
            
            console.log("Estudiante deleted!");
            res.redirect("/estudiantes");
        });
        
    };
    module.exports = estudianteController;