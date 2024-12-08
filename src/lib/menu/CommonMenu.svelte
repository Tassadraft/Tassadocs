<script>
    import MenuItem from './MenuItem.svelte';
    import { t } from 'svelte-i18n';

    export let footer = false;
</script>

<ul class={`${footer ? '' : 'space-y-4'} p-4`}>
    <MenuItem {footer} iconLeft="home" href="/">{$t('menu.home')}</MenuItem>
    <MenuItem {footer} iconLeft="cloud" href="/tassadapi">{$t('common.tassadapi')}</MenuItem>
</ul>
