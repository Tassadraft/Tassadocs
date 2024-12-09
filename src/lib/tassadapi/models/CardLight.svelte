<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-light')} description={$t('tassadapi.models.card-light.description')}>
    <Model
        model={{
            oracleId: 'string',
            layout: 'string',
            manaCost: 'string',
            cmc: 'number',
            colors: 'string[]',
            colorIdentity: 'string[]',
            rarity: 'string',
        }}
    />
</TassadapiModelsMenu>
