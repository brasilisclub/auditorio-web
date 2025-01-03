<script lang="ts">
  import sidebarItems from "./sidebar-items";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
  import * as DropdownMenu from "$lib/components/ui/dropdown-menu/index.js";
  import type { ComponentProps } from "svelte";
  import { LogOut, Settings, ChevronsUpDown } from "lucide-svelte";
  let {
    ref = $bindable(null),
    ...restProps
  }: ComponentProps<typeof Sidebar.Root> = $props();
</script>

<Sidebar.Root {...restProps}>
  <Sidebar.Header class="h-16 border-b">
    <Sidebar.Menu class="h-full flex justify-center">
      <Sidebar.MenuItem class="px-2">
        <DropdownMenu.Root>
          <DropdownMenu.Trigger>
            {#snippet child({ props })}
              <Sidebar.MenuButton
                {...props}
                class="border data-[state=open]:bg-sidebar-accent data-[state=open]:text-sidebar-accent-foreground"
              >
                <span class="flex gap-2">
                  <img src="/logo.svg" alt="Logo" width="20" />
                  Brasilis Club
                </span>
                <ChevronsUpDown class="ml-auto" />
              </Sidebar.MenuButton>
            {/snippet}
          </DropdownMenu.Trigger>
          <DropdownMenu.Content
            side="top"
            class="w-[--bits-dropdown-menu-anchor-width]"
          >
            {#each sidebarItems.options as option (option.title)}
              <DropdownMenu.Item>
                <a href={option.url} class="flex gap-2 items-center">
                  <option.icon class="size-4" />
                  {option.title}
                </a>
              </DropdownMenu.Item>
            {/each}
          </DropdownMenu.Content>
        </DropdownMenu.Root>
      </Sidebar.MenuItem>
    </Sidebar.Menu>
  </Sidebar.Header>
  <Sidebar.Content>
    <Sidebar.Group>
      <Sidebar.Menu class="gap-2">
        {#each sidebarItems.navigation as navItem (navItem.title)}
          <Sidebar.MenuItem>
            <Sidebar.MenuButton>
              {#snippet child({ props })}
                <div class="flex items-center gap-2">
                  <a href={navItem.url} {...props}>
                    {#if navItem.icon}
                      <navItem.icon class="size-4" />
                    {/if}
                    {navItem.title}
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
