<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.processed-card')} description={$t('tassadapi.models.processed-card.description')}>
    <Model
        model={{
            print: `<span class="font-bold">${$t('common.card-print')}</span>`,
            images: 'number []'
        }}
        timestampable={false}
    />
</TassadapiModelsMenu>
