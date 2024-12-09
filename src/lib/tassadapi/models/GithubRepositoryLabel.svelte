<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.github-repository-label')}>
    <Model model={
        {
            name: 'string',
            color: 'string',
            description: 'string | undefined',
        }}
    />
</TassadapiModelsMenu>
