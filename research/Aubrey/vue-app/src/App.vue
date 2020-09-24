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
  import mockData from '@/components/MOCK_DATA.json'

  export default {
    name: 'app',
    components: {
      TeammateTable,
      TeammateForm,
    },
    data() {
      return{
        teammates: mockData,
      }
    },

    mounted(){
      this.getTeammates()
    },

    methods: {
      addTeammate(teammate) {
        try {
          const data = mockData
          this.teammates = [...teammate, data]

        } catch (error) {
          console.error(error)
        }
      },

      deleteTeammate(id){
        this.teammates = this.teammates.filter(
          teammate => teammate.id !== id
        )
      },

      editTeammate(id, updatedTeammate){
        try {
          this.teammates = this.teammates.map(teammate =>
          (teammate.id === id ? updatedTeammate : teammate))
        } catch (error) {
          console.error(error)
        }
      },
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