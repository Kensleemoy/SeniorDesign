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
                    <td>{{ teammate.firstname }}</td>
                    <td>{{ teammate.lastname }}</td>
                    <td>{{ teammate.email }}</td>
                    <td>
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
    }
</script>

<style scoped>
    button{
        margin: 0 0.5rem 0 0;
    }
</style>