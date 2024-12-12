<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.process.title')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.process.card.title')}
            description={$t('tassadapi.end-points.process.card.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/cards/process`}
            body={{
                photos: 'string []',
            }}
            response={{
                cards: `<span class="font-bold">${$t('common.processed-card')}</span> []`
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
