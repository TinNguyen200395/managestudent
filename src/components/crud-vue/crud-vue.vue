<template>

  <div class="form">

    <h1>Student Management</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class=""
    >
    <el-row type="flex"  justify="center">
  <el-col :span="12">
              <el-form-item  label="Full Name :" prop="name">
                   <el-input v-model="ruleForm.name"> </el-input>
             </el-form-item>
    </el-col>
   
     
  </el-row>

  <el-row type="flex"  justify="center" >
     <el-col :span="12">
              <el-form-item label="Gender :" prop="gender">
            <el-radio-group v-model="ruleForm.gender">
              <el-radio label="Male"> </el-radio>
              <el-radio label="Female"> </el-radio>
            </el-radio-group>
          </el-form-item>
    </el-col>
  </el-row>
  
  <el-row type="flex"  justify="center">
<el-col :span="12">
               <el-form-item label="BirthDay :" prop="birthday">
           <el-date-picker
          type="date"
          placeholder="Please choose birthday"
          v-model="ruleForm.birthday"
          style="width: 100%"
         >
            </el-date-picker>
       </el-form-item>
    </el-col>
  </el-row>
  <el-row type="flex"  justify="center">
    
      <el-col :span="12">
                    
       <el-form-item label="Address :" prop="address">
        <el-input type="textarea" v-model="ruleForm.address"> </el-input>
      </el-form-item>
        
    </el-col>
  </el-row>

    <el-row type="flex"  justify="center">

  <el-form-item>
    <el-button type="primary" @click="submitForm('ruleForm')" v-if="!isEdit">Create</el-button>
    <el-button type="primary" @click="submitForm('ruleForm')" v-if="isEdit">Edit</el-button>

    <el-button @click="resetForm('ruleForm')">Reset</el-button>
  </el-form-item>
      
        </el-row>
    

     

    </el-form>
           <ListVue :tableData="tableData" @delete-account="handleDelete" @edit-account="handleEdit"/>

  </div>
</template>

<script src="./crud-vue.ts"></script>
<style src="./crud-vue.css" scoped></style>
