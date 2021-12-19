<template>

    <Layout>
      <template #header>
        <div class="header"><Header></Header></div>
      </template>
      <template #aside>
        <div class="aside"><Aside></Aside></div>
      </template>
      <template #main>
        <div class="main"></div>
      </template>

      <template #footer>
        <div class="footer"><Footer></Footer></div>
      </template>
    </Layout>
 
</template>
<script>
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Aside from '@/components/Aside';
import Layout from "@/components/Layout";
export default {
  components: {
    Layout,
    Aside,
    Header,
    Footer
  },
};
</script>
<style lang="less" scoped>

</style>