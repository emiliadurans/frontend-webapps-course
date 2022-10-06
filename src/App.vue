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
    <label for="code">Codigo*</label>
    <InputText id="code"/>
    <Button label="validar"></Button>

    <label for="name">Nombre*</label>
    <InputText id="name"/>

    <label for="phone">Telefono*</label>
    <InputMask id="phone" v-model="value" mask="999-999-999"/>

    <label for="city">Ciudad*</label>
    <pv-dropdown :options="cities" optionLabel="name" placeholder="Select a City"></pv-dropdown>

  </form>
</template>

<style scoped>

</style>
