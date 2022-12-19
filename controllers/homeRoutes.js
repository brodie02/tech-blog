const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post, Comment } = require('../models')

router.get('/', async (req, res) => {
    try {
        const postData = await Post.findAll({
            include: [
                {
                    model: User,
                    attributes: ['username'],
                },
            ],
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('homepage', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/dashboard', withAuth, async (req, res) => {
    try {
        const postData = await Post.findAll({
            where: {
                user_id: req.session.user_id
            }
        });

        const posts = postData.map((post) => post.get({ plain: true }));

        res.render('dashboard', {
            posts,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/post/:id', withAuth, async (req, res) => {
    try {
        const postData = await Post.findByPk(req.params.id, {
        });

        const commentData = await Comment.findAll({
            where: {
                post_id: req.params.id
            },
            include: [{ model: User }]
        })
    
        const posts = postData.get({ plain: true });

        const comments = commentData.map((comment) => comment.get({ plain: true }));
        console.log(comments);
        res.render('post', {
            posts,
            comments,
            logged_in: req.session.logged_in
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/login', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        
        res.render('login');
    } catch (error) {
        res.status(500).json(error)
    }
})

router.get('/signup', (req, res) => {
    try {
        if (req.session.logged_in) {
            res.redirect('/');
            return;
        }
        
        res.render('signup');
    } catch (error) {
        res.status(500).json(error)
    }
})



module.exports = router