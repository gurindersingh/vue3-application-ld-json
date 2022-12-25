# Create application/ld+json tag in vue3

## Usage
```js
<script setup>
import JsonLd from '@gurinder/vue3-application-ld-json'
</script>

<template>
  <div>
    <JsonLd :json="JSON.stringify({foo: 'bar'})"/>
  </div>
</template>
```