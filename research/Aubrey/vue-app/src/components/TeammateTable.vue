<template>
    <div id="teammate-table">
        <p v-if="teammates.length < 1" class="empty-table"> No Teammates</p>
        <table v-else>
            <thead>
                <tr>
                    <th>Teammate Firstname</th>
                    <th>Teammate Lastname</th>
                    <th>Teammate Email</th>
                    <th> Actions </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="teammate in teammates" :key="teammate.id">
                    <td v-if="editing === teammate.id">
                        <input type="text" v-model="teammate.firstname"/>
                    </td>
                    <td v-else>{{ teammate.firstname }}</td>
                     <td v-if="editing === teammate.id">
                        <input type="text" v-model="teammate.lastname"/>
                    </td>
                    <td v-else>{{ teammate.lastname }}</td>
                     <td v-if="editing === teammate.id">
                        <input type="text" v-model="teammate.email"/>
                    </td>
                    <td v-else>{{ teammate.email }}</td>
                    <td v-if="editing === teammate.id">
                        <button @click="editTeammate(teammate)">Save</button>
                        <button @click="editing = null" class="muted-button">Cancel</button>
                    </td>
                    <td v-else>
                        <button @click="editMode(teammate.id)">Edit</button>
                        <button @click="$emit('delete:teammate', teammate.id)">Delete</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>    
</template>>

<script>
    export default {
        name: 'teammate-table',
        props: {
            teammates: Array,
        },
        data() {
            return{
                editing: null,
            }
        },
        methods: {
            editMode(id){
                this.cachedTeammate = Object.assign({}, this.teammate)
                this.editing = id
            },

            cancelEdit(teammate){
                Object.assign(teammate, this.cachedTeammate)
                this.editing = null;
            },

            editTeammate(teammate){
                if(teammate.firstname === '' || teammate.lastname === '' || teammate.email === '') return
                this.$emit('edit:teammate', teammate.id, teammate)
                this.editing = null
            },
        }
    }
</script>

<style scoped>
    button{
        margin: 0 0.5rem 0 0;
    }
</style>