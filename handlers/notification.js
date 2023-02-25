const {db} = require("../firebase");

exports.getNotification = (req, res) => {
    const userId = req.body.userId;
    db.ref('notification').orderByChild("userId").equalTo(userId).once("value")
        .then(snapshot => {
            return res.status(200).json({ message: 'success!', data: snapshot.val() });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
}   