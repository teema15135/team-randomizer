<template>
  <div id="container" class="grid gap-6 h-2/6 lg:w-8/12 md:w-11/12 sm:w-11/12">
    <div
      id="input-container"
      class="bg-white rounded-2xl p-8 w-full h-full sm:col-span-2 shadow-md"
    >
      <textarea
        id="input-names-textarea"
        placeholder="Enter name separate by new line..."
        class="bg-transparent placeholder- text-prussianBlue resize-none overflow-auto focus:outline-none w-full h-full"
        v-model="nameString"
      ></textarea>
    </div>
    <hr
      class="text-articLime border-articLime border-2 rounded-full sm:col-span-2 shadow-md"
    />
    <div class="team-container team-a bg-prussianBlue truncate">
      <h1 class="bold">Team A</h1>
      <hr class="text-white my-2" />
      <ul id="team-a">
        <li class="truncate" v-for="name in nameArray.a" :key="name">
          {{ name }}
        </li>
      </ul>
    </div>
    <div class="team-container team-b bg-bittersweet truncate">
      <h1 class="bold">Team B</h1>
      <hr class="text-white my-2" />
      <ul id="team-b">
        <li class="truncate" v-for="name in nameArray.b" :key="name">
          {{ name }}
        </li>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'

export default Vue.extend({
  data() {
    return {
      nameString: ''
    }
  },
  computed: {
    nameArray: function(): { a: string[]; b: string[] } {
      let totalArray = [...new Set(this.nameString.split('\n'))]
        .filter(value => {
          return value.trim() != ''
        })
        .sort(() => Math.random() - 0.5)
      let half = Math.ceil(totalArray.length / 2)
      return {
        a: totalArray.slice(0, half),
        b: totalArray.slice(half)
      }
    }
  }
})
</script>

<style>
#container {
  @apply min-h-screen mx-auto p-12;
  grid-template-rows: 1fr 1px 1fr;
  grid-template-columns: 1fr 1fr;
}

.team-container {
  @apply px-8 py-6 text-white rounded-2xl shadow-md;
}

#input-names-textarea {
  overflow-x: visible;
  overflow-y: scroll;
}

@media (max-width: 640px) {
  #container {
    grid-template-rows: 1fr 1px 1fr 1fr;
    grid-template-columns: 1fr;
  }
}
</style>
