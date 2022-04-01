<script setup lang="ts">
const router = useRouter()
const { login } = useStrapiAuth()

const loading = ref(false)
const form = reactive({ identifier: '', password: '' })

const onSubmit = async() => {
  loading.value = true
  try {
    await login(form)

    router.push('/authenticated')
  }
  catch (e) {}
  loading.value = false
}
</script>
<template>
  <div>
    <div pos="relative">
      <div pos="absolute top-0">
        <img
          src="https://images.unsplash.com/photo-1578554700872-ef0e27c46d37?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&amp;ixlib=rb-1.2.1&amp;auto=format&amp;fit=crop&amp;w=2934&amp;q=80"
          alt="Hero Image"
        >
      </div>
    </div>
    <div pt-32>
      <form flex="~ col" space="y-4" border="rounded-lg" bg="opacity-30 light-100" backdrop="blur-sm" m="x-auto" w="4/5 lg:1/4" p="8" @submit.prevent="onSubmit">
        <h1 text="gray-600 xl left" font="extrabold mono">
          Login
        </h1>
        <input v-model="form.identifier" placeholder="Email" type="email" name="email" required p="2" border="rounded-lg gray-300 1">
        <input v-model="form.password" placeholder="Password" type="password" name="password" required p="2" border="rounded-lg gray-300 1">
        <div w="full" flex justify-end>
          <div bg-gradient="from-teal-500 to-dark-600" bg-gradient-to-r p-1 border="rounded-2xl">
            <button type="submit" bg="teal-700" border="rounded-xl" p="2" text="white" font=" thin mono">
              {{ loading ? 'Loading...' : 'Login' }}
            </button>
          </div>
        </div>
      </form>
    </div>
  </div>
</template>
