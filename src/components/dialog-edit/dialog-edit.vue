<template>
  <div>
    <el-dialog 
    title="CreateDialog" 
    :visible.sync="dialogFormVisible">
      <el-form :model="form">
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item label="Full Name :" prop="name">
            <el-input v-model="form.name"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item label="Gender :" prop="gender">
            <el-radio-group v-model="form.gender">
              <el-radio label="Male"> </el-radio>
              <el-radio label="Female"> </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item label="BirthDay :" prop="birthday">
            <el-date-picker
              type="date"
              placeholder="Please choose birthday"
              v-model="form.birthday"
              style="width: 100%"
            >
            </el-date-picker>
          </el-form-item>
        </el-col>
      </el-row>
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item label="Address :" prop="address">
            <el-input type="textarea" v-model="form.address"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>
      </el-form>
    <span slot="footer" class="dialog-footer">
      <el-button @click="handleCloseDialog">Cancel</el-button>
      <el-button type="primary" @click="onSubmit"
        >Confirm</el-button
      >
    </span>
    </el-dialog>
  </div>
</template>
<script src="./dialog-edit.ts">

</script>
<style scoped></style>
