<script>
    import { Router } from 'svelte-navigator';
    import Pages from './routes/index.svelte';
</script>

<Router>
    <div id="background">
        <Pages />
    </div>
    <div id="overlay" />
</Router>
