const router = require('express').Router(); // Importamos el router de express
const { createPost, deletePost, getPosts, updatePost } = require("../controllers/post.controllers")
// creamos una ruta de tipo post para crear un post/feed de instagram

router.get("/", getPosts) // http://localhost:8080/post/
router.post("/", createPost)  // http://localhost:8080/post/
router.put("/:id", updatePost)  // http://localhost:8080/post/:id
router.delete("/:id", deletePost)  // http://localhost:8080/post/:id

module.exports = router;