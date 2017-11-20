<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    
    <hr>
    
     <form @submit.prevent="validateBeforeSubmit">
    <div class="column is-12">
        <label class="label">Email</label>
        <p class="control has-icon has-icon-right">
            <input name="email" v-model="email" v-validate="'required|email'" :class="{'input': true, 'is-danger': errors.has('email') }" type="text" placeholder="Email">
            <i v-show="errors.has('email')" class="fa fa-warning"></i>
            <span v-show="errors.has('email')" class="help is-danger">{{ errors.first('email') }}</span>
        </p>
    </div>
    <div class="column is-12">
        <label class="label">Name</label>
        <p class="control has-icon has-icon-right">
            <input name="name" v-model="name" v-validate="'required|alpha'" :class="{'input': true, 'is-danger': errors.has('name') }" type="text" placeholder="Name">
            <i v-show="errors.has('name')" class="fa fa-warning"></i>
            <span v-show="errors.has('name')" class="help is-danger">{{ errors.first('name') }}</span>
        </p>
    </div>
    <div class="column is-12">
        <label class="label">Phone</label>
        <p class="control has-icon has-icon-right">
            <input name="phone" v-model="phone" v-validate="'required|numeric'" :class="{'input': true, 'is-danger': errors.has('phone') }" type="text" placeholder="Phone">
            <i v-show="errors.has('phone')" class="fa fa-warning"></i>
            <span v-show="errors.has('phone')" class="help is-danger">{{ errors.first('phone') }}</span>
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
  name: 'DemoForm',
  data: () => ({
    email: '',
    name: '',
    phone: '',
    msg:'Form Example'
  }),
  methods: {
    validateBeforeSubmit() {
      this.$validator.validateAll().then((result) => {
        if (result) {
         
         this.$http.post('/videos', {
                    email: this.email,
                    name: this.name,
                    phone: this.phone
                }).then((response)=>{
                    console.log(response.json());
                });

        

                alert('From Submitted!');
      
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
