<script lang="ts">
    import type { User } from './types';
    export let user:User;
</script>

Name: {user.username} <br>
Balance: {user.balance/100} EUR
