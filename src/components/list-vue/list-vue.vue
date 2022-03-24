<template>
  <div>
    <h1>List Student</h1>
    <el-row type="flex" justify="center">
      <el-col :span="12">
        <el-table ref="tableData" :data="tableData" style="width: 100%">
          <el-table-column prop="id" label="Id" width="180"> </el-table-column>
          <el-table-column prop="name" label="Full Name" width="180">
          </el-table-column>
          <el-table-column prop="gender" label="Gender" width="180">
          </el-table-column>
          <el-table-column prop="" label="BirthDay" width="180" >
            <template slot-scope="scope">
              <span>{{scope.row.birthday | dateFormat('MMMM D, YYYY') }}</span>
            </template>
          </el-table-column>
          <el-table-column prop="address" label="Address"> </el-table-column>
          <el-table-column fixed="right" label="Operations" width="120">
            <template slot-scope="scope">
              <el-button
             @click="clickEdit(scope.row.id)"
                type="primary"
                icon="el-icon-edit"
                circle
              ></el-button>
              <el-button
                @click="clickDelete(scope.row.id)"
                type="danger"
                icon="el-icon-delete"
                circle
              ></el-button>
            </template>
          </el-table-column>
        </el-table>
      </el-col>
    </el-row>
  </div>
</template>
<script src="./list-vue.ts"></script>
<style src="./list-vue.css" scoped></style>
