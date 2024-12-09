<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.category')} description={$t('tassadapi.models.category.description')}>
    <Model model={{ name: 'string', autoCreated: 'boolean' }} />
</TassadapiModelsMenu>
