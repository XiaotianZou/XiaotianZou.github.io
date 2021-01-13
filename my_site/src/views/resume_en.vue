<template>
	<div>
    <p>
      hi
    </p>
		<pdf
            ref="pdf"
            v-for="i in numPages" 
            :key="i"  
            :src="url" 
            :page="i"
      ></pdf>
	</div>
</template>

<script>
import pdf from 'vue-pdf'
export default {
  name: 'resume_en',
  components: {
      pdf
  },
  data() {
		return {
            url: "https://arxiv.org/pdf/1706.03762.pdf",
            numPages: null,
		}
    },
    mounted() {
      this.getNumPages()
  },
  methods: {
    getNumPages() {
      let loadingTask = pdf.createLoadingTask(this.url)
      loadingTask.promise.then(pdf => {
        this.numPages = pdf.numPages
      }).catch(err => {
        console.error('pdf 加载失败', err);
      })
    },
  }
}

</script>