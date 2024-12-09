<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.deck-card')}>
    <Model
        model={{
            id: 'number',
            print: `<span class="font-bold">${$t('common.card-print')}</span>`,
            relatedPrints: `<span class="font-bold">${$t('common.deck-card-related-card-print')}</span> []`,
            quantity: 'number',
        }}
    />
</TassadapiModelsMenu>
