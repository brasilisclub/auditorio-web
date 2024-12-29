<script lang="ts">
  import sidebarItems from "./sidebar-items";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import GalleryVerticalEnd from "lucide-svelte/icons/gallery-vertical-end";
  import type { ComponentProps } from "svelte";

  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps}>
  <Sidebar.Header>
    <Sidebar.Menu>
      <Sidebar.MenuItem class="p-2">
        <a href="/">
          <div class="flex flex-col gap-0.5 leading-none">
            <span class="text-3xl font-semibold">Auditório</span>
          </div>
        </a>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.Menu class="gap-2">
        {#each sidebarItems.navMain as mainItem (mainItem.title)}
          <Sidebar.MenuItem>
            <Sidebar.MenuButton class="text-base" size="lg">
              {#snippet child({ props })}
                <div class="flex items-center gap-2">
                  <a href={mainItem.url} {...props}>
                    {#if mainItem.icon}
                      <mainItem.icon class="size-4" />
                    {/if}
                    {mainItem.title}
                  </a>
                </div>
              {/snippet}
            </Sidebar.MenuButton>
          </Sidebar.MenuItem>
        {/each}
      </Sidebar.Menu>
    </Sidebar.Group>
  </Sidebar.Content>
</Sidebar.Root>
