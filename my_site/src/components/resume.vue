<template>
	<div>
        <p>Hi!!!</p>
		{{currentPage}} / {{pageCount}}
		<pdf
			src="../assets/RESUME.pdf"
			@num-pages="pageCount = $event"
			@page-loaded="currentPage = $event"
		></pdf>
	</div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'resume',
  data() {
		return {
			currentPage: 0,
			pageCount: 0,
		}
	}
}
</script>