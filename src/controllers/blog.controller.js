const blogPosts = [];

function insertPost(req, res) {

    blogPosts.push(req.body);
    res.send(req.body);

}

function getAllPost(req, res) {
    res.send(blogPosts);
}

function getOne(req, res) {
    const index = req.params.id - 1;
    const post = blogPosts[index];
    res.send(post);

}

module.exports = {
    insertPost,
    getAllPost,
    getOne,
};