<script setup></script>

<template>
  <header class="h-24 mx-auto max-w-screen-xl bg-background z-20">
    <div class="flex items-center justify-between h-16 px-4 sm:px-6 lg:px-8">
      <span class="sr-only">Cabanne des Pyrénées</span>
      <div class="flex items-center">
        <span class="sr-only">List</span>
        <IconList class="h-8 w-auto" />
      </div>
    </div>
  </header>

  <slot />
</template>
