<template>
  <div class="input-field">
    <input
      type="text"
      id="id-input"
      @input="$emit('input', $event.target.value)"
    >
      <!-- v-model.trim="testField"
      :class="{invalid: ($v.testField.$dirty && !$v.testField.required)
                      || ($v.testField.$dirty && !$v.testField.minLength)}" -->

    <label for="id-input">label</label>
    <small
      v-if="$v.testField.$dirty && !$v.testField.required"
      class="helper-text invalid"
    >small required</small>
    <small
      v-else-if="$v.testField.$dirty && !$v.testField.minLength"
      class="helper-text invalid"
    >small minLength = {{ testField.length }}</small>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="sass">

</style>
