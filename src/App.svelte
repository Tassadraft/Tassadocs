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
    import Language from './lib/tassadapi/models/Language.svelte';
    import { isLoading } from 'svelte-i18n';
    import Loader from './lib/shared/Loader.svelte';
    import Build from './lib/tassadapi/models/Build.svelte';
    import Category from './lib/tassadapi/models/Category.svelte';
    import File from './lib/tassadapi/models/File.svelte';
    import Set from './lib/tassadapi/models/Set.svelte';
    import Card from './lib/tassadapi/models/Card.svelte';
    import CardLegality from './lib/tassadapi/models/CardLegality.svelte';
    import CardLight from './lib/tassadapi/models/CardLight.svelte';

    export let url = '';
</script>

<main class="flex flex-col bg-gray-200 dark:bg-gray-900 min-h-screen min-w-screen">
    <div class="px-3.5 min-h-screen">
        {#if !$isLoading}
            <Router {url}>
                <Route path="/"><Homepage /></Route>
                <Route path="/legals"><Legals /></Route>
                <Route path="/terms-and-conditions"><TermsAndConditions /></Route>
                <Route path="/tassadapi"><Tassadapi /></Route>
                <Route path="/tassadapi/end-points"><TassadapiEndpoints /></Route>

                <Route path="/tassadapi/models"><TassadapiModels /></Route>
                <Route path="/tassadapi/models/language"><Language /></Route>
                <Route path="/tassadapi/models/build"><Build /></Route>
                <Route path="/tassadapi/models/category"><Category /></Route>
                <Route path="/tassadapi/models/file"><File /></Route>
                <Route path="/tassadapi/models/set"><Set /></Route>
                <Route path="/tassadapi/models/card-legality"><CardLegality /></Route>
                <Route path="/tassadapi/models/card"><Card /></Route>
                <Route path="/tassadapi/models/card-light"><CardLight /></Route>

                <Route path="*"><NotFound /></Route>
            </Router>
        {:else}
            <Loader loading={true} />
        {/if}
    </div>
    <Footer />
</main>
