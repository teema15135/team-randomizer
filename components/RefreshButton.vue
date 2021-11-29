<template>
  <div class="wrap flex flex-row items-center cursor-pointer">
    <RefreshIcon id="refresh-icon" class="inner w-6 h-6 text-prussianBlue" />
    <a id="refresh-text" class="text-prussianBlue ml-1 ">
      Random again
    </a>
  </div>
</template>

<style>

.wrap:hover > #refresh-icon {
  transform: rotate(-180deg) scale(1.25);
}

.wrap:hover > #refresh-text {
  transform: scale(1.25);
  @apply ml-2;
}

#refresh-text {
  transform-origin: center left;
  user-select: none;
  text-shadow: 0 0 2px #bfd7ea;
}

#refresh-icon {
  filter: drop-shadow(0 0 2px #bfd7ea);
}

#refresh-icon, #refresh-text {
  transition: transform 0.325s, margin-left 0.325s;
}
</style>