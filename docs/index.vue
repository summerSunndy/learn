<template>
  <div class="views pages">
      <aside class="aside-container">
        <ul>
          <li>
            <a v-link="{ path: '/' }">快速上手</a>
          </li>
          <li @click="_parseRoute">
            <h4>组件</h4>
            <ul class="components-list">
                <li class="type-divider">元组件</li>
                <li class="">
                  <a v-link="{ path: '/button' }" :class="{'current': route == 'button'}">button</a>
                  <a v-link="{ path: '/checkbox' }" :class="{'current': route == 'checkbox'}">checkbox</a>
                  <a v-link="{ path: '/radio' }" :class="{'current': route == 'radio'}">radio</a>
                  <a v-link="{ path: '/switch' }" :class="{'current': route == 'switch'}">switch</a>
                  <a v-link="{ path: '/icon' }" :class="{'current': route == 'icon'}">icon</a>
                  <a v-link="{ path: '/select' }" :class="{'current': route == 'select'}">select</a>
                  <a v-link="{ path: '/layout' }" :class="{'current': route == 'layout'}">layout</a>
                </li>

                <li class="type-divider">复合组件</li>
                <li class="">
                  <a v-link="{ path: '/upload' }" :class="{'current': route == 'upload'}">upload</a>
                  <a v-link="{ path: '/poptip' }" :class="{'current': route == 'poptip'}">poptip</a>
                  <a v-link="{ path: '/collapse' }" :class="{'current': route == 'collapse'}">collapse</a>
                  <a v-link="{ path: '/dropdown' }" :class="{'current': route == 'dropdown'}">dropdown</a>
                  <a v-link="{ path: '/tabs' }" :class="{'current': route == 'tabs'}">tabs</a>
                  <a v-link="{ path: '/dialog' }" :class="{'current': route == 'dialog'}">dialog</a>
                  <a v-link="{ path: '/input' }" :class="{'current': route == 'input'}">input</a>
                  <a v-link="{ path: '/steps' }" :class="{'current': route == 'steps'}">steps</a>
                  <a v-link="{ path: '/form' }" :class="{'current': route == 'form'}">form</a>
                  <a v-link="{ path: '/pagination' }" :class="{'current': route == 'pagination'}">pagination</a>
                  <a v-link="{ path: '/table' }" :class="{'current': route == 'table'}">table</a>
                  <a v-link="{ path: '/datetime' }" :class="{'current': route == 'datetime'}">datetime</a>
                  <a v-link="{ path: '/datagrid' }" :class="{'current': route == 'datagrid'}">datagrid</a>
                  <a v-link="{ path: '/combogrid' }" :class="{'current': route == 'combogrid'}">combogrid</a>
                  <a v-link="{ path: '/combox' }" :class="{'current': route == 'combox'}">combox</a>
                </li>
            </ul>
          </li>
        </ul>
      </aside>
      <section class="main-container">
          <div class="markdown">
              <router-view class="view" keep-alive transition="slide"></router-view>
          </div>
      </section>
      <div class="clear"></div>
  </div>
</template>
<script>
  export default {
    replace: false,
    data (){
        return {
            route: '/'
        }
    },
    ready: function () {
        this._parseRoute();
    },

    methods: {
        _parseRoute: function () {
            var self = this;
            setTimeout(function () {
                self.route = self.$route.name;
            }, 0);

        }
    }
  }
</script>
<style media="screen">
.clear{
  clear: both;
}
.code-box .code-box-demo {
    width: 100%;
}
.code-boxes-col-2-1:last-child {
    width: 100%;
    margin-left: -4px;
    margin-bottom: -12px;
}
.code-box pre code {
    background-color: inherit;
    background: #f7f7f7;
    position: relative;
    bottom: -58px;
    padding-top: 28px;
}

.code-box-code pre {
    background: #f7f7f7;
    margin-bottom: 10px;
}

body .markdown pre {
    margin: 1.2em 0;
    padding: 1em;
    background: inherit;
    margin-top: -60px;
}

.code-box h3 {
    margin: 1em;
    font-size: 14px;
}

.code-box .code-box-demo {
    padding: 1.2em 1em;
    border:none
}
</style>
