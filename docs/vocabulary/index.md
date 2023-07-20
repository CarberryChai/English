# Vocabulary

<ul>
  <li v-for="post of posts">
    <a :href="post.url">{{post.title}}</a>
  </li>
</ul>

<script setup>
  import { data } from './vocabulary.data.js'
  const r = /^\/vocabulary\/(\w+)\./
  const posts = data.map(i => ({title: `${i.url.match(r)[1]}`, url: i.url})).filter(t => t.title !== 'index')
</script>