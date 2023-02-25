
const {db} = require("../firebase");


exports.getPosts = (req, res) => {
    db.ref('posts').once('value')
        .then((data) => {
          let posts = [];
          data.forEach(element => {
            posts.push(element);
          });
          res.status(200).json({message: 'success!', data: posts});
        })
        .catch(error => {
            res.status(500).json({ message: "error", error: error.response.error})
        })
}


exports.addPosts = (req, res) => {
    const numberPost = Math.floor(Math.random() * (90 - 1) + 1);
    const likes = Math.floor(Math.random() * (200 - 1) + 1);

    const posts = [
        {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": new Date().getTime(),
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "images": {
                "low_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
                    "width": 320,
                    "height": 320
                },
                "thumbnail": {
                    "url": "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2015/07/09/22/45/tree-838667_960_720.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": new Date().getTime(),
                "text": "Brown tree on body of water under blue sky during night time",
                "from": {
                    "username": "bessi",
                    "profile_picture": "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_48x48.jpg",
                    "id": "1547627005",
                    "full_name": "Bessi"
                },
                "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "user": {
                "username": "bessi",
                "profile_picture": "https://cdn.pixabay.com/user/2019/04/11/22-45-05-994_48x48.jpg",
                "id": "1547627005",
                "full_name": "Bessi"
            },
            comments: [
                {
                  created_time: new Date().getTime(),
                  text: 'woow...! good',
                  from: {
                    username: 'itsgoodman',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Good Man',
                  },
                  id: 0,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'its amazing...!',
                  from: {
                    username: 'jane',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Jane',
                  },
                  id: 1,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'great! keep working...',
                  from: {
                    username: 'thisisjohn',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'John',
                  },
                  id: 2,
                },
              ],
              likes,
              bookmarked: false,
        },
        {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": new Date().getTime(),
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "images": {
                "low_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg",
                    "width": 320,
                    "height": 320
                },
                "thumbnail": {
                    "url": "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2013/07/18/10/56/railroad-163518_960_720.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": new Date().getTime(),
                "text": "train rail in the middle of green grass field",
                "from": {
                    "username": "larissa",
                    "profile_picture": "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_48x48.jpg",
                    "id": "1547627005",
                    "full_name": "Larissa"
                },
                "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "user": {
                "username": "larissa",
                "profile_picture": "https://cdn.pixabay.com/user/2015/06/13/06-38-56-116_48x48.jpg",
                "id": "1547627005",
                "full_name": "Larissa"
            },
            comments: [
                {
                  created_time: new Date().getTime(),
                  text: 'good picture, I like it',
                  from: {
                    username: 'raka',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Raka',
                  },
                  id: 0,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'its amazing...!',
                  from: {
                    username: 'christopher',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Christopher',
                  },
                  id: 1,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'great! keep working...',
                  from: {
                    username: 'paul',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Paul',
                  },
                  id: 2,
                },
              ],
              likes,
              bookmarked: false,
        },
        {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": new Date().getTime(),
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "images": {
                "low_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg",
                    "width": 320,
                    "height": 320
                },
                "thumbnail": {
                    "url": "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2016/09/21/04/46/barley-field-1684052_960_720.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": new Date().getTime(),
                "text": "green wheat field during daytime",
                "from": {
                    "username": "kangbch",
                    "profile_picture": "https://cdn.pixabay.com/user/2016/09/22/02-22-02-467_48x48.jpg",
                    "id": "1547627005",
                    "full_name": "Kang"
                },
                "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "user": {
                "username": "kangbch",
                "profile_picture": "https://cdn.pixabay.com/user/2016/09/22/02-22-02-467_48x48.jpg",
                "id": "1547627005",
                "full_name": "Kang"
            },
            comments: [
                {
                  created_time: new Date().getTime(),
                  text: 'good picture, I like it',
                  from: {
                    username: 'donald',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'donald',
                  },
                  id: 0,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'its amazing...!',
                  from: {
                    username: 'christopher',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Christopher',
                  },
                  id: 1,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'great! keep working...',
                  from: {
                    username: 'paul',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Paul',
                  },
                  id: 2,
                },
              ],
              likes,
              bookmarked: false,
        },
        {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": new Date().getTime(),
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "images": {
                "low_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg",
                    "width": 320,
                    "height": 320
                },
                "thumbnail": {
                    "url": "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2021/10/01/18/53/corgi-6673343_960_720.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": new Date().getTime(),
                "text": "Corgi, the dog",
                "from": {
                    "username": "MolnarSzabolcsErdely",
                    "profile_picture": "https://cdn.pixabay.com/user/2021/07/22/08-49-04-239_48x48.png",
                    "id": "1547627005",
                    "full_name": "Molnar"
                },
                "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "user": {
                "username": "MolnarSzabolcsErdely",
                "profile_picture": "https://cdn.pixabay.com/user/2021/07/22/08-49-04-239_48x48.png",
                "id": "1547627005",
                "full_name": "Molnar"
            },
            comments: [
                {
                  created_time: new Date().getTime(),
                  text: 'good picture, I like it',
                  from: {
                    username: 'donald',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'donald',
                  },
                  id: 0,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'its amazing...!',
                  from: {
                    username: 'christopher',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Christopher',
                  },
                  id: 1,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'great! keep working...',
                  from: {
                    username: 'paul',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Paul',
                  },
                  id: 2,
                },
              ],
              likes,
              bookmarked: false,
        },
        {
            "attribution": null,
            "tags": [],
            "type": "image",
            "location": null,
            "filter": "Normal",
            "created_time": new Date().getTime(),
            "link": "https://instagram.com/p/6zeBG2H1oH/",
            "images": {
                "low_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_960_720.jpg",
                    "width": 320,
                    "height": 320
                },
                "thumbnail": {
                    "url": "https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_960_720.jpg",
                    "width": 150,
                    "height": 150
                },
                "standard_resolution": {
                    "url": "https://cdn.pixabay.com/photo/2023/02/11/13/43/building-7782841_960_720.jpg",
                    "width": 640,
                    "height": 640
                }
            },
            "users_in_photo": [],
            "caption": {
                "created_time": new Date().getTime(),
                "text": "Korean historic building",
                "from": {
                    "username": "lancier",
                    "profile_picture": "https://cdn.pixabay.com/user/2021/05/08/02-03-51-979_48x48.jpg",
                    "id": "1547627005",
                    "full_name": "Lancier"
                },
                "id": "1059322357729942165"
            },
            "user_has_liked": false,
            "user": {
                "username": "lancier",
                "profile_picture": "https://cdn.pixabay.com/user/2021/05/08/02-03-51-979_48x48.jpg",
                "id": "1547627005",
                "full_name": "Lancier"
            },
            comments: [
                {
                  created_time: new Date().getTime(),
                  text: 'woow...! good',
                  from: {
                    username: 'itsgoodman',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Good Man',
                  },
                  id: 0,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'its amazing...!',
                  from: {
                    username: 'jane',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'Jane',
                  },
                  id: 1,
                },
                {
                  created_time: new Date().getTime(),
                  text: 'great! keep working...',
                  from: {
                    username: 'thisisjohn',
                    profile_picture: `https://randomuser.me/api/portraits/men/${numberPost}.jpg`,
                    id: '1547627005',
                    full_name: 'John',
                  },
                  id: 2,
                },
              ],
              likes,
              bookmarked: false,
        },
    ];


    posts.map(e => {
        const data = {
            ...e,
            id: req.body.id,
        }

        db.ref('posts').push(data)
          .then(() => {
              console.log('berhasil!');
          })
          .catch(error => {
              return res.status(500).json({ message: 'failed!', error: error.response});
          })
    });

    return res.status(500).json({ message: 'success!'});
}
