<template>
  <div id="app" class="small-container">
    <h1>Teammates</h1>

    <teammate-form @add:teammate="addTeammate" />
    <teammate-table 
      :teammates="teammates" 
      @delete:teammate="deleteTeammate"
      @edit:teammate="editTeammate"
    />
  </div>
</template>

<script>
  import TeammateTable from '@/components/TeammateTable.vue'
  import TeammateForm from '@/components/TeammateForm.vue'

  export default {
    name: 'app',
    components: {
      TeammateTable,
      TeammateForm,
    },
    data() {
      return{
        teammates: [
          {
            id:1 ,
            firstname: 'Aubrey',
            lastname: 'Spannagel',
            email: 'aubreybohn@u.boisestate.edu',
          },
        ],
      }
    },
    methods: {
      addTeammate(teammate) {
        const lastId =
          this.teammates.length > 0
            ? this.teammates[this.teammates.length - 1].id
            : 0;
        const id = lastId + 1;
        const newTeammate = { ...teammate, id };

        this.teammates = [...this.teammates, newTeammate];
      },
      deleteTeammate(id){
        this.teammates = this.teammates.filter(
          teammate => teammate.id !== id
        )
      },
      editTeammate(id, updatedTeammate){
        this.teammates = this.teammates.map(teammate =>
          teammate.id === id ? updatedTeammate : teammate
        )
      }
    },
  }
</script>

<style>
  button {
    background: #009435;
    border: 1px solid #009435;
  }

  .small-container {
    max-width: 680px;
  }
</style>