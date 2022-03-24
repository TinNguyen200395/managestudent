import { Component, Emit, Prop, Vue } from "vue-property-decorator";
@Component({
  components: {
  },
})
export default class ListVue extends Vue {
  // prop giúp là truyền dữ liệu đến list
  @Prop() tableData!: any[];


  @Emit("delete-account")
  clickDelete(id: number) {
 
    return id;
  }
  
  @Emit('edit-account')
  clickEdit (id:number) {
     return id
   }

  
}
