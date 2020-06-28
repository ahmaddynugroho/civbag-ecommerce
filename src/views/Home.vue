<template>
  <div class="home">
    <router-link to="/chart">Chart: {{chartLength}}</router-link>
    <ol>
      <li v-for="g in goods" :key="g.title">
        {{ g.title }} ${{ g.price }}<button @click="addToChart(g)">add to chart</button>
      </li>
    </ol>
  </div>
</template>

<script>
export default {
  name: 'Home',
  data() {
    return {
      goods: this.$store.state.goods,
    }
  },
  methods: {
    addToChart(good) {
      this.$store.state.chart.push(good)
      this.$store.state.chartTotal += parseInt(good.price)
    }
  },
  computed: {
    chartLength() {
      return this.$store.state.chart.length
    }
  },
  watch: {
    chartLength() {
      return this.$store.state.chart.length
    }
  }
}
</script>
