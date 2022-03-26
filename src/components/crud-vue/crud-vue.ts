import { Component, Prop, Ref, Vue, Watch } from "vue-property-decorator";
import ListVue from "../list-vue/list-vue.vue";
import DialogEdit from "../dialog-edit/dialog-edit.vue";
import i18n from "@/i18n";



@Component({
  components: {
    ListVue,
    DialogEdit,
  
  },
})
export default class CrudVue extends Vue {
  
  // references từ dialog đến crud
  @Ref("dialog") readonly refDialog!: DialogEdit;

  languages= [
    {  language: 'en', title: 'English' },
    {  language: 'vi', title: 'VietNam' }

 ]
 
  dialogFormVisible = false;

  ruleForm = {
    id: Math.floor(Math.random() * 1000),
    name: "",
    gender: "",
    birthday: "",
    address: "",
  };
  tableData: any[] = [];
  rules = {
    name: [
      { required: true, message: "Please input full name", trigger: "blur" },
      {
        min: 3,
        max: 255,
        message: "Length should be 3 to 255",
        trigger: "blur",
      },
    ],
    gender: [
      { required: true, message: "Please select gender", trigger: "change" },
    ],
    birthday: [
      {
        type: "date",
        required: true,
        message: "Please pick a date",
        trigger: "change",
      },
    ],
    address: [
      { required: true, message: "Please input address form", trigger: "blur" },
    ],
  };
  changeLocale(locale:string) {
    i18n.locale = locale;
}
  // submitForm() {
  //   const item = {
  //     id: Math.floor(Math.random() * 1000),
  //     name: this.ruleForm.name,
  //     gender: this.ruleForm.gender,
  //     birthday: this.ruleForm.birthday,
  //     address: this.ruleForm.address,
  //   };

  //   this.tableData.push(item);
  //   (this.$refs["ruleForm"] as any).resetFields();
  // }
  submitForm(ruleForm: any) {
    (this.$refs[ruleForm] as any).validate((valid: any) => {
      if (valid) {
        const item = {
          id: Math.floor(Math.random() * 1000),
          name: this.ruleForm.name,
          gender: this.ruleForm.gender,
          birthday: this.ruleForm.birthday,
          address: this.ruleForm.address,
        };
        console.log(item)
        this.tableData.push(item);
        (this.$refs["ruleForm"] as any).resetFields();
      } else {
        console.log("error submit!!");
        return false;
      }
    });
  }
  resetForm(ruleForm: any) {
    (this.$refs[ruleForm] as any).resetFields();
  }

  handleDelete(id: number) {
    const index = this.tableData.findIndex((x) => x.id === id);
    this.tableData.splice(index, 1);
  }

  handleEdit(id: number) {
    const item = this.tableData.find(x => x.id === id);
   
    (this.refDialog as any).dialogFormVisible = true;
  }
  handleCloseDialog(visible: boolean) {
    this.dialogFormVisible = visible;
  }
  handleSubmitEdit(item: any) {}
  
}
