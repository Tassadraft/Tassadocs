<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-price')}>
    <Model
        model={{
            usd: 'string | undefined',
            usdFoil: 'string | undefined',
            eur: 'string | undefined',
            eurFoil: 'string | undefined',
        }}
    />
</TassadapiModelsMenu>
