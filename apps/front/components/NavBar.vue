<script setup lang="ts">

const user = useStrapiUser()
const router = useRouter()

const { logout } = useStrapiAuth()

const onLogout = async() => {
  try {
    await logout()
    router.push('/')
  }
  catch (e) {}
}
</script>

<template>
  <header p="4" w="full" flex pos="absolute top-0" z="50" bg="transparent">
    <NuxtLink to="/" display="block">
      <div text="xl crimson" font="bold italic" p="4">
        diagenode
      </div>
    </NuxtLink>
    <div flex="1" />
    <div v-if="!user">
      <nav space="x-2" flex="~">
        <akt-MenuLink path-url="/login" color-value="darkcyan">
          Login
        </akt-MenuLink>
        <akt-MenuLink path-url="/register" color-value="crimson">
          Register
        </akt-MenuLink>
        <akt-DarkToggle />
      </nav>
    </div>
    <div v-else>
      <nav space="x-2" flex="~">
        <akt-MenuLink path-url="/profile" color-value="crimson">
          {{ user.username }}
        </akt-MenuLink>
        <akt-MenuLink color-value="crimson" @click="onLogout">
          Logout
        </akt-MenuLink>
        <akt-DarkToggle />
      </nav>
    </div>
  </header>
</template>
