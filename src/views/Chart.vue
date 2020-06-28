<template>
  <div class="chart">
    <h1>Chart</h1>
    <p>total: {{ chartTotal }}</p>
    <ol>
      <li v-for="(g, i) in chart" :key="i">
        {{ g.title }} ${{ g.price }}
        <button @click="cancelGood(i)">Cancel</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Chart',
  data() {
    return {}
  },
  methods: {
    cancelGood(index) {
      this.$store.state.chartTotal -= this.$store.state.chart[index].price
      this.$store.state.chart = this.$store.state.chart.filter(
        (g, i) => i != index
      )
    },
  },
  computed: {
    chart() {
      return this.$store.state.chart
    },
    chartTotal() {
      return this.$store.state.chartTotal
    }
  },
  watch: {
    chart() {
      return this.$store.state.chart
    },
    chartTotal() {
      return this.$store.state.chartTotal
    },
  },
}
</script>
