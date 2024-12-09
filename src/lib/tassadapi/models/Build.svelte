<script>
    import { t } from 'svelte-i18n';
    import TassadapiModelsMenu from '../../menu/TassadapiModelsMenu.svelte';
    import Model from '../../shared/Model.svelte';
</script>

<TassadapiModelsMenu title={$t('common.build')}>
    <Model model={{ version: 'string', downloads: 'number', size: 'number (in MB)', extension: '"apk" | "ipa"' }} />
</TassadapiModelsMenu>
