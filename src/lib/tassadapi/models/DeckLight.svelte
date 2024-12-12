<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.deck-light')}>
    <Model
        model={{
            id: 'number',
            name: 'string',
            description: 'string | undefined',
            cards: 'number',
            public: 'boolean',
            enabled: 'boolean',
            enableDetailedCategories: 'boolean',
            format: 'string',
            owner: `<span class="font-bold">${$t('common.user')}</span>`,
            visuals: 'string []'
        }}
    />
</TassadapiModelsMenu>
