<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.deck-category')}>
    <Model
        model={{
            id: 'number',
            category: `<span class="font-bold">${$t('common.category')}</span>`,
            cards: `<span class="font-bold">${$t('common.deck-card')}</span> []`,
        }}
    />
</TassadapiModelsMenu>
