const {db} = require("../firebase");

exports.getNotification = (req, res) => {
    db.ref('notification/84').once("value")
        .then(snapshot => {
            return res.status(200).json({ message: 'success!', data: snapshot.val() });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
}   