const Insta = require('scraper-instagram');
const InstaClient = new Insta();

const hashtag = "튤립명소";
const location = "중랑천";
const interval = 30;
const lastPostShortcode = false;
const fullPosts = false;

InstaClient.getHashtag(hashtag)
    .then(hashtags => console.log("hashtags:", hashtags))
    .catch(err => console.error("searchHashtag err:", err));

// InstaClient.subscribeHashtagPosts(hashtag, (post, err) => {
//     if(post)
//         console.log("[post]:",post.shortcode);
//     else
//         console.error("err:", err);
// }, {
//     interval,
//     lastPostShortcode,
//     fullPosts
// });
//
// InstaClient.searchLocation(location)
//     .then(locations => console.log("locations:", locations))
//     .catch(err => console.error("locations err:", err));