<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.subscribed.title')} description={$t('tassadapi.end-points.subscribed.description')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.subscribed.check.title')}
            description={$t('tassadapi.end-points.subscribed.check.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved`}
            response={{
                sessionTokenIsValid: true
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
