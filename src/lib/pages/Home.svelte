<script>
    import Menu from '../menu/Menu.svelte';
    import { t } from 'svelte-i18n';
    import Title from '../shared/Title.svelte';
</script>

<Menu />

<Title title={$t('home.title')} />
