# Vocabulary

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{post.title}}</a>
  </li>
</ul>

<script setup>
  import { data } from './vocabulary.data.js'
  const r = /\/vocabulary\/chapter(\d+)\.html/
  const posts = data.filter(t => t.url.includes('chapter')).map(i => ({title: `chapter${i.url.match(r)[1]}`, url: i.url}))
</script>