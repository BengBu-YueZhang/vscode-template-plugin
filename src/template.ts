export const JSandVue2 = (name: string = '') => {
    const tpl =
`<template>
  <div>
  </div>
</template>
  
<script>
export default {
  name: ${name},
  
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

export const JSandVue2andClass = (name: string = '') => {
    const tpl =
``;
    
    return tpl;
};

export const TSandVue2 = (name: string = '_') => {
    const tpl =
`<template>
  <div>
  </div>
</template>
    
<script lang="ts">
import Vue from 'vue';
import { Component, Prop } from 'vue-property-decorator';

@Component({
  name: ${name},
})
export default class ${name} extends Vue {
  @Prop({ default: '' }) prop!:string;
  
  private data: string = '';

  private mounted(): void {
  }

  private methods(): void {
  }
}
</script>`;

    return tpl;
};

export const JSandReact = (name: string = '_') => {
    const tpl =
`import React, {useState, useEffect} from 'react';

const ${name} = (props) => {
  const [state, setState] = useState(null);
  
  useEffect(() => {
  }, [])

  return (
    <div></div>
  );
}

export default ${name}`;

    return tpl;
};

export const JSandReactandClass = (name: string = '_') => {
    const tpl =
`import React, { Component } from 'react';

class ${name} extends Component {
  constructor (props) {
    super(props);
    this.state = {
    };
  }

  componentDidMount () {
  }

  render () {
    return (
      <div></div>
    )
  }
}

export default ${name}`;

    return tpl;
};

export const TSandReact = (name: string = '_') => {
  const tpl =
`import React, { useState, useEffect } from 'react';

export interface IProps {
};

const ${name}: React.FC<IProps> = (props: IProps) => {
  
  const [state, setState] = useState(null);

  useEffect(() => {
  }, [])
 
  return (
    <div></div>
  );
};

export default ${name}`;

  return tpl;
};

export const TSandReactandClass = (name: string = '_') => {
    const tpl =
`import * as React from 'react';

export interface IProps {
}

export interface IState {
}

class ${name} extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
    };
  }

  private componentDidMount (): void {
  }

  private render () {
    return (
      <div></div>
    )
  }
}

export default ${name}`;
    
    return tpl;
};

export const TSandVue3 = (name: string = '_') => {
    const tpl =
``;

    return tpl;
};
