<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.front-client')}>
    <Model model={{
        name: 'string',
        productionUri: 'string | undefined',
        repositoryUri: 'string',
        usersCount: 'number',
        enabled: 'boolean'
    }} />
</TassadapiModelsMenu>
