<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.github-repository')}>
    <Model model={
        {
            name: 'string',
            owner: 'string',
            labels: `<span class="font-bold">${$t('common.github-repository-label')}</span> []`
        }}
    />
</TassadapiModelsMenu>
