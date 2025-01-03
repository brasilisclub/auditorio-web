<script lang="ts">
  import * as Breadcrumb from "$lib/components/ui/breadcrumb/index.js";
  import { Separator } from "$lib/components/ui/separator/index.js";
  import * as Sidebar from "$lib/components/ui/sidebar/index.js";
</script>

<main>
  <header
    class="flex h-16 shrink-0 items-center justify-between gap-2 border-b px-4"
  >
    <div class="flex items-center gap-2 px-3">
      <Sidebar.Trigger class="mr-4" />
      <Separator orientation="vertical" class="mr-2 h-16" />
      <Breadcrumb.Root>
        <Breadcrumb.List>
          <Breadcrumb.Item>
            <Breadcrumb.Page>Visão Geral</Breadcrumb.Page>
          </Breadcrumb.Item>
        </Breadcrumb.List>
      </Breadcrumb.Root>
    </div>
  </header>
</main>
