<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed;
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.new-deck.title')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.new-deck.formats.title')}
            description={$t('tassadapi.end-points.new-deck.formats.description')}
            method="get"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/supported-formats`}
            response='<span class="text-orange-500">string []</span>'
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.new-deck.new.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/decks/public`}
            body={{
                name: 'string [3, 50]',
                description: 'string < 1024 | undefined',
                format: $t('tassadapi.end-points.new-deck.new.body.format'),
                public: 'boolean',
                enabled: 'boolean',
                file: 'file | undefined'
            }}
            response={{
                message: 'string',
                deckId: $t('tassadapi.end-points.new-deck.new.response.deck-id')
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
