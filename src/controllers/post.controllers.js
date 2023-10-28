// 1. importamos response de express
const { response } = require("express")
// 2. importamos el modelo Post
const { Post } = require("../models/db");
// 3. creamos las funciones controladoras
const createPost = async (req, res) => {
    try {

        const newPost = await Post.create(req.body);

        return res.status(201).json({
            ok: true,
            msg: 'Post creado correctamente',
            data: newPost
        })
        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        })
    }
}

const getPosts = async (req, res) => {
    try{

        const { user } = req.body;

        const posts = await Post.findAll({
            where: {
                userId: user.id
            }
        }); // SELECT * FROM posts  obtiene todos los posts de la base de datos

        return res.status(200).json({
            ok: true,
            msg: 'Posts obtenidos correctamente',
            data: posts
        });


    }catch(error){
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        })
    }
}


const updatePost = async (req, res) => {

    try {
        
        const { id } = req.params;

        const updatedPost = await Post.update(req.body, {
            where: {id}
        });

        if(updatedPost[0] === 0){
            return res.status(404).json({
                ok: false,
                msg: 'El post o la propiedad no existe',
                data: updatedPost
            })
        }

        return res.status(200).json({
            ok: true,
            msg: 'Post actualizado correctamente',
            data: updatedPost
        })


    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        });
    }

}

// Vamos a eliminar un post
const deletePost = async (req, res) => {
    try {

        const { id } = req.params;

        if(!id){
            return res.status(400).json({
                ok: false,
                msg: 'El id es requerido'
            })
        }

        const post = await Post.destroy({
            where:{id}
        });

        if(!post){
            return res.status(404).json({
                ok: false,
                msg: 'No se encontró el post'
            })
        }

        return res.status(200).json({
            ok: true,
            msg: 'Post eliminado correctamente',
            data: post
        })

        
    } catch (error) {
        return res.status(500).json({
            ok: false,
            msg: 'Error en el servidor',
            error
        })
    }
}


// 4. exportamos las funciones controladoras

module.exports ={
    createPost,
    deletePost,
    getPosts,
    updatePost
}



