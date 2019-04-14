<template>
  <div>{{ hello }}</div>
</template>

<script>
import { gql } from "apollo-boost";

export default {
  apollo: {
    hello: gql`
      query {
        hello
      }
    `
  }
};
</script>

<style lang="scss" scoped>
.container {
  color: green;
}
</style>