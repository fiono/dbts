var root = "/";
var icon = "/favicon.ico";

function route(pathname, db) {
    switch (pathname) {
        case icon:
            console.log("Should serve favicon");
            break;
        case root:
            console.log("Should generate a user id");
            break;
        default:
            var user_id = parseInt(pathname.substring(1));
            var record = db.findOrCreateStreak(user_id, function(record) {
                logStreak(record); // do something real
            });
    }
}

function logStreak(record) {
    console.log("streak = " + record.streak_count);
}

exports.route = route;