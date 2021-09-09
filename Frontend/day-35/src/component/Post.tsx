import React, { useState } from "react";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import logo from "../assets/image/header-logo.png";
import user from "../assets/image/header-logo.png";
import FavoriteBorderOutlinedIcon from "@material-ui/icons/FavoriteBorderOutlined";
import FavoriteIcon from "@material-ui/icons/Favorite";
import InsertCommentOutlinedIcon from "@material-ui/icons/InsertCommentOutlined";
import ShareOutlinedIcon from "@material-ui/icons/ShareOutlined";
import BookmarkIcon from "@material-ui/icons/Bookmark";
import BookmarkBorderOutlinedIcon from "@material-ui/icons/BookmarkBorderOutlined";
import { Picker } from "emoji-mart";
import EmojiEmotionsOutlinedIcon from "@material-ui/icons/EmojiEmotionsOutlined";

interface Props {}

const Post = (props: Props) => {
  const [emoji, setEmoji] = useState(false);
  const [like, setLike] = useState<Boolean>(false);
  const [save, setSave] = useState<Boolean>(false);

  return (
    <div className="Post_Container">
      <div className="Post_Header">
        <div className="User_Post">
          <div className="User_Image">
            <img src={logo} alt="" />
          </div>
          <div className="User_Name">UserName</div>
        </div>
        <div className="Post_Menu">
          <MoreHorizIcon />
        </div>
      </div>
      <div className="Post_Image">
        <img src={user} alt=" " />
      </div>
      <div className="Post_Footer">
        <div className="Post_Actions">
          <div className="Post_LCS">
            <div onClick={() => setLike(!like)} className="Post_Like">
              {like ? (
                <FavoriteIcon style={{ color: "red" }} />
              ) : (
                <FavoriteBorderOutlinedIcon />
              )}
            </div>
            <div className="Post_Comment">
              <InsertCommentOutlinedIcon />
            </div>
            <div className="Post_Share">
              <ShareOutlinedIcon />
            </div>
          </div>
          <div onClick={() => setSave(!save)} className="Post_Saved">
            {save ? (
              <BookmarkIcon style={{ color: "black" }} />
            ) : (
              <BookmarkBorderOutlinedIcon />
            )}
          </div>
        </div>
        <div className="Liked_By">Liked by iamshobheet and 69 others !</div>
        <div className="Post_Comments">
          <div className="Post_Comment">
            <div className="Comment_By">__hello_world__</div>
            <div className="Comment">
              Never forced someone to drink. I said Never
            </div>
          </div>
          <div className="Post_Comment">
            <div className="Comment_By">__hello_world__</div>
            <div className="Comment">
              Never forced someone to drink. I said Never
            </div>
          </div>
          <div className="Post_Comment">
            <div className="Comment_By">__hello_world__</div>
            <div className="Comment">
              Never forced someone to drink. I said Never
            </div>
          </div>
        </div>
        <div className="Post_Time">2 HOURS AGO</div>
        <hr />
        <div className="Add_Comment">
          <div className="Icon">
            <div className="Icon_Button" onClick={() => setEmoji(!emoji)}>
              <EmojiEmotionsOutlinedIcon />
            </div>

            <div className="Emoji_Picker">
              {emoji ? <Picker set="apple" /> : null}
            </div>
          </div>
          <div className="Input_Comment">
            <input type="text" placeholder="Add a comment..." />
          </div>
          <div className="Post_The_Comment">
            <button>Post</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
