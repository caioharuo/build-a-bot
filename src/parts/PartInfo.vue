<template>
  <div>
    <h1>{{ part.title }}</h1>
    <div>
      {{ part.description }}
    </div>
  </div>
</template>

<script>
import parts from '../data/parts';

export default {
  name: 'PartInfo',
  props: {
    partType: String,
    id: {
      type: [Number, String],
      validator(value) {
        return Number.isInteger(Number(value));
      },
    },
  },
  computed: {
    part() {
      const { id, partType } = this;

      return parts[partType].find((part) => part.id == Number(id));
    },
  },
};
</script>
