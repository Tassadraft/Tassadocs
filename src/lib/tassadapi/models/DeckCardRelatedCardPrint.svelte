<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.deck-card-related-card-print')}>
    <Model
        model={{
            id: 'number',
            relatedPrints: `<span class="font-bold">${$t('common.card-print')}</span> []`,
        }}
    />
</TassadapiModelsMenu>
