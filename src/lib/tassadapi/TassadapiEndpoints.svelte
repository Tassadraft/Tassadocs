<script>
    import Title from '../shared/Title.svelte';
    import { t } from 'svelte-i18n';
    import RetractableMenu from '../menu/RetractableMenu.svelte';
</script>

<RetractableMenu />

<Title title={$t('tassadapi.end-points.title')} />
