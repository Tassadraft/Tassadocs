<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.set')} description={$t('tassadapi.models.set.description')}>
    <Model
        model={
        {
            name: 'string',
            code: 'string',
            releasedAt: 'string | undefined',
            type: 'string',
            cardCount: 'number',
            iconSvgUri: 'string',
            scryfallUri: 'string',
            scryfallApiUri: 'string',
            foilOnly: 'boolean',
            nonFoilOnly: 'boolean',
        }}
    />
</TassadapiModelsMenu>
