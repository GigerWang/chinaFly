<template>
	<div class="box">
   <group class="write-input">
          <input ref="input" type="number" maxlength="6"
                 class="realInput" v-model="photoNum"
                 @keyup="getNum()" @keydown="delNum()">
          <li v-for="(disInput, index) of disInputs" :key="index"
              :class="{'input-active': photoNum.length === index || photoNum.length > index || index === 0}">
            <input maxlength="1" disabled v-model="disInput.value">
          </li>
          <div class="invite__tip" v-if="showTip">{{tipContent}}</div>
        </group>

	</div>
</template>

<script>
export default {
  data () {
    return {
      haha:'我是变动的',
      index: 0,
      array: ['A', 'B', 'C']
    }
  },
  methods: {
    delNum () {    // 删除
        let oEvent = window.event
        if (oEvent.keyCode === 8) {
          if (this.photoNum.length > 0) {
            this.disInputs[this.photoNum.length - 1].value = ''
          }
        }
      },
      getNum () {   // 输入
        for (var i = 0; i < this.photoNum.length; i++) {
          this.disInputs[i].value = this.photoNum.charAt(i)
        }
      }

  }
  }
</script>

<style>
	.write-input {
      position: relative;
      display: flex;
    }
    .vux-no-group-title {
        padding-bottom: 1rem;
      }
      li {
        display: inline-block;
        width: 1.75rem;
        height: 1.85rem;
        border: .04rem solid #E7E7E7;
        border-radius: .25rem;
        list-style-type: none;
        line-height: 1 !important;
        min-height: 1.85rem !important;
        margin: 0 .11rem;
      }
              input {
          -webkit-appearance: none;
          -moz-appearance: none;
          -ms-appearance: none;
          resize: none;
          outline: none;
          border: 0;
          padding: .5rem 0;
          width: 1.67rem;
          border-radius: .25rem;
          text-align: center;
          font-size: 16px;
          background: none !important;
        }
      .realInput {
        -webkit-appearance: none;
        -moz-appearance: none;
        -ms-appearance: none;
        resize: none;
        outline: none;
        border: 0;
        z-index: 50;
        position: absolute;
        padding: .61rem 0;
        background: none;
        display: block;
        margin-left: -30%;
        top: 34px;
        opacity: 0;
        caret-color: #fff;
        color: #000;
        text-indent: -5rem;
        font-size: .63rem;
        width: 150%;
        top: 1px;
      }
</style>
