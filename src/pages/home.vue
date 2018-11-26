<template>
  <div>
    <Head></Head>
    <Nav></Nav>
    <div class="container_wrap">
    	<router-view />
    </div>
    
  </div>
</template>
<script>
import Head from '../components/common/header'
import Nav from '../components/common/nav'
export default {
  components: {
    Head,
    Nav,
  }
}

</script>
<style>
	

	.container_wrap{
		position: absolute;
		top: 52px;
		left: 240px;
		width: 83%;
		/* background: #ccc; */
	}
</style>
