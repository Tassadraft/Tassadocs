<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.access-token')}>
    <Model model={{ type: 'string', name: 'string | undefined', token: 'string', abilities: '[\'*\']', lastUsedAt: 'string | undefined', expiresAt: 'string' }} />
</TassadapiModelsMenu>
