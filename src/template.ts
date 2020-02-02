export const JSandVue2 = (componentName: string = 'PLACEHOLDER') => {
    const tpl =
`<template>
  <div>
  </div>
</template>
  
<script>
export default {
  name: '${componentName}',
  
  props: {
  },
  
  data () {
    return {
    }
  },
  
  mounted () {
  }
  
  methods: {
  }
}
</script>
  
<style scope>
</style>`;

    return tpl;
};

export const JSandVue2andClass = (componentName: string = 'PLACEHOLDER') => {
    const tpl =
`
<template>
  <div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
</script>
`;
    
    return tpl;
};

export const TSandVue2 = (componentName: string = 'PLACEHOLDER') => {
    const tpl =
`
<template>
  <div>
  </div>
</template>
    
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: '${componentName}',
})
export default class ${componentName} extends Vue {
}
</script>
`;

    return tpl;
};

export const JSandReact =
`import React from 'react';`;

export const JSandReactandClass = 
`JSandReactandClass`;

export const TSandReact =
`TSandReact`;

export const TSandReactandClass =
`TSandReactandClass`;

export const TSandVue3 =
`TSandVue3`;
