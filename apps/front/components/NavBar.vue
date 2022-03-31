<template>
  <header p="4" w="full" pos="absolute top" z="50" flex="~">
    <a href="/" display="block">
      <div text="xl crimson" font="bold italic" p="4">
        diagenode
      </div>
    </a>
    <div flex="1" />
    <nav space="x-2" flex="~">
      <akt-MenuLink path-url="/login" color-value="darkcyan">
        Login
      </akt-MenuLink>
      <akt-MenuLink path-url="/register" color-value="crimson">
        Register
      </akt-MenuLink>
      <akt-DarkToggle />
    </nav>
  </header>
</template>
