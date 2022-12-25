<script setup>
import JsonLd from './index';

</script>

<template>
  <div>
    <JsonLd :json="JSON.stringify({foo: 'bar'})"/>
  </div>
</template>