"use strict"
/* -------------------------------------------------------
    EXPRESSJS - BLOG Project with Mongoose
------------------------------------------------------- */
const router = require('express').Router()

// Call Controllers:
const { BlogCategory: bloCategoryView, BlogPost: blogPostView } = require('../controllers/blogControllerView')

router.all('/', (req, res) => { res.redirect('/post') })

router.all('/post', blogPostView.list)
router.all('/post/create', blogPostView.create)
router.all('/post/:postId', blogPostView.read)
router.all('/post/:postId/update', blogPostView.update)
router.all('/post/:postId/delete', blogPostView.delete)





module.exports = router