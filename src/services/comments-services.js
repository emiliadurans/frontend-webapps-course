import axios from "axios";
export class CommentsServices{
    getComments = () => {
        return axios.get("http://localhost:3000/comments")
    }

    postComment = (body, postId) => {
        return axios.post("http://localhost:3000/comments",
            {
                "postId":postId,
                "body": body
            }
        )
    }

    deleteComment(id) {
        return axios.delete("http://localhost:3000/comments/" + id);
    }

    putComment(id, body, postId) {
        return axios.put("http://localhost:3000/comments/" + id,
            {
            "postId":postId,
            "body": body
        });
    }
}