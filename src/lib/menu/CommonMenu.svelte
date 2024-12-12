<script>
    import MenuItem from './MenuItem.svelte';
    import { t } from 'svelte-i18n';

    export let footer = false;
    export let retractable = false;
</script>

<ul class={`${footer ? '' : 'space-y-4'} p-4`}>
    <MenuItem {retractable} {footer} iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
    <MenuItem {retractable} {footer} iconLeft="cloud" href="/tassadapi">{$t('common.tassadapi')}</MenuItem>
</ul>
