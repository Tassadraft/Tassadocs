<script>
    import { t } from 'svelte-i18n';
    import TassadapiEndpointsMenu from '../../menu/TassadapiEndpointsMenu.svelte';
    import Endpoint from '../../shared/Endpoint.svelte';

    let isLogged;
    let isSubscribed
</script>

<TassadapiEndpointsMenu title={$t('tassadapi.end-points.edit-deck.title')} bind:isLogged bind:isSubscribed>
    <div class="flex flex-col gap-3">
        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.metadata.title')}
            description={$t('tassadapi.end-points.edit-deck.metadata.description')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/metadata`}
            body={{
                name: 'string',
                description: 'string | undefined',
                public: 'boolean',
                enabled: 'boolean'
            }}
            params={{
                deckId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            response={{
                message: 'string'
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.add-card.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/add-card`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            params={{
                deckId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            body={{
                cardId: $t('tassadapi.end-points.edit-deck.add-card.body.card-id')
            }}
            response={{
                message: 'string',
                card: `<span class="font-bold">${$t('common.deck-card')}</span>`
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.remove-card.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/remove-card`}
            params={{
                cardId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            body={{
                cardId: $t('tassadapi.end-points.edit-deck.add-card.body.card-id')
            }}
            response={`<span class="font-bold">${$t('common.deck-card')}</span>`}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.move-card.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/move-card`}
            params={{
                cardId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            body={{
                cardId: $t('tassadapi.end-points.edit-deck.move-card.body.card-id'),
                categoryId: $t('tassadapi.end-points.edit-deck.move-card.body.category-id')
            }}
            response={{ message: 'string' }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.add-category.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/add-category`}
            params={{
                cardId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            body={{
                name: 'string'
            }}
            response={{
                message: 'string',
                category: `<span class="font-bold">${$t('common.deck-category')}</span>`
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.rename-category.title')}
            method="post"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/rename-category`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            params={{
                cardId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            body={{
                name: 'string'
            }}
            response={{
                message: 'string',
                category: `<span class="font-bold">${$t('common.deck-category')}</span>`
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />

        <Endpoint
            title={$t('tassadapi.end-points.edit-deck.clear-categories.title')}
            method="delete"
            endpoint={`${process.env.VITE_TASSADAPI_BASE_URL}/api/auth/reserved/decks/edit/:deckId/clear-categories`}
            queryArgs={{
                optional: {
                    language: {value: ['en', 'fr'], fallback: 'en'}
                }
            }}
            params={{
                cardId: { value: $t('tassadapi.end-points.edit-deck.params.deck-id') }
            }}
            response={{
                message: 'string',
                deck: `<span class="font-bold">${$t('common.deck')}</span>`
            }}
            logged={true}
            subscribed={true}
            bind:isLogged
            bind:isSubscribed
        />
    </div>
</TassadapiEndpointsMenu>
