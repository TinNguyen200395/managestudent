import { Component, Emit, Prop, Ref, Vue, Watch } from 'vue-property-decorator';

@Component
export default class ListVue extends Vue{
    // prop giúp là truyền dữ liệu đến list
    @Prop() tableData!:any[]
    // 

   
  
  
  @Emit('delete-account')
  clickDelete(id:number){
    // for ( let i = 0 ; i<this.tableData.length; i++)
    // {
    //   if(item.id === this.tableData[i].id)
    //   {
    //       this.tableData.splice(i,1)
    //   }
    // }
    return id
  }

  @Emit('edit-account')
  clickEdit(item:any){
    // for ( let i = 0 ; i<this.tableData.length; i++)
    // {
    //   if(item.id === this.tableData[i].id)
    //   {
    //       this.tableData.splice(i,1)
    //   }
    // }
    return item
  }

}

