<script lang="typescript">
  import Tailwindcss from './Tailwindcss.svelte';
  export let name: string;
</script>

<Tailwindcss />
<main class="p-4 mx-auto text-center max-w-xl">
  <h1 class="text-6xl leading-normal text-svelte">Hello {name}!</h1>
  <p class="custom-style">
    Visit the
    <a href="https://svelte.dev/tutorial" class="text-blue-500 underline"
      >Svelte tutorial</a
    >
    to learn how to build Svelte apps.
  </p>
</main>

<style>
  .custom-style {
    @apply italic;
  }
</style>
