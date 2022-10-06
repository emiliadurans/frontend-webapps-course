<script>
import {CommentsServices} from "./services/comments-services";

export default {
  data(){
    return{
      value:"",
      comments: [],
      body:"",
      postId:"",
      commentId:"",
      categories:[
        {name: 'Dairy', code: 'DAI'},
        {name: 'Produce', code: 'PRD'},
        {name: 'Meats', code: 'MTS'}
      ],
    };
  },
  created() {
    new CommentsServices().getComments()
        .then(response =>{
          console.log("calling API")
          console.log(response.status)
          console.log(response.data)
          this.comments=response.data;
        })
  },
  methods: {
    createComment: function() {
      new CommentsServices().postComment(this.body, this.postId)
          .then(response => {
            console.log("postComment", response)
          })
    },
    deleteComment: function (){
      new CommentsServices().deleteComment(this.commentId)
          .then( response => {
            console.log("deleteComment", response)
          })
    },
    putComment: function (){
      new CommentsServices().putComment(this.commentId, this.body, this.postId)
          .then( response => {
            console.log("putComment", response)
          })
    }
  }
};
</script>

<template>
  <form>
    <div class="card">
      <h1>{{$t("greeting", {name: "Emilia"})}}</h1>
      <div class="field grid">
        <label for="code" class="col-3 mb-2">{{$t("code")}}*</label>
        <div class="col-7 p-0">
          <InputText id="code"/>
        </div>
        <div class="col-2">
          <Button label="validar" class="btn"></Button>
        </div>
      </div>

      <div class="field grid">
        <label for="name" class="col-3 mb-2">{{$t("name")}}*</label>
        <div class="9">
          <InputText id="name" class="w-full"/>
        </div>
      </div>

      <div class="field grid">
        <label for="phone" class="col-3 mb-2">{{$t("phone")}}*</label>
        <div class="9">
          <InputMask id="phone" v-model="value" mask="999-999-999" class="w-full"/>
        </div>
      </div>

      <div class="field grid">
        <label for="category" class="col-3 mb-2">{{$t("category")}}*</label>
        <div class="col-9 p-0">
          <pv-dropdown id="category" :options="categories" optionLabel="name" placeholder="Select a Category" class="w-full"></pv-dropdown>
        </div>
      </div>
      <h3>{{$tc("product", 6)}}</h3>

      <div class="field grid">
        <label for="comment" class="col-3 mb-2">{{$t("comment")}}*</label>
        <div class="col-9 p-0">
          <pv-dropdown id="comment" :options="comments" optionLabel="body" placeholder="Select a Comment" class="w-full"></pv-dropdown>
        </div>
      </div>

      <h2>Comments</h2>
      <div class="field grid">
        <label for="commentBody" class="col-3 mb-2">{{$t("commentBody")}}*</label>
        <div class="col-7 p-0">
          <InputText id="commentBody"  v-model="body"/>
        </div>
      </div>

      <div class="field grid">
        <label for="postId" class="col-3 mb-2">Post ID</label>
        <div class="col-7 p-0">
          <InputText id="postId"  v-model="postId"/>
        </div>
        <div class="col-2">
          <Button @click="createComment" aria-label="Comment" class="btn">{{$t("postear")}}</Button>
        </div>
      </div>

      <div class="field grid">
        <label for="commentId" class="col-3 mb-2">Delete ID</label>
        <div class="col-7 p-0">
          <InputText id="commentId"  v-model="commentId"/>
        </div>
        <div class="col-2">
          <Button @click="deleteComment" aria-label="Delete Comment" class="btn">{{$t("delete")}}</Button>
        </div>
      </div>
      <Button @click="putComment" aria-label="Update Comment">{{$t("update")}}</Button>

    </div>
  </form>
</template>

<style scoped>

Button {
 color:white;
}

.btn{
  margin:5px 10px;
  color:white;
}

.btn:hover{
  color: indigo;
}

.card h3{
  margin-top: 30px;
}

.card h2{
  margin-bottom: 10px;
}
</style>
