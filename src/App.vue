<script>
export default {
  data(){
    return{
      categories:[
        {name: 'Dairy', code: 'DAI'},
        {name: 'Produce', code: 'PRD'},
        {name: 'Meats', code: 'MTS'}
      ]
    }
  }
}
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
        <label for="city" class="col-3 mb-2">{{$t("city")}}*</label>
        <div class="col-9 p-0">
          <pv-dropdown id="city" :options="categories" optionLabel="name" placeholder="Select a Category" class="w-full"></pv-dropdown>
        </div>
      </div>
      <h3>{{$tc("product", 6)}}</h3>
    </div>

  </form>
</template>

<style scoped>
.btn{
  margin:5px 10px;
  color:white;
}

.btn:hover{
  color: indigo;
}
</style>
