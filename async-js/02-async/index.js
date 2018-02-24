// 02 - Exploring Async.js - async.waterfall and async.series

var async = require('async');
var GithubApi = require('github');

var GithubApi = new GithubApi({
    version: "3.0.0"
});

async.waterfall([
    function getAvatar(callback) {
        GithubApi.search.users({ q: 'freelancer-polly' }, function(err, res) {
            if (err) {
                callback(err, null);
                return;
            }
            var avatarUrl = res.data.items[0].avatar_url;
            // console.log(res.data.items[0].avatar_url);
            callback(null, avatarUrl);
        });
    },
    function wrapAvatar(avatarUrl, callback) {
        var WrappedAvatarUrl = '<img src="' + avatarUrl + '" />';
        callback(null, WrappedAvatarUrl)
    }
], function(err, res) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res);
});

/***************** A S Y N C   S E R I E S *****************/

async.series([
    function functionOne(callback) {
        callback(null, 'RESULT FROM FUNCTION ONE');
    },

    function functionTwo(callback) {
        callback(null, 'RESULT FROM FUNCTION TWO');
    },

    function functionThree(callback) {
        callback(null, 'RESULT FROM FUNCTION THREE');
    }
], function(err, res) {
    if (err) {
        console.log(err);
        return;
    }

    console.log(res);
});