/**
 * ArticlesController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
    lists: function (req, res) {
        Articles.find({}).exec(function (err, articles) {
            try {
                if (err) {
                    throw new Error("Database Error.No Articles Found");
                }
                res.view("articlesList", { articles: articles });
            } catch (err) {
                res.send("500", { error: err });
            }
        });
    },
    add:function(req,res){
        res.view("addArticle");
    }
};

