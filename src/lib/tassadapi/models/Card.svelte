<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card')} description={$t('tassadapi.models.card.description')}>
    <Model
        model={{
            oracleId: 'string (unique Magic: the Gathering id by card)',
            layout: 'string',
            manaCost: 'string',
            cmc: 'number',
            colors: 'string[]',
            colorIdentity: 'string[]',
            rarity: 'string',
            legality: '<span class="font-bold">CardLegality</span>',
            prints: '<span class="font-bold">CardPrint</span>[]',
        }}
    />
</TassadapiModelsMenu>
