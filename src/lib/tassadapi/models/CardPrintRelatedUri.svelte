<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.card-print-related-uri')}>
    <Model
        model={{
            gatherer: 'string | undefined',
            edhrec: 'string | undefined',
            scryfall: 'string | undefined',
        }}
    />
</TassadapiModelsMenu>
