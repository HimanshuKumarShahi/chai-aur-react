function PostCard({post}){

  return(

    <div className="bg-white border mb-6">

      <div className="flex items-center gap-3 p-3">

        <img
          src="https://i.pravatar.cc/100"
          className="w-8 h-8 rounded-full"
        />

        <span className="font-semibold">
          {post.user?.username}
        </span>

      </div>

      {post.mediaType === "image" && (

        <img
          src={post.mediaUrl}
          className="w-full"
        />

      )}

      {post.mediaType === "video" && (

        <video
          src={post.mediaUrl}
          controls
          className="w-full"
        />

      )}

      <div className="p-3">

        <div className="flex gap-4 mb-2">

          <span>❤️</span>
          <span>💬</span>
          <span>📤</span>

        </div>

        <p>
          <span className="font-semibold">
            {post.user?.username}
          </span>
          {" "}
          {post.caption}
        </p>

      </div>

    </div>

  )

}

export default PostCard