import { Component, Prop, Ref, Vue, Watch } from 'vue-property-decorator';
import ListVue from '../list-vue/list-vue.vue';

@Component({
  components:{
    ListVue
  }
})

export default class CrudVue extends Vue {
  property: string | undefined;

     beforeCreate() {
     console.log('Không có gì được gọi trước tôi!')
    }
     propertyComputed() {
      console.log('Tôi thay đổi khi this.property thay đổi.')
      return this.property
     }
  

     created() {
      this.property = 'cập nhật property .'
     console.log('propertyComputed sẽ cập nhật, vì this.property hiện đã hoạt động.')
      }
           
  ruleForm = {
    name:'',
    gender:'',
    birthday:'',
    address:''
}
tableData:any[] = []
rules = {
name: [
{ required: true, message: 'Please input full name', trigger: 'blur' },
{ min: 3, max: 255, message: 'Length should be 3 to 255', trigger: 'blur' }
],
gender:[
{ required: true, message: 'Please select gender', trigger: 'change' }
],
birthday:[
{ type: 'date', required: true, message: 'Please pick a date', trigger: 'change' }

],
address:[
{ required: true, message: 'Please input address form', trigger: 'blur' }

]

}
      //Được gọi ngay sau khi tiến trình render function hoàn tất.
      beforeMount() {
      console.log(`this.$el doesn't exist yet, but it will soon!`)
      }
      //Được gọi khi tiến trình replace el hoàn tất.
      mounted() {
        console.log(this.$el.textContent) // I'm text inside the component.
      }
      //Được gọi khi data có sự thay đổi, và trước khi visualDOM re-rendered.
      beforeUpdate() {
        console.log(this.ruleForm) // Logs the ruleForm value every second, before the DOM updates.
      }
       // dười đây có thể chạy thêm created sau khi chayh 
       createupdate(){
         console.log('to do some thing')
       }
       ////

  submitForm () {
    
    const item = {
      id: Math.floor(Math.random()*1000),
      name: this.ruleForm.name,
      gender: this.ruleForm.gender,
      birthday: this.ruleForm.birthday,
      address: this.ruleForm.address
    }

    this.tableData.push(item);
    (this.$refs['ruleForm']as any).resetFields();
  }

  resetForm(ruleForm:any){
    (this.$refs[ruleForm]as any).resetFields();

  }

  handleDelete(id:number) {
    const index = this.tableData.findIndex(x => x.id === id)
    this.tableData.splice(index, 1)
  }

}
