module.exports.posts = async(req, res) => {
    if (req.isAuthenticated()) {
        try {
            return res.render('jobsPosts', {
                title: 'jobsPosts',
                heading: 'this is jobsPosts',
                
            });

        } catch (error) {
            console.log('error in finding batch');
            res.redirect('back');
        }
    }

}