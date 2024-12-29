<script lang="ts">
  import { Button } from "$lib/components/ui/button/index.js";
  import * as Card from "$lib/components/ui/card/index.js";
  import { Input } from "$lib/components/ui/input/index.js";
  import { Label } from "$lib/components/ui/label/index.js";
</script>

<Card.Root class="mx-auto max-w-sm w-full">
  <Card.Header>
    <Card.Title class="text-2xl">Entre no Auditório</Card.Title>
    <Card.Description
      >Insira o seu e-mail abaixo para entrar na sua conta.</Card.Description
    >
  </Card.Header>
  <Card.Content>
    <div class="grid gap-4">
      <div class="grid gap-2">
        <Label for="email">E-mail</Label>
        <Input id="email" type="email" placeholder="m@example.com" required />
      </div>
      <div class="grid gap-2">
        <div class="flex items-center">
          <Label for="password">Senha</Label>
          <a
            href="/reset-password"
            class="ml-auto inline-block text-sm underline"
          >
            Esqueceu a senha?
          </a>
        </div>
        <Input id="password" type="password" required />
      </div>
      <Button type="submit" class="w-full">Entrar</Button>
      <Button variant="outline" class="w-full">Continuar com a Apple</Button>
      <Button variant="outline" class="w-full">Continuar com o Google</Button>
    </div>
    <div class="mt-4 text-center text-sm">
      Ainda não possui uma conta?
      <a href="/signup" class="underline"> Cadastrar-se </a>
    </div>
  </Card.Content>
</Card.Root>
