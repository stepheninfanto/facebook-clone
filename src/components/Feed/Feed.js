import React ,{useState ,useEffect}from 'react'
import "./Feed.css"
import StoryReel from '../Story/StoryReel'
import MessageSender from '../MessageSender/MessageSender'
import Post from '../Post/Post';
import db  from  "../../firebase";
function Feed() {

    const [posts,setPosts]=useState([]);
    useEffect(() => {
        //real time connection to database 
        db.collection('posts')
        .orderBy("timestamp","desc")
        .onSnapshot(snapshot =>(
            setPosts(snapshot.docs.map(doc => ({ id:doc.id,
                data:doc.data()})))
        ));

        },[])
        
    return (
        <div className="feed">
            <StoryReel/>
            <MessageSender/>

            {posts.map((post) =>(
             <Post   
            profilePic= {post.data.profilePic }  
            message={post.data.message }
            username={post.data.username }
            image={post.data.image }
            timestamp={post.data.timestamp}
              /> 
            ))}
        </div>
    );
}

export default Feed
