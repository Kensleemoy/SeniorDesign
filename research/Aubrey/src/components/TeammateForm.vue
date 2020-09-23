<template>
    <div id="teammate-form">
        <form @submit.prevent="handleSubmit">
            <label> Teammate First Name </label>
            <input 
                ref="first"
                :class="{ 'has-error': submitting && invalidName }"
                v-model="teammate.firstname" 
                type="text" 
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label> Teammate Last Name </label>
            <input 
                :class="{ 'has-error': submitting && invalidName }"
                v-model="teammate.lastname" 
                type="text" 
                @focus="clearStatus"
                @keypress="clearStatus"
            />
            <label> Teammate Email </label>
            <input 
                v-model="teammate.email" 
                type="text" 
                :class="{ 'has-error': submitting && invalidEmail }"
                @focus="clearStatus"
            />
            <p v-if="error && submitting" class="error=message">
                Please fill out all required fields
            </p>
            <p v-if="success" class="success-message"> Employee successfully added </p>
            <button>Add Teammate</button>
        </form>
    </div>
</template>

<script>
export default {
    name: 'teammate-form',
    data() {
        return {
            submitting: false,
            error: false,
            success: false,
            teammate: {
                firstname: '',
                lastname: '',
                email: '',
            },
        }
    },
    methods:{
        handleSubmit() {
            this.submitting = true
            this.clearStatus()

            if(this.invalidName || this.invalidEmail){
                this.error = true
                return
            }

            this.$emit('add:teammate', this.teammate)
            this.$refs.first.focus()

            this.teammate = {
                name: '',
                email: '',
            }
            this.error = false
            this.success = true
            this.submitting = false
        },

        clearStatus() {
            this.success = false
            this.error - false
        }
    },
    computed: {
        invalidFirstName(){
            return this.teammate.firstname === ''
        },
        invalidLastName(){
            return this.teammate.lastname === ''
        },
        invalidEmail(){
            return this.teammate.email === ''
        },
    },
}
</script>

<style scoped>
  form {
    margin-bottom: 2rem;
  }

  [class*='-message']{
      font-weight: 500;
  }

  .error-message {
      color: #d33c40;
  }

  .success-message {
      color: #32a95d;
  }

</style>