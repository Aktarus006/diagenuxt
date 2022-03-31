<template>
  <section flex="~ col" w="full" overflow="hidden" bg="white" lg="flex-row" sm="mx-auto">
    <div flex="~" justify="end" p="8" lg="py-32 px-16 pl-10 w-1/2">
      <div flex="~ col" w="full" lg="max-w-lg">
        <p display="inline" p="x-2 y-1" m="b-5" font="medium tracking-wider" text="gray-900 uppercase xs" bg="gray-100" border="rounded-full" w="auto">
          Craft and build your website
        </p>
        <h5 m="b-3" text="3xl" font="extrabold leading-none" sm="text-4xl" lg="text-7xl">
          Hello From Diagenode
        </h5>
        <p p="y-5" m="b-5" text="gray-600" lg="text-xl">
          <span font="bold">Our Platform</span> will help you craft and build your next idea. Utilize our
          drag and
          drop components to build the application of your dreams.
        </p>
        <div flex="~" align="items-center" justify="center">
          <button
            type="submit"
            h="12" p="x-6" m="r-6" font="medium tracking-wide" text="white" bg="gray-400" border="rounded-lg" hover="bg-gray-600" focus="shadow-outline outline-light-500" transition="duration-200"
          >
            Get started
          </button>
          <NuxtLink to="/" aria-label="" flex="inline" items-center text="lg gray-600 underline" transition="colors duration-200">
            Learn More
            <svg inline-block w="2" m="l-2" fill="currentColor" viewBox="0 0 12 12">
              <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
            </svg>
          </NuxtLink>
        </div>
      </div>
    </div>
    <div pos="relative" lg="w-1/2">
      <img
        src="https://images.unsplash.com/photo-1578554700872-ef0e27c46d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2934&amp;q=80"
        alt="Hero Image"
        object="cover" w="full" lg="absolute h-full" h="80"
      >
    </div>
  </section>
</template>
