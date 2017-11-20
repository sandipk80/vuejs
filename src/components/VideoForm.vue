<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <hr>
    <div v-if="videoUrl">
     
      <!--video width="400" controls>
        <source :src="videoUrl">
      </video-->
      <p><youtube :video-id="videoUrl"></youtube></p>
      <p> {{ videoUrl }}</p>
    
</div>

    <form @submit.prevent="validateBeforeSubmit">
    <div class="column is-12">
        <label class="label">Video URL</label>
        <p class="control has-icon has-icon-right">
            <input name="url" v-model="url" v-validate="'required'" :class="{'input': true, 'is-danger': errors.has('url') }" type="text" placeholder="URL">
            <i v-show="errors.has('url')" class="fa fa-warning"></i>
            <span v-show="errors.has('url')" class="help is-danger">{{ errors.first('url') }}</span>
        </p>
    </div>
    

    <div class="column is-12">
        <p class="control" >
            <button class="button is-primary" type="submit">Submit</button>
            <a href="/" class="button is-primary">Back</a>
        </p>
    </div>
</form>
 
  </div>
</template>

<script>
export default {
  name: 'VideoForm',
  data: () => ({
    url: '',
    msg:'Video Form Example',
    videoUrl:''
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
         
                this.videoUrl = this.url;

                //alert('From Submitted!'+this.url);
      
          return;
        }

        alert('Correct them errors!');
      });
    }
  }
 
};


</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
.message{color: red;text-align:left;}
.label{float:left}
.is-danger{text-align:left;color:red;width: 100%;float: left;}
input[type=text],[type=email] {
    width: 100%;
    padding: 12px 20px;
    margin: 8px 0;
    box-sizing: border-box;
}
.button{padding:10px;float: left;}
</style>
