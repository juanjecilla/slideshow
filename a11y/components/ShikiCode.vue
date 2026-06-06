<script setup>
import { ref, onMounted } from 'vue'

const props = defineProps({
  lang: { type: String, default: 'text' },
  code: { type: String, required: true },
  label: { type: String, default: '' },
  style: { type: String, default: '' },
})

const html = ref('')

const commitDarkTheme = {
  name: 'commit-dark',
  type: 'dark',
  colors: {
    'editor.foreground': '#f5f1e8',
    'editor.background': '#16140f',
  },
  tokenColors: [
    {
      scope: ['keyword', 'storage', 'storage.type', 'storage.modifier',
              'keyword.control', 'keyword.operator.new', 'keyword.other'],
      settings: { foreground: '#ff8a6c' },
    },
    {
      scope: ['string', 'string.quoted', 'string.template',
              'punctuation.definition.string'],
      settings: { foreground: '#b9e58b' },
    },
    {
      scope: ['comment', 'punctuation.definition.comment'],
      settings: { foreground: '#a09a8e', fontStyle: 'italic' },
    },
    {
      scope: ['entity.name.type', 'entity.name.class', 'support.type',
              'support.class', 'entity.other.inherited-class'],
      settings: { foreground: '#ffd479' },
    },
    {
      scope: ['constant.numeric', 'constant.language', 'constant.character',
              'variable.language.this', 'variable.language.super'],
      settings: { foreground: '#c4a8ff' },
    },
    {
      scope: ['entity.name.function', 'support.function',
              'meta.function-call entity.name.function', 'variable.function'],
      settings: { foreground: '#7dd3fc' },
    },
    {
      scope: ['punctuation', 'meta.brace', 'keyword.operator',
              'punctuation.separator', 'punctuation.terminator'],
      settings: { foreground: '#a8a29a' },
    },
    {
      scope: ['entity.other.attribute-name', 'meta.attribute'],
      settings: { foreground: '#ffd479' },
    },
    {
      scope: ['variable', 'variable.other', 'variable.parameter'],
      settings: { foreground: '#f5f1e8' },
    },
    {
      scope: ['markup.italic'],
      settings: { fontStyle: 'italic' },
    },
  ],
}

onMounted(async () => {
  try {
    const { codeToHtml } = await import('shiki')
    html.value = await codeToHtml(props.code.trim(), {
      lang: props.lang,
      theme: commitDarkTheme,
    })
  } catch {
    html.value = `<pre style="color:#f5f1e8">${props.code.replace(/</g, '&lt;')}</pre>`
  }
})
</script>

<template>
  <div
    class="code-block shiki-wrap"
    role="region"
    :aria-label="label || `Fragmento de código ${lang}`"
    :style="style"
    v-html="html"
  />
</template>
