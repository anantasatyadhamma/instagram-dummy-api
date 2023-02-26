const {db} = require("../firebase");

exports.addUser = (req, res) => {
    const user = {
        name: "Ananta",
        username: "ananta",
        createdDate: new Date().getTime(),
        userId: Math.floor(Math.random() * (90 - 1) + 1),
        userProfile: 'https://randomuser.me/api/portraits/men/1.jpg'
    }

    db.ref(`users/${user.userId}`).set(user)
        .then(() => {
            return res.status(200).json({ message: 'success!' });
        })
        .catch(error => {
            return res.status(500).json({ mesage: 'failed!', error: error });
        });
}

exports.getUserProfile = (req, res) => {
    db.ref(`users/84`).once('value')
        .then(data => {
            return res.status(200).json({ message: 'success!', data: data.val() });
        })
        .catch(error => {
            return res.status(500).json({ message: 'failed!', error: error });
        })
}

exports.addTokenFCM = (req, res) => {
    const data = {
        tokenFCM : req.body.tokenFCM
    }
    db.ref(`users/84`).update(data)
        .then(() => {
            return res.status(200).json({ message: 'success!' });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error });
        })
}