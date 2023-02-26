const { db, messaging } = require("../firebase");
const { formatDistanceToNow } = require("date-fns");

exports.likedPost = (req, res) => {
    const postId = req.body.postId;
    const data = {
        user_has_liked: true,
    };

    let username, tokenFCM;

    const promises = new Promise(async (resolve, reject) => {
        await db.ref(`posts/${postId}/user/username`)
            .once("value")
            .then(data => {
                username = data.val();
            })
            .catch(error => {
                return res.status(500).json({ message: "failed!", error: error });
            });

        await db.ref(`users/84/tokenFCM`)
            .once("value")
            .then(token => {
                tokenFCM = token.val();
            })
            .catch(error => {
                return res.status(500).json({ message: "failed!", error: error });
            });

        resolve('success!');
    });

    promises.then(() => {
        db.ref(`posts/${postId}`)
        .update(data)
        .then(async () => {
            await db.ref(`posts/${postId}/likes`).transaction(currentLikes => {
                if (currentLikes === null) return 0;
                return currentLikes + 1;
            });

            const payload = {
                token: tokenFCM,
                notification: {
                    title: "Like Post",
                    body: "You just liked a post from " + username,
                },
            };

            const notification = {
                title: "Like Post",
                text: "You just liked a post from " + username,
                created_time: new Date().getTime(),
            }

            messaging.send(payload)
                .then( async () => {
                    await db.ref(`notification/84`).push(notification)
                    return res.status(200).json({ message: "success!" });
                })
                .catch(error => {
                    return res.status(500).json({ message: "failed!", error: error });
                })
            
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
    });
};

exports.disLikedPost = (req, res) => {
    const postId = req.body.postId;
    const data = {
        user_has_liked: false,
    };
    db.ref(`posts/${postId}`)
        .update(data)
        .then(async () => {
            await db.ref(`posts/${postId}/likes`).transaction(currentLikes => {
                if (currentLikes === null) return 0;
                return currentLikes - 1;
            });
            return res.status(200).json({ message: "success!" });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
};

exports.addComments = (req, res) => {
    const postId = req.body.postId;
    const commentId = Math.floor(Math.random() * (1000 - 1) + 1);

    let comment = {
        created_time: new Date().getTime(),
        text: req.body.textComment,
        from: {
            profile_picture: `https://randomuser.me/api/portraits/men/1.jpg`,
            id: Math.floor(Math.random() * (1000 - 1) + 1),
        },
        id: commentId,
    };

    const promises = new Promise(async (resolve, reject) => {
        await db
            .ref(`users/84`)
            .once("value")
            .then(data => {
                comment = {
                    ...comment,
                    from: {
                        ...comment.from,
                        username: data.child("username").val(),
                        full_name: data.child("name").val(),
                    },
                };

                resolve("success!");
            })
            .catch(error => {
                console.log("err", error);
                return res.status(500).json({ message: "failed!", error: error });
            });
    });

    promises.then(() => {
        db.ref(`posts/${postId}/comments/${commentId}`)
            .set(comment)
            .then(() => {
                return res.status(200).json({ message: "success!" });
            })
            .catch(error => {
                return res.status(500).json({ message: "failed!", error: error });
            });
    });
};

exports.bookmarkedPost = (req, res) => {
    const postId = req.body.postId;
    const data = {
        bookmarked: true,
    };
    db.ref(`posts/${postId}`)
        .update(data)
        .then(async () => {
            return res.status(200).json({ message: "success!" });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
};

exports.disBookmarkedPost = (req, res) => {
    const postId = req.body.postId;
    const data = {
        bookmarked: false,
    };
    db.ref(`posts/${postId}`)
        .update(data)
        .then(async () => {
            return res.status(200).json({ message: "success!" });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
};

exports.searchPost = (req, res) => {
    const username = req.body.username;
    db.ref("posts")
        .once("value")
        .then(snapshot => {
            let data = [];
            const promises = new Promise((resolve, reject) => {
                snapshot.forEach(element => {
                    if (element.child("user").child("username").val() === username) {
                        const post = {
                            username: element.child("user").child("username").val(),
                            userProfile: element.child("user").child("profile_picture").val(),
                            bookmarked: element.child("bookmarked").val(),
                            likes: element.child("likes").val(),
                            user_has_liked: element.child("user_has_liked").val(),
                            image: element.child("images").child("standard_resolution").child("url").val(),
                            caption: element.child("caption").child("text").val(),
                            comments: element.child("comments").val(),
                            time: formatDistanceToNow(parseInt(element.child("created_time").val())),
                        };
                        data.push(post);
                        resolve(data);
                    } else {
                        resolve(data);
                    }
                });
            });

            promises
                .then(result => {
                    if (result.length > 0) {
                        return res.status(200).json({ message: "success!", data: result });
                    } else {
                        return res.status(200).json({ message: "no data!" });
                    }
                })
                .catch(error => {
                    console.log("error promise", error);
                    return res.status(500).json({ message: "failed!", error: error });
                });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error: error });
        });
};

exports.getDetailPost = (req, res) => {
    const postId = req.body.postId;
    db.ref(`posts/${postId}`)
        .once("value")
        .then(snapshot => {
            return res.status(200).json({ message: "success!", data: snapshot.val() });
        })
        .catch(error => {
            return res.status(500).json({ message: "failed!", error });
        });
};
