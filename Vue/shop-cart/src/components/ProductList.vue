<template>
  <div>
      Products
      <ul>
          <li v-for="product in products"
          :key="product.id">
            {{product.title}} - {{product.price}}
          </li>
      </ul>
  </div>
</template>

<script>
import {mapActions,mapState} from 'vuex';

export default {
//   methods:mapActions('cart',['addProductToCart']),    //方法   用户的交互 
//  vue mapState 读  交给computed 计算属性 根据data
    computed:mapState({
        products: state => state.products.all
    }),

  created(){  //生命周期函数
    // products:state.all  //状态不能直接被修改 reducers 才能修改  mutation 才能直接修改状态
    // UI -> dispatch Action -> mutation -> state
    this.$store.dispatch('products/getAllProducts')

  }
}
</script>

<style>

</style>

