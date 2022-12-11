const router = require('express').Router();
const withAuth = require('../utils/auth');
const { User, Post } = require('../models')

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

router.get('/dashboard', withAuth, (req, res) => {
    try {
        res.render('dashboard', {
            logged_in: true
        })
    } catch (error) {
        res.status(500).json(error)
    }
})

module.exports = router