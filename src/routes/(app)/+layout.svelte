<script lang="ts">
  import "../../app.css";
  import AppSidebar from "$lib/components/app/sidebar/sidebar.svelte";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";

  let { children } = $props();
</script>

<Sidebar.Provider style="--sidebar-width: 19rem;">
  <AppSidebar />
  <Sidebar.Inset>
    {@render children()}
  </Sidebar.Inset>
</Sidebar.Provider>
