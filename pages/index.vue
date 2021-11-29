<template>
  <div
    id="container"
    class="grid gap-6 h-screen max-w-screen-lg xl:w-9/12 lg:w-10/12 md:w-11/12 sm:w-12/12"
  >
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
      class="text-articLime border-articLime border-2 rounded-full sm:col-span-2 shadow-md w-11/12 justify-self-center"
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

const LOCAL_STORAGE_NAME_KEY = 'nameString'

export default Vue.extend({
  data() {
    return {
      nameString: ''
    }
  },
  computed: {
    nameArray: function(): { a: string[]; b: string[] } {
      let totalArray = this.splitToSet(this.nameString)
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
  },
  watch: {
    nameString: function(val) {
      this.setNameStringStorage(
        this.splitToSet(val).filter(value => value.trim() != '').join('\n')
      )
    }
  },
  mounted() {
    this.nameString = this.getNameStringStorage()
  },
  methods: {
    splitToSet: function(str: string): string[] {
      return [...new Set(str.split('\n'))]
    },
    getNameStringStorage: function(): string {
      return localStorage.getItem(LOCAL_STORAGE_NAME_KEY) || ''
    },
    setNameStringStorage: function(val: string) {
      localStorage.setItem(LOCAL_STORAGE_NAME_KEY, val)
    }
  }
})
</script>

<style>
#container {
  @apply min-h-screen mx-auto p-12;
  grid-template-rows: 1fr 1px 1fr;
  grid-template-columns: 1fr 1fr;
  min-width: 24rem;
  min-height: 640px;
}

.team-container {
  @apply px-8 py-6 text-white rounded-2xl shadow-md;
}

#input-names-textarea {
  overflow-x: visible;
  overflow-y: scroll;
}

@media (max-width: 639px) {
  #container {
    grid-template-rows: 1fr 1px 1fr 1fr;
    grid-template-columns: 1fr;
    min-height: 800px;
  }
}
</style>
