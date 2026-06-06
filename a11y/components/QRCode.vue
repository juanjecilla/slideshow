<script setup>
import { computed } from 'vue'
import { renderSVG } from 'uqr'

const props = defineProps({
  url: { type: String, required: true },
  size: { type: Number, default: 320 },
  label: { type: String, default: '' },
})

const svg = computed(() =>
  renderSVG(props.url, { border: 2 })
    .replace('<svg ', `<svg width="${props.size}" height="${props.size}" `)
    .replace('fill="white"', 'fill="#f5f1e8"')
    .replace('fill="black"', 'fill="#0a0a0a"')
)
</script>

<template>
  <div
    role="img"
    :aria-label="label || `Código QR para ${url}`"
    v-html="svg"
  />
</template>
