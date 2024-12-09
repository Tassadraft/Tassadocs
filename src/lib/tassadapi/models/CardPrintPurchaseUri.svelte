<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-purchase-uri')}>
    <Model
        model={{
            tcgPlayer: 'string | undefined',
            cardMarket: 'string | undefined',
        }}
    />
</TassadapiModelsMenu>
