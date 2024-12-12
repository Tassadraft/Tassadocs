<script>
    import RetractableMenu from '../menu/RetractableMenu.svelte';
    import { t } from 'svelte-i18n';
    import Title from '../shared/Title.svelte';
</script>

<RetractableMenu />

<Title title={$t('home.title')} />
