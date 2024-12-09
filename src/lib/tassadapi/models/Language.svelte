<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.language')} description={$t('tassadapi.models.language.description')}>
    <Model model={{ name: 'string', code: 'string' }} />
</TassadapiModelsMenu>
