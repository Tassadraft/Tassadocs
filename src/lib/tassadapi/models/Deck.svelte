<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.deck')}>
    <Model
        model={{
            id: 'number',
            name: 'string',
            description: 'string | undefined',
            public: 'boolean',
            enabled: 'boolean',
            enableDetailedCategories: 'boolean',
            format: 'string',
            owner: `<span class="font-bold">${$t('common.user')}</span>`,
            categories: `<span class="font-bold">${$t('common.deck-category')}</span> []`,
        }}
    />
</TassadapiModelsMenu>
