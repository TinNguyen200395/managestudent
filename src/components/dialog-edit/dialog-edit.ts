import { Component, Emit, Vue } from "vue-property-decorator";
@Component({})
export default class DialogEdit extends Vue {
    
  dialogFormVisible: boolean = false;
  
  form = {
    id: Math.floor(Math.random() * 1000),
    name:'',
    gender:'',
    birthday:'',
    address:''
  
  };

  
  handleCloseDialog () {
    this.dialogFormVisible = false
  }

  @Emit('submit-form')
  onSubmit () {
    this.dialogFormVisible = false
    return this.form
  }
}
