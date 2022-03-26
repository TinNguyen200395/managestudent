<template>
  <div class="form">
    
    <el-button
      type="primary"
      v-for="entry in languages"
      :key="entry.title"
      @click="changeLocale(entry.language)"
    >
      {{ entry.title }}
    </el-button>
    <h1>{{ $t("crud-vue.manage-student") }}</h1>
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="120px"
      class=""
    >
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item :label="$t('crud-vue.full-name')" prop="name">
            <el-input v-model="ruleForm.name"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item :label="$t('crud-vue.gender')" prop="gender">
            <el-radio-group v-model="ruleForm.gender">
              <el-radio :label="$t('crud-vue.male')"> </el-radio>
              <el-radio :label="$t('crud-vue.female')"> </el-radio>
            </el-radio-group>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item :label="$t('crud-vue.birthday')" prop="birthday">
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
      <el-row type="flex" justify="center">
        <el-col :span="12">
          <el-form-item :label="$t('crud-vue.address')" prop="address">
            <el-input type="textarea" v-model="ruleForm.address"> </el-input>
          </el-form-item>
        </el-col>
      </el-row>

      <el-row type="flex" justify="center">
        <el-form-item>
          <el-button type="primary" @click="submitForm('ruleForm')"
            >{{ $t("crud-vue.create") }}
          </el-button>
          <el-button @click="resetForm('ruleForm')">
            {{ $t("crud-vue.reset") }}
          </el-button>
        </el-form-item>
      </el-row>
    </el-form>
    <ListVue
      :tableData="tableData"
      @delete-account="handleDelete"
      @edit-account="handleEdit"
    />
    <DialogEdit
      ref="dialog"
      :dialogVisible="dialogFormVisible"
      @submit-form="handleSubmitEdit"
    />
  </div>
</template>

<script src="./crud-vue.ts"></script>
<style src="./crud-vue.css" scoped></style>
