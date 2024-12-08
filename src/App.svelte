<script>
    import { Router, Route } from 'svelte-routing';
    import Homepage from './lib/pages/Home.svelte';
    import NotFound from './lib/pages/NotFound.svelte';
    import Legals from './lib/pages/Legals.svelte';
    import TermsAndConditions from './lib/pages/TermsAndConditions.svelte';
    import Footer from './lib/shared/Footer.svelte';
    import Tassadapi from './lib/pages/Tassadapi.svelte';
    import TassadapiModels from './lib/tassadapi/TassadapiModels.svelte';
    import TassadapiEndpoints from './lib/tassadapi/TassadapiEndpoints.svelte';

    export let url = '';
</script>

<main class="flex flex-col bg-gray-200 dark:bg-gray-900 min-h-screen min-w-screen">
    <div class="px-3.5 min-h-screen">
        <Router {url}>
            <Route path="/"><Homepage /></Route>
            <Route path="/legals"><Legals /></Route>
            <Route path="/terms-and-conditions"><TermsAndConditions /></Route>
            <Route path="/tassadapi"><Tassadapi /></Route>
            <Route path="/tassadapi/models"><TassadapiModels /></Route>
            <Route path="/tassadapi/end-points"><TassadapiEndpoints /></Route>

            <Route path="*"><NotFound /></Route>
        </Router>
    </div>
    <Footer />
</main>
