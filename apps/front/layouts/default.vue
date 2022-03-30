<template>
  <div w="7xl" m="x-auto" bg="teal-200" flex="~ row">
    <a href="/">
      <div text="xl crimson" font="bold italic" align="items-center" p="4" flex="~" justify="start">
        diagenode
      </div>
    </a>
    <nav p="4" w="full" space="x-4" align="content-center" justify="end" bg="gray-700" flex="~">
      <akt-MenuLink path-url="/login" color-value="darkcyan">
        Login
      </akt-MenuLink>
      <akt-MenuLink path-url="/register" color-value="crimson">
        Register
      </akt-MenuLink>
      <akt-DarkToggle />
    </nav>
  </div>
  <slot />
</template>
