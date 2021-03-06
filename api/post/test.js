/**
 * @file test接口入口文件
 * @author 刘彪(liubiao@itoxs.com)
 * @version V0.01
 * @date 2016-09-30
 */
module.exports = {
    init: function(app) {
        app.post('/test', function(req, res) {
            if (req.query && req.query.callback) {
                //console.log(params.query.callback);
                res.jsonp({
                    status: 0,
                    message: "这是一个JSONP接口",
                    data: []
                });
            } else {
                res.json({
                    status: 0,
                    message: "这是一个JSON接口",
                    data: []
                });
            }
        });
    }
};