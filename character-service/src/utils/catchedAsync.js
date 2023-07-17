module.exports=(fn)=>{///este tipo de funcion se las conoce como funciones de orden superior
    return function(req,res,next){///es para controlar mejor los errores y que la app no se pare cuando hay errores asincronos 
       fn(req,res).catch((err)=>{
        next(err)
       })
    }
}