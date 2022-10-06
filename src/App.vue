<script>
export default {
  data(){
    return{
      cities:[
        {name: 'New York', code: 'NY'},
        {name: 'Rome', code: 'RM'},
        {name: 'London', code: 'LDN'},
        {name: 'Istanbul', code: 'IST'},
        {name: 'Paris', code: 'PRS'}
      ]
    }
  }
}
</script>

<template>
  <form>
    <div class="card">

      <div class="field grid">
        <label for="code" class="col-12 mb-2 md:col-2 md:mb-0">Codigo*</label>
        <div class="col-12 md:col-10">
          <InputText id="code"/>
          <Button label="validar" class="btn"></Button>
        </div>
      </div>

      <div class="field grid">
        <label for="name" class="col-12 mb-2 md:col-2 md:mb-0">Nombre*</label>
        <div class="col-12 md:col-10">
          <InputText id="name"/>
        </div>
      </div>

      <div class="field grid">
        <label for="phone" class="col-12 mb-2 md:col-2 md:mb-0">Telefono*</label>
        <div class="col-12 md:col-10">
          <InputMask id="phone" v-model="value" mask="999-999-999"/>
        </div>
      </div>

      <div class="field grid">
        <label for="city" class="col-12 mb-2 md:col-2 md:mb-0">Ciudad*</label>
        <div class="col-12 md:col-10">
          <pv-dropdown :options="cities" optionLabel="name" placeholder="Select a City"></pv-dropdown>
        </div>
      </div>

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
